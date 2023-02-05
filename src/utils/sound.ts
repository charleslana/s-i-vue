import * as createjs from 'createjs-module';
window.createjs = createjs;
let bgmHomeInstance: createjs.AbstractSoundInstance;

export const btnClick = () => {
  createjs.Sound.play('btnClick');
};

export const btnClose = () => {
  createjs.Sound.play('btnClose');
};

export const bgmHome = () => {
  bgmHomeInstance = createjs.Sound.play('bgmHome', { loop: -1 });
};

export const stopBgmHome = () => {
  if (bgmHomeInstance) {
    bgmHomeInstance.stop();
  }
};
