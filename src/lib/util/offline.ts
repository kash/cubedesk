import { UserAccount } from '../../server/schemas/UserAccount.schema';
import { generateId } from '../../shared/code';

const OFFLINE_KEY = 'cd_offline_hash';

// Initialize offline data
export async function initOfflineData(me: UserAccount, callback: (passed: boolean) => Promise<void>) {
  const savedHash = localStorage.getItem(OFFLINE_KEY);
  const userId = me?.id || 'anonymous';
  
  if (!savedHash) {
    await callback(false);
    return;
  }
  
  const parts = savedHash.split(':');
  if (parts.length !== 2) {
    await callback(false);
    return;
  }
  
  const [hash, storedUserId] = parts;
  
  if (storedUserId !== userId) {
    await callback(false);
    return;
  }
  
  await callback(true);
}

// Clear offline data
export async function clearOfflineData() {
  localStorage.removeItem(OFFLINE_KEY);
}

// Update offline hash
export async function updateOfflineHash(forceHash = false) {
  const currentHash = localStorage.getItem(OFFLINE_KEY);
  
  if (currentHash && !forceHash) {
    return;
  }
  
  const newHash = generateId();
  const userId = 'me?.id' || 'anonymous';
  
  localStorage.setItem(OFFLINE_KEY, `${newHash}:${userId}`);
}