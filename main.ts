input.onButtonPressed(Button.A, function () {
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    basic.pause(2000)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    soundExpression.spring.playUntilDone()
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 8; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.pause(800)
    }
})
input.onButtonPressed(Button.B, function () {
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    basic.pause(2000)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    soundExpression.slide.playUntilDone()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playMelody("C5 B A G F E D C ", 200)
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
})
basic.showIcon(IconNames.Happy)
basic.pause(1000)
basic.clearScreen()
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showIcon(IconNames.Cow)
    basic.pause(100)
})
