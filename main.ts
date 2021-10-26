let zähler = 0
let on__off = 1
basic.forever(function () {
    if (on__off == 1) {
        if (zähler == 1) {
            music.ringTone(zähler)
        } else {
            on__off = 0
        }
    }
})
loops.everyInterval(3000, function () {
    zähler = randint(1, 5)
})
