'use client';

import React, { ReactNode, useEffect } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createClientStoreIfNeeded, setStore } from '../components/store';
import { useGeneral } from '../lib/util/hooks/useGeneral';
import { initPageTitleBlink } from '../lib/util/page_title_blink';
import { updateThemeColors } from '../components/layout/themes';
import { updateSettingsBasedOnProStatus } from '../components/layout/pro_audit';
import { useMe } from '../lib/util/hooks/useMe';
import { initSocketIO } from '../lib/util/socket/socketio';
import { useDispatch } from 'react-redux';
import { setGeneral } from '../lib/actions/general';
import Modal from '../components/common/modal/Modal';
import LoadingCover from '../components/layout/loading_cover/LoadingCover';
import { initAnonymousAppData, initAppData, setBrowserSessionId } from '../lib/util/init';

export function Providers({ children }: { children: ReactNode }) {
  // Create store client-side
  const store = createClientStoreIfNeeded();
  
  if (store) {
    setStore(store);
  }
  
  if (!store) {
    // Only render on client
    return null;
  }
  
  return (
    <Provider store={store}>
      <AppInitializer>
        {children}
        <ToastContainer 
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </AppInitializer>
    </Provider>
  );
}

function AppInitializer({ children }: { children: ReactNode }) {
  const dispatch = useDispatch();
  const modals = useGeneral('modals');
  const appLoaded = useGeneral('app_loaded');
  const me = useMe();

  function appInitiated() {
    setBrowserSessionId(dispatch);
    initPageTitleBlink();
    updateThemeColors();
    updateSettingsBasedOnProStatus(me);
    dispatch(setGeneral('app_loaded', true));
  }

  useEffect(() => {
    if (appLoaded) {
      return;
    }

    if (!me) {
      initAnonymousAppData(appInitiated);
      return;
    }

    initSocketIO();
    initAppData(me, dispatch, appInitiated);
  }, []);

  let modalOutput: ReactNode = null;
  if (modals && modals.length) {
    const modalList = [];
    for (let i = 0; i < modals.length; i += 1) {
      const modal = modals[i];

      modalList.push(
        <Modal key={modal.createdAt} zIndex={1000000 + i} {...modal.options}>
          {modal.body}
        </Modal>
      );
    }

    modalOutput = <div className="cd-modal--list">{modalList}</div>;
  }

  return (
    <>
      <LoadingCover fadeOut={appLoaded} />
      {modalOutput}
      {appLoaded ? children : null}
    </>
  );
}