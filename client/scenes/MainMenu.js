import { Scene } from 'phaser';

export class MainMenu extends Scene
{
    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        const bg = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'background');
        let scaleX = this.cameras.main.width / bg.width ;
        let scaleY = this.cameras.main.height / bg.height ;
        let scale = Math.max(scaleX, scaleY);
        bg.setScale(scale).setScrollFactor(0);

        this.add.image(this.game.config.width * 0.5, 190, 'logo');

        this.add.text(this.game.config.width * 0.5, 400, 'Main Menu', {
            fontFamily: 'metal', fontSize: 38, color: '#bcaaaa',
            stroke: '#2a0101', strokeThickness: 2,
            align: 'center'
        }).setOrigin(0.5);

        this.input.once('pointerdown', () => {

            this.scene.start('Game');

        });
    }
}