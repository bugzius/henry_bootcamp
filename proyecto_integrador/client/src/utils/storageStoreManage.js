function setStorageValue(name,value){
    localStorage.setItem(name,JSON.stringify(value));
}
function getStorageValue(name){
    return JSON.parse(localStorage.getItem(name));
}

export {
    setStorageValue,
    getStorageValue
}