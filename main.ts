basic.forever(function () {
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
    basic.pause(3600000)
})
