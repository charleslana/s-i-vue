import * as createjs from 'createjs-module';
import LocalStorageService from '@/services/LocalStorageService';
window.createjs = createjs;
let bgmHomeInstance: createjs.AbstractSoundInstance;

export const btnClick = (): void => {
  if (LocalStorageService.getSoundEffect()) {
    createjs.Sound.play('btnClick');
  }
};

export const btnClose = (): void => {
  if (LocalStorageService.getSoundEffect()) {
    createjs.Sound.play('btnClose');
  }
};

export const bgmHome = (): void => {
  if (LocalStorageService.getSoundBGM()) {
    bgmHomeInstance = createjs.Sound.play('bgmHome', { loop: -1 });
  }
};

export const stopBgmHome = (): void => {
  if (bgmHomeInstance) {
    bgmHomeInstance.stop();
  }
};

export const stop = (): void => {
  createjs.Sound.stop();
};

export const btnTab = (): void => {
  if (LocalStorageService.getSoundEffect()) {
    createjs.Sound.play('btnTab');
  }
};
