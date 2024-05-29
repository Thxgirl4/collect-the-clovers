sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.smiles, 100)
    music.baDing.play()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 100)
    music.wawawawaa.play()
    info.changeLifeBy(-1)
})
let bee: Sprite = null
let clover: Sprite = null
scene.setBackgroundImage(assets.image`background`)
let cacoCaco = sprites.create(assets.image`hero`, SpriteKind.Player)
controller.moveSprite(cacoCaco)
cacoCaco.setStayInScreen(true)
game.onUpdateInterval(1000, function () {
    clover = sprites.createProjectileFromSide(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, randint(-50, 50), randint(-50, 50))
    bee = sprites.createProjectileFromSide(img`
        . . . . 1 9 1 9 1 1 9 1 9 . . . 
        . . . . 1 . 9 . 9 . 9 . 9 . . . 
        . . . . . 9 . 1 . 9 . 1 9 . . . 
        . . . . . . 9 9 9 9 9 9 . . . . 
        . . f f . . 5 5 f 5 4 f . . . . 
        . f f f f 4 5 f 5 5 f 5 4 . . . 
        f d f f f 5 5 f 5 5 f 5 5 f . . 
        f f f f f 5 5 f 5 5 f 5 5 f f f 
        f d f f f 5 5 f 5 5 f 5 5 f . . 
        . f f f f 4 5 f 5 5 f 5 4 . . . 
        . . f f . . 5 5 f 5 4 f . . . . 
        . . . . . . 9 9 9 9 9 9 . . . . 
        . . . . . 9 . 1 . 9 . 1 9 . . . 
        . . . . 1 . 9 . 9 . 9 . 9 . . . 
        . . . . 1 9 1 9 1 1 9 1 9 . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(-50, 50), randint(-50, 50))
    bee.setKind(SpriteKind.Enemy)
})
