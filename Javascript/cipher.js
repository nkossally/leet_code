const letters = "abcdefghijklmnopqrstuvwxyz".split("")

let diff = -7

const message1 = "gluhtlishjrvbadvyyplkaohavbyjpwolypzavvdlhrvuuleatlzzhnlzdpajoavcpnlulyljpwolyrlfdvykpzaolopkkluzftivsvmklhaoputfmhcvypalovsilpuluk"
const message2 = "vwduwljudeehghyhubwklqjlfrxogilqgsohdvhuhwxuqdqbeoxhsulqwviruydxowd qgdodupghvljqedvhgrqzklfkedqnbrxghflghrqldpvhwwlqjxsvdihkrxvhfr"

const transformLetter = (letter, diff) => {
    const idx = letters.indexOf(letter)
    const newIdx = (idx + diff + 26) % 26
    return letters[newIdx]
}

const transformMessage = (message, diff) =>{
    let result = ""

    message.split("").forEach(letter =>{
        if(letter === " "){
            result += " "
        } else {
            result += transformLetter(letter, diff)
        }
    })

    console.log(result)


}

transformMessage(message1, -7)
transformMessage(message2, -3)


