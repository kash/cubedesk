
import React from 'react';
import ModalHeader from '../../common/modal/modal_header/ModalHeader';

export default function BluetoothErrorMessage() {

    let title = <span style={{ color: 'rgb(var(--error-color))' }}>Bluetooth is not available!</span>;
    let description = <span style={{ color: 'rgb(var(--warning-color))' }}>Check if Bluetooth is enabled on your system.</span>;

    return (
        <>
            <ModalHeader title={title} description={description} />
            <p>
                Your browser may not support Web Bluetooth API.
                Consider using compatible browser, the best choice is:
                <ul style={{ listStyle: 'disc', margin: '1em', paddingLeft: '1em' }}>
                    <li>Chrome on macOS, Linux, Android or Windows</li>
                    <li>Bluefy on iOS</li>
                </ul>
                Also you can check &nbsp;
                <a style={{ textDecoration: 'underline' }} target='_blank'
                    href='https://github.com/WebBluetoothCG/web-bluetooth/blob/main/implementation-status.md'>
                    Web Bluetooth Community Group implementation status
                </a>
                &nbsp; for complete list of different browsers and supported Web Bluetooth API features.
            </p>
        </>
    );

}
