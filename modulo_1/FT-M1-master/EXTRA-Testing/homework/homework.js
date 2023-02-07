
const layout = [
    [
        {type: 'VIP', booked: false},
        {type: 'VIP', booked: true},
        {type: 'VIP', booked: true},
        {type: 'VIP', booked: false}
    ],
    [
        {type: 'NORMAL', booked: false},
        {type: 'VIP', booked: true},
        {type: 'VIP', booked: false},
        {type: 'NORMAL', booked: false}],
    [
        {type: 'NORMAL', booked: false},
        {type: 'NORMAL', booked: true},
        {type: 'NORMAL', booked: true},
        {type: 'NORMAL', booked: false}
    ],
    [
        {type: 'ECONOMIC', booked: true},
        {type: 'NORMAL', booked: true},
        {type: 'NORMAL', booked: true},
        {type: 'ECONOMIC', booked: false}
    ],
    [
        {type: 'ECONOMIC', booked: false},
        {type: 'ECONOMIC', booked: true},
        {type: 'ECONOMIC', booked: false},
        {type: 'ECONOMIC', booked: false}
    ]
];
function getRowNumber(letter){
    if(letter.length > 1 || letter === '') throw new TypeError('The argument is a long String');
    return letter.toUpperCase().charCodeAt() - 65;
}

function getSeat(row, col){
    return layout[getRowNumber(row)][col];
};

function checkSeatStatus(arg, number){
    if(typeof arg !== 'string') throw new TypeError('First parameter is not a string');
    if(typeof number !== 'number') throw new TypeError('Second parameter is not a number');

    return getSeat(arg,number).booked;
};

function book(row,col){
    const validateBook = checkSeatStatus(row,col);
    if(checkSeatStatus(row,col)){
        return `Seat in ${row}${col} is already booked`
    }
    layout[getRowNumber(row)][col].booked = !validateBook;
    return `Seat in ${row}${col} successfully booked`;
}

module.exports = {
    checkSeatStatus,
    getRowNumber,
    book
};