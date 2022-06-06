serial.writeLine("" + (sonar.ping(
DigitalPin.P1,
DigitalPin.P2,
PingUnit.Centimeters
)))
basic.showNumber(sonar.ping(
DigitalPin.P1,
DigitalPin.P2,
PingUnit.Centimeters
))
basic.forever(function () {
    music.playTone(659, music.beat(BeatFraction.Half))
    basic.pause(100)
    music.playTone(784, music.beat(BeatFraction.Half))
    basic.pause(100)
    music.playTone(880, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(587, music.beat(BeatFraction.Whole))
    basic.pause(100)
})
basic.forever(function () {
    music.setVolume(255)
})
