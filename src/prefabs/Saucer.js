class Saucer extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame)
  
        scene.add.existing(this)
        this.points = pointValue
        this.moveSpeed = game.settings.spaceshipSpeed * 1.25
    }

    update() {
        let sine = Math.sin(this.x / 100)
        this.y -= sine

        this.x -= this.moveSpeed

        if(this.x <= 0 - this.width) {
            this.x = game.config.width
            this.y = borderUISize*5
        }
    }

    reset() {
        this.x = game.config.width
        this.y = game.config.width + borderUISize*3
    }
}