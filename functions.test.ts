const {shuffleArray} = require('./utils')

describe('shuffleArray should return an array and lenght remains the same ', () => {
     test("should return an array", () =>{
        expect(shuffleArray).toReturn(arrCopy)
    })
    test ("should same array.lenght", () =>{
        expect(arr.length).toBe(arrCopy.length)
    })
})