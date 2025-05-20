import { Scene } from 'phaser';

export class Boot extends Scene {
    constructor() {
        super('Boot');
    }

    preload() {
        //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
        //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.

        this.load.setPath('/.proxy/assets');
        this.load.image('background', '/img/bg-dark.jpg');
        this.load.image('logo', '/img/logo.png');
        
        this.load.font('metal','/font/MetalsmithRegular-x3yMq.ttf');
    }

    create() {
        this.scene.start('Preloader');
    }
}