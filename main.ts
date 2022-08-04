let vitamine = 7
basic.forever(function () {
    basic.pause(3600000)
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M2,
    -255,
    SuperBit.enMotors.M1,
    0
    )
    basic.pause(440)
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M2,
    0,
    SuperBit.enMotors.M1,
    0
    )
})
basic.forever(function () {
    basic.pause(3600000)
    vitamine = vitamine - 1
})
basic.forever(function () {
    basic.clearScreen()
    basic.pause(3600000 - 300000)
    basic.showNumber(vitamine)
    basic.pause(300000)
    basic.showNumber(vitamine)
    basic.pause(300000)
})
