input.onButtonPressed(Button.A, function () {
    Hero.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    Hero.change(LedSpriteProperty.Y, 1)
})
let Wall_4: game.LedSprite = null
let Wall_3: game.LedSprite = null
let Wall_2: game.LedSprite = null
let Wall_1: game.LedSprite = null
let Hero: game.LedSprite = null
Hero = game.createSprite(0, 2)
game.setScore(0)
let Speed = 1250
loops.everyInterval(500, function () {
    if (randint(1, 5) == 1) {
        Wall_1 = game.createSprite(4, 0)
        Wall_2 = game.createSprite(4, 1)
        Wall_3 = game.createSprite(4, 2)
        Wall_4 = game.createSprite(4, 3)
        for (let index = 0; index < 5; index++) {
            basic.pause(Speed)
            Wall_1.change(LedSpriteProperty.X, -1)
            Wall_2.change(LedSpriteProperty.X, -1)
            Wall_3.change(LedSpriteProperty.X, -1)
            Wall_4.change(LedSpriteProperty.X, -1)
        }
        Wall_1.delete()
        Wall_2.delete()
        Wall_3.delete()
        Wall_4.delete()
        game.addScore(1)
    }
    if (randint(1, 5) == 2) {
        Wall_1 = game.createSprite(4, 0)
        Wall_2 = game.createSprite(4, 1)
        Wall_3 = game.createSprite(4, 2)
        Wall_4 = game.createSprite(4, 4)
        for (let index = 0; index < 5; index++) {
            basic.pause(Speed)
            Wall_1.change(LedSpriteProperty.X, -1)
            Wall_2.change(LedSpriteProperty.X, -1)
            Wall_3.change(LedSpriteProperty.X, -1)
            Wall_4.change(LedSpriteProperty.X, -1)
        }
        Wall_1.delete()
        Wall_2.delete()
        Wall_3.delete()
        Wall_4.delete()
        game.addScore(1)
    }
    if (randint(1, 5) == 3) {
        Wall_1 = game.createSprite(4, 0)
        Wall_2 = game.createSprite(4, 1)
        Wall_3 = game.createSprite(4, 3)
        Wall_4 = game.createSprite(4, 4)
        for (let index = 0; index < 5; index++) {
            basic.pause(Speed)
            Wall_1.change(LedSpriteProperty.X, -1)
            Wall_2.change(LedSpriteProperty.X, -1)
            Wall_3.change(LedSpriteProperty.X, -1)
            Wall_4.change(LedSpriteProperty.X, -1)
        }
        Wall_1.delete()
        Wall_2.delete()
        Wall_3.delete()
        Wall_4.delete()
        game.addScore(1)
    }
    if (randint(1, 5) == 4) {
        Wall_1 = game.createSprite(4, 0)
        Wall_2 = game.createSprite(4, 2)
        Wall_3 = game.createSprite(4, 3)
        Wall_4 = game.createSprite(4, 4)
        for (let index = 0; index < 5; index++) {
            basic.pause(Speed)
            Wall_1.change(LedSpriteProperty.X, -1)
            Wall_2.change(LedSpriteProperty.X, -1)
            Wall_3.change(LedSpriteProperty.X, -1)
            Wall_4.change(LedSpriteProperty.X, -1)
        }
        Wall_1.delete()
        Wall_2.delete()
        Wall_3.delete()
        Wall_4.delete()
        game.addScore(1)
    }
    if (randint(1, 5) == 5) {
        Wall_1 = game.createSprite(4, 1)
        Wall_2 = game.createSprite(4, 2)
        Wall_3 = game.createSprite(4, 3)
        Wall_4 = game.createSprite(4, 4)
        for (let index = 0; index < 5; index++) {
            basic.pause(Speed)
            Wall_1.change(LedSpriteProperty.X, -1)
            Wall_2.change(LedSpriteProperty.X, -1)
            Wall_3.change(LedSpriteProperty.X, -1)
            Wall_4.change(LedSpriteProperty.X, -1)
        }
        Wall_1.delete()
        Wall_2.delete()
        Wall_3.delete()
        Wall_4.delete()
        game.addScore(1)
    }
})
basic.forever(function () {
    if (game.score() == 3) {
        Speed = 1000
    }
    if (game.score() == 10) {
        Speed = 725
    }
    if (game.score() == 15) {
        Speed = 500
    }
    if (game.score() == 20) {
        Speed = 400
    }
    if (game.score() == 25) {
        Speed = 300
    }
    if (game.score() == 30) {
        Speed = 200
    }
    if (game.score() == 35) {
        Speed = 150
    }
    if (game.score() == 40) {
        Speed = 100
    }
    if (game.score() == 45) {
        Speed = 75
    }
    if (game.score() == 50) {
        Speed = 50
    }
    if (game.score() == 55) {
        Speed = 45
    }
    if (game.score() == 60) {
        Speed = 40
    }
    if (game.score() == 65) {
        Speed = 35
    }
    if (game.score() == 70) {
        Speed = 30
    }
    if (game.score() == 75) {
        Speed = 25
    }
    if (game.score() == 80) {
        Speed = 20
    }
    if (game.score() == 85) {
        Speed = 15
    }
    if (game.score() == 90) {
        Speed = 10
    }
    if (game.score() == 95) {
        Speed = 5
    }
    if (game.score() == 100) {
        basic.showString("You have got a score of 100! From now on, the game will not get faster. You have the reaction time of a computer! I don't even now how you got this far.")
    }
})
basic.forever(function () {
    music.playMelody("E B C5 A B G A F ", 120)
})
basic.forever(function () {
    if (Hero.isTouching(Wall_1)) {
        basic.showString("Score=")
        basic.showString("" + (game.score()))
        control.reset()
    }
})
basic.forever(function () {
    if (Hero.isTouching(Wall_2)) {
        basic.showString("Score=")
        basic.showString("" + (game.score()))
        control.reset()
    }
})
basic.forever(function () {
    if (Hero.isTouching(Wall_3)) {
        basic.showString("Score=")
        basic.showString("" + (game.score()))
        control.reset()
    }
})
basic.forever(function () {
    if (Hero.isTouching(Wall_4)) {
        basic.showString("Score=")
        basic.showString("" + (game.score()))
        control.reset()
    }
})
