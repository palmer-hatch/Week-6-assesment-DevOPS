const {shuffleArray} = require('./utils')

let dummyArr = [1,2,3,4]

describe('shuffleArray should return an array and length remains the same ', () => {
     test("should return an array", () =>{
         let returnedArr = shuffleArray(dummyArr)
        expect(returnedArr).toReturn(dummyArr)
    })
    test ("should same array.length", () =>{
        let returnedArr = shuffleArray(dummyArr)
        expect(returnedArr.length).toBe(dummyArr.length)
    })
})