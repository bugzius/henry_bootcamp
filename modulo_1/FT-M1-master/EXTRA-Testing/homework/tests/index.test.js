const {checkSeatStatus, getRowNumber, book} = require('../homework.js');

// describe('Validate checkSeatStatus function', () => {
//     it('Test if checkSeatStatus is a Function type',() => {
//         expect(typeof checkSeatStatus).toBe('function');
//     });
//     it('Argument in function checkSeatStatus is a String', () => {
//         expect(() => checkSeatStatus(4)).toThrow(new TypeError('First parameter is not a string'))
//     })
// });

describe('Function getRowNumber', () => {
    it('should return "throw new Error()" if letter is long string', () => {
        expect(getRowNumber('As')).toThrow(new TypeError("The argument is a long String"));
    });
    it('should return true if the given seat defined by row and column is booked', () => {
        expect(getRowNumber('A')).toBe(0);
    });

    it('should return false if the given seat defined by row and column is not booked', () => {
        expect(getRowNumber('E')).toBe(4);
    });
})

describe('Function checkSeatStatus', () => {
    it('If function checkSeatStatus return false on row A in colum 2', () => {
        expect(checkSeatStatus('A',3)).toBe(false);
    });

    it('If function checkSeatStatus return true on row C in colum 1', () => {
        expect(checkSeatStatus('C',1)).toBe(true);
    });
});

describe('Testing book function', () => {
    it('Should return "Seat in E1 is already booked" if the given seat is already booked',() => {
        expect(book('E',1)).toBe("Seat in E1 is already booked");
    });
    it('Should return "Seat in E0 successfully booked" if the given seat is not booked',() => {
        expect(book('E',0)).toBe("Seat in E0 successfully booked");
        expect(book('E',0)).toBe("Seat in E0 is already booked");
    });
})