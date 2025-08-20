import { createRoot } from 'react-dom/client';
import App from './App';

// dom要素の取得
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
// アプリのレンダリング
root.render(<App />);

// preloadによって許可されたIPCの呼び出し
window.electron?.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron?.ipcRenderer.sendMessage('ipc-example', ['ping']);
