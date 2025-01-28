class Play extends Phaser.Scene {
    constructor() {
        super("playScene")
    }
    
    create() {
        this.starfield = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0, 0)

        this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x00FF00).setOrigin(0, 0)

        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0)
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0)
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0)

        this.p1Rocket = new Rocket(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'rocket').setOrigin(0.5, 0)

        keyFIRE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F)
        keyRESET = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)

        this.ship01 = new Spaceship(this, game.config.width + borderUISize*6, borderUISize*4, 'spaceship', 0, 50).setOrigin(0, 0)
        this.ship02 = new Saucer(this, game.config.width + borderUISize*3, borderUISize*5 , 'saucer', 0, 100).setOrigin(0,0).setScale(0.5)
        this.ship03 = new Spaceship(this, game.config.width, borderUISize*6 + borderPadding*4, 'spaceship', 0, 25).setOrigin(0,0)

        this.p1Score = 0
        this.p2Score = 0
        this.current = 'P1'
        this.timer = game.settings.gameTimer

        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#000000',
            color: '#FFFFFF',
            align: 'right',
            padding: {
                 top: 5,
                bottom: 5,
            },
            fixedWidth: 125
        }
        this.scoreLeft = this.add.text(borderUISize + borderPadding, borderUISize + borderPadding*2, this.p1Score, scoreConfig)
        this.scoreRight = this.add.text(game.config.width - borderUISize - borderPadding - 125, borderUISize + borderPadding*2, this.current, scoreConfig)

        this.gameOver = false
        this.going = true

        scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#00FF00',
            color: '#006000',
            align: 'right',
            padding: {
                 top: 5,
                bottom: 5,
            },
            fixedWidth: 100
        }

        scoreConfig.fixedWidth = 0

        if(game.settings.twoPlayer) {
            this.clock = this.time.delayedCall(this.timer, () => {
                    this.current = "P2"
                    this.timer = game.settings.gameTimer
                    let temper = this.p1Score
                    this.p1Score = this.p2Score
                    this.p2Score = temper
                    this.scoreLeft.text = this.p1Score
                    this.scoreRight.text = this.current
                    this.going = false
                    this.pop = this.add.text(game.config.width/2, game.config.height/2, ' PLAYER TWO ', scoreConfig).setOrigin(0.5)
                    this.p1Rocket.destroy();
                    this.p1Rocket = new Rocket(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'rocket').setOrigin(0.5, 0)
                    this.clock = this.time.delayedCall(1000, () => {
                        this.pop.text = ""
                        this.going = true
                    }, null, this)
                    this.clock = this.time.delayedCall(this.timer, () => {
                        this.current = "P1 ☠"
                        this.timer = game.settings.gameTimer
                        let temper = this.p1Score
                        this.p1Score = this.p2Score
                        this.p2Score = temper
                        this.scoreLeft.text = this.p1Score
                        this.scoreRight.text = this.current
                        this.going = false
                        this.pop = this.add.text(game.config.width/2, game.config.height/2, ' PLAYER ONE ', scoreConfig).setOrigin(0.5)
                        this.p1Rocket.destroy();
                        this.p1Rocket = new Rocket(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'rocket').setOrigin(0.5, 0)
                        this.clock = this.time.delayedCall(1000, () => {
                            this.pop.text = ""
                            this.going = true
                        }, null, this)
                        this.clock = this.time.delayedCall(this.timer, () => {
                            this.current = "P2 ☠"
                            this.timer = game.settings.gameTimer
                            let temper = this.p1Score
                            this.p1Score = this.p2Score
                            this.p2Score = temper
                            this.scoreLeft.text = this.p1Score
                            this.scoreRight.text = this.current
                            this.going = false
                            this.pop = this.add.text(game.config.width/2, game.config.height/2, ' PLAYER TWO ', scoreConfig).setOrigin(0.5)
                            this.p1Rocket.destroy();
                            this.p1Rocket = new Rocket(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'rocket').setOrigin(0.5, 0)
                            this.clock = this.time.delayedCall(1000, () => {
                                this.pop.text = ""
                                this.going = true
                            }, null, this)
                            this.clock = this.time.delayedCall(this.timer, () => {
                                this.current = "P1 ☠☠"
                                this.timer = game.settings.gameTimer
                                let temper = this.p1Score
                                this.p1Score = this.p2Score
                                this.p2Score = temper
                                this.scoreLeft.text = this.p1Score
                                this.scoreRight.text = this.current
                                this.going = false
                                this.pop = this.add.text(game.config.width/2, game.config.height/2, ' PLAYER ONE ', scoreConfig).setOrigin(0.5)
                                this.p1Rocket.destroy();
                                this.p1Rocket = new Rocket(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'rocket').setOrigin(0.5, 0)
                                this.clock = this.time.delayedCall(1000, () => {
                                    this.pop.text = ""
                                    this.going = true
                                }, null, this)
                                this.clock = this.time.delayedCall(this.timer, () => {
                                    this.current = "P2 ☠☠"
                                    this.timer = game.settings.gameTimer
                                    let temper = this.p1Score
                                    this.p1Score = this.p2Score
                                    this.p2Score = temper
                                    this.scoreLeft.text = this.p1Score
                                    this.scoreRight.text = this.current
                                    this.going = false
                                    this.pop = this.add.text(game.config.width/2, game.config.height/2, ' PLAYER TWO ', scoreConfig).setOrigin(0.5)
                                    this.p1Rocket.destroy();
                                    this.p1Rocket = new Rocket(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'rocket').setOrigin(0.5, 0)
                                    this.clock = this.time.delayedCall(1000, () => {
                                        this.pop.text = ""
                                        this.going = true
                                    }, null, this)
                                    this.clock = this.time.delayedCall(this.timer, () => {
                                        this.current = "☠☠☠ "
                                        this.timer = game.settings.gameTimer
                                        let temper = this.p1Score
                                        this.p1Score = this.p2Score
                                        this.p2Score = temper
                                        this.scoreRight.text = this.current
                                        if(this.p1Score > this.p2Score) {
                                            this.add.text(game.config.width/2, game.config.height/2, 'PLAYER ONE WINS!', scoreConfig).setOrigin(0.5)
                                        } else {
                                            this.add.text(game.config.width/2, game.config.height/2, 'PLAYER TWO WINS', scoreConfig).setOrigin(0.5)
                                        }
                                        this.add.text(game.config.width/2, game.config.height/2 + 64, 'Press (R) to Restart or ← for Menu', scoreConfig).setOrigin(0.5)
                                        this.gameOver = true
                                        this.going = false
                                    }, null, this)
                                }, null, this)
                            }, null, this)
                        }, null, this)
                    }, null, this)
                }, null, this)
        } else {
            this.clock = this.time.delayedCall(this.timer, () => {
                this.opt = this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', scoreConfig).setOrigin(0.5)
                this.opt2 = this.add.text(game.config.width/2, game.config.height/2 + 64, 'Press (R) to Restart or ← for Menu', scoreConfig).setOrigin(0.5)
                this.gameOver = true
                this.going = false
            }, null, this)
        }
    }

    update() {
        /*
        if(game.settings.twoPlayer) {
            if(this.current != 'P2 ☠☠') {
                let temp = this.current
                let temper = this.p1Score

                this.current = this.next
                this.next = temp + '☠'
                this.p2Score = this.p1Score
                this.p2Score = temper

                this.scoreLeft.text = this.p1Score
                this.scoreRight.text = this.current
                this.opt.text = ''
                this.opt2.text = ''

                this.gameOver = false
            }
        */
        if(this.gameOver && Phaser.Input.Keyboard.JustDown(keyRESET)) {
            this.scene.restart()
        }
        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            this.scene.start("menuScene")
         }

        this.starfield.tilePositionX -= 2
        if(this.going) {
            if((this.p1Rocket.y - 2) <= borderUISize * 3 + borderPadding) {
                this.letThemKnow()
                //console.log("AAAAAA")
            }
            this.p1Rocket.update()
            this.ship01.update()
            this.ship02.update()
            this.ship03.update()
        } 

        if(this.checkCollision(this.p1Rocket, this.ship03)) {
            this.p1Rocket.reset()
            this.shipExplode(this.ship03) 
        }
        if (this.checkSauce(this.p1Rocket, this.ship02)) {
            this.p1Rocket.reset()
            this.sauceExplode(this.ship02) 
        }
        if (this.checkCollision(this.p1Rocket, this.ship01)) {
            this.p1Rocket.reset()
            this.shipExplode(this.ship01) 
        }
    }

    letThemKnow() {
        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#00FF00',
            color: '#006000',
            align: 'right',
            padding: {
                 top: 5,
                bottom: 5,
            },
            fixedWidth: 190
        }
        this.buh = this.add.text(game.config.width/2, game.config.height/2, '-15 Seconds!', scoreConfig).setOrigin(0.5)
        this.click = this.time.delayedCall(500, () => {
            this.buh.destroy();
        }, null, this)
        let timing = this.clock.getRemaining()
        //console.log(timing)
        this.time.update(timing, 15000)
        //console.log(this.clock.getRemaining())
    }

    checkCollision(rocket, ship) {
        if (rocket.x < ship.x + ship.width && 
            rocket.x + rocket.width > ship.x && 
            rocket.y < ship.y + ship.height &&
            rocket.height + rocket.y > ship. y) {
            return true
        } else {
            return false
        }
    }

    checkSauce(rocket, sauce) {
        if (rocket.x < sauce.x + sauce.width && 
            rocket.x + rocket.width > sauce.x && 
            rocket.y < sauce.y + sauce.height &&
            rocket.height + rocket.y > sauce. y) {
            return true
        } else {
            return false
        }
    }

    shipExplode(ship) {
        // temporarily hide ship
        ship.alpha = 0
        // create explosion sprite at ship's position
        let boom = this.add.sprite(ship.x, ship.y, 'explosion').setOrigin(0, 0);
        boom.anims.play('explode')             // play explode animation
        boom.on('animationcomplete', () => {   // callback after anim completes
          ship.reset()                         // reset ship position
          ship.alpha = 1                       // make ship visible again
          boom.destroy()                       // remove explosion sprite
        })

        let emitter = this.add.particles(ship.x, ship.y, 'square', {
            lifespan: 400,
            speed: { min: 150, max: 250 },
            scale: { start: 0.8, end: 0 },
            gravityY: 150,
            blendMode: 'ADD',
            emitting: false
        });

        emitter.explode(16);
        
        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#00FF00',
            color: '#006000',
            align: 'right',
            padding: {
                 top: 5,
                bottom: 5,
            },
            fixedWidth: 175
        }

        this.p1Score += ship.points
        this.scoreLeft.text = this.p1Score
        let timing = this.clock.getRemaining()
        //console.log(timing)
        this.time.update(timing, -5000)
        //console.log(this.clock.getRemaining())
        this.buh = this.add.text(game.config.width/2, game.config.height/2, '+5 Seconds!', scoreConfig).setOrigin(0.5)
        this.click = this.time.delayedCall(500, () => {
            this.buh.destroy();
        }, null, this)

        this.sound.play('sfx-explosion')
    }

    sauceExplode(sauce) {
        // temporarily hide ship
        sauce.alpha = 0
        // create explosion sprite at ship's position
        let boom = this.add.sprite(sauce.x, sauce.y, 'explosion').setOrigin(0, 0);
        boom.anims.play('explode')             // play explode animation
        boom.on('animationcomplete', () => {   // callback after anim completes
            sauce.reset()                         // reset ship position
            sauce.alpha = 1                       // make ship visible again
        boom.destroy()                       // remove explosion sprite
        })

        let emitter = this.add.particles(sauce.x, sauce.y, 'square', {
            lifespan: 400,
            speed: { min: 150, max: 250 },
            scale: { start: 0.8, end: 0 },
            gravityY: 150,
            blendMode: 'ADD',
            emitting: false
        });

        emitter.explode(16);
        
        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#00FF00',
            color: '#006000',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 175
        }

        this.p1Score += sauce.points
        this.scoreLeft.text = this.p1Score
        let timing = this.clock.getRemaining()
        //console.log(timing)
        this.time.update(timing, -10000)
        //console.log(this.clock.getRemaining())
        this.buh = this.add.text(game.config.width/2, game.config.height/2, '+10 Seconds!', scoreConfig).setOrigin(0.5)
        this.click = this.time.delayedCall(500, () => {
            this.buh.destroy();
        }, null, this)

        this.sound.play('sfx-explosion')
    }
}