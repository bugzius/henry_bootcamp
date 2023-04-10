const fs = require("fs");
const utils = require("../utils/request");
const process = require("process");

function pwd(print) {
    print(process.cwd())
}

function date(print) {
    print(Date())
}

function echo(print, args) {
    print(args)
}

function ls(print) {
    fs.readdir('.', (err,files) => {
        if(err){
            throw new Error(JSON.stringify(err))
        }

        print(files.join(' '))
    })
}

function cat(print, args) {
    fs.readFile(args, 'utf-8', (err, data) => {
        if(err){
            throw new Error(JSON.stringify(err))
        }

        print(data);
    })
}

function head(print, args) {
    fs.readFile(args, 'utf-8', (err, data) => {
        if(err){
            throw new Error(JSON.stringify(err))
        }
        console.log(data);
        print(data);
    })
}

function tail(print) {}

function curl(print, args) {
    console.log(args);
    utils.request(args, (err, res) => {
        if(err){
            throw new Error(err)
        }
        print(res);
    })
}

module.exports = {
    pwd,
    date,
    echo,
    ls,
    cat,
    head,
    tail,
    curl
};
