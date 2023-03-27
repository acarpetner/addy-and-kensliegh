let sprite = game.createSprite(2, 2)
basic.pause(100)
basic.forever(function on_forever() {
    sprite.move(1)
    sprite.ifOnEdgeBounce()
})
