const dateMonths = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];

function* generateNum(dateMonths){
    while(true){
        const nMonthRandom = parseInt(Math.random() * dateMonths.length);
        const nDayRandom = parseInt(Math.random() * 31);

        yield `${dateMonths[nMonthRandom]} - ${nDayRandom}`;
    }
}

function getDatesRandom(dateMonths, nDates){
    let arr = [];

    for(const date of generateNum(dateMonths)){
        if(nDates < 0) break;
        arr.push(date);
        nDates--;
    };

    return arr;
}

console.log(getDatesRandom(dateMonths, 11));