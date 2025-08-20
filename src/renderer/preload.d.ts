import { ElectronHandler } from '../main/preload';

// 呼び出しやすいWindowインターフェースにelectronプロパティを追加する
declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    electron: ElectronHandler;
  }
}

export {};
