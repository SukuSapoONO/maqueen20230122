MbitMore.onMessageWithText("B", function (content) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
})
MbitMore.onMessageWithText("R", function (content) {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
})
MbitMore.onMessageWithText("F", function (content) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
})
MbitMore.onMessageWithText("L", function (content) {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
})
MbitMore.onMessageWithText("S", function (content) {
    maqueen.motorStop(maqueen.Motors.All)
})
MbitMore.startService()
