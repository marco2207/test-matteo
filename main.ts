let distance2 = 0
let speed2 = 0
basic.forever(function () {
    distance2 = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (distance2 <= 5) {
        speed2 = 0
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 10)
    } else if (distance2 > 30) {
        speed2 = 255
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, speed2)
    } else {
        speed2 = distance2 * 7
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, speed2)
    }
})
