let data = "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available"

function *enumerate(array) {
   for (let i = 0; i < array.length; i += 1) {
      yield [i, array[i]];
   }
}
function listToText(list) {
    let finalText = ""
    list.forEach(element => {
        finalText += element + "\n"
    });
    return finalText
}
function logAdded(word) {
    console.log("+","added",">>" + word+ "<<","Lenght:", word.length)
}
function logOmitted(word) {
    console.log("-","Ommited", ">>" + word+ "<<", "Lenght:", word.length)
}
// takes string > building pyramyd text and keeps it as string and list separately
function buildPyramydText(text) {
    let words = text.trim().split(" ")
    let newTextList = []
    let lengthCheck = 0
    let prevWord = ""
    words.forEach(word => {
        if (word.length > lengthCheck && prevWord.length == 0) {
            newTextList.push(word)
            logAdded(word)
            lengthCheck = word.length
            console.log(lengthCheck)
        }
        else {
            logOmitted(word)
            prevWord += word + " "
            if (prevWord.length > lengthCheck) {
                newTextList.push(prevWord)
                logAdded(prevWord)
                lengthCheck = prevWord.length
                prevWord = ""
            }
        }
    });
    finalText = listToText(newTextList)
    return {
        finalText: finalText,
        finalList: newTextList
    }
}
// takes list of sentences > ajdusting them if their lengths are almost same > returing string and list 
function adjustPyramyd(inpList){
    let prevElementLenght = 0
    let adjustedList = []
    for (let currElement of enumerate(inpList.finalList)) {
        
        let idx = currElement[0]
        let currValue = currElement[1]
        let currValueLength = currValue.trim().length

        // console.log(idx, currValue, currValueLength)
        if (prevElementLenght == currValueLength - 1 ) {
            console.log("Adjusted",idx+1,"line", ">>"+currValue+"<<","length:", currValueLength, "previous was:", prevElementLenght)
            prevElementLenght = 0
            adjustedValue = currValue.replace(" ", "  ", 1)
            adjustedList.push(adjustedValue)
            inpList.finalList[idx] = adjustedValue
        }
        else{
            adjustedList.push(currValue)
        }
        prevElementLenght = currValue.length
    }
    // this is to applay changes in buildPyramydText when ill make as class
    inpList.finalText = inpList.finalList
    
    
    return {
        adjustedList: adjustedList,
        adjustedText: listToText(adjustedList)
    }

}
// takes string uses buildPyramydText and adjustPyramyd functions together > returns string and list 
function buildAPT(text) {
    let converted = adjustPyramyd(buildPyramydText(text))
    return {
        text : converted.adjustedText,
        list : converted.adjustedList
    }
}

