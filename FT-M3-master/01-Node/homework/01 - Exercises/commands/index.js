const fs = require("fs");
const utils = require("../utils/request");
const process = require("process");
const { error } = require("console");

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
        if(err)throw new Error(JSON.stringify(err));
        print(files.join(' '))
    })
}

function cat(print, args) {
    fs.readFile(args, 'utf-8', (err, data) => {
        if(err)throw new Error(JSON.stringify(err));
        print(data);
    })
}

function head(print, args) {
    fs.readFile(args, 'utf-8', (err, data) => {
        if(err)throw new Error(JSON.stringify(err));
        const dataLines = data.split("\n")[0].toString();
        print(dataLines);
    })
}

function tail(print,args) {
    fs.readFile(args, "utf-8", (err, data) => {
        if(err)throw new Error(JSON.stringify(err));
        const dataLines = data.split("\n").at(-1).toString().trim();
        print(dataLines);
    })
}

function curl(print, args) {
    utils.request(args, (error, res) => {
        if(error){
            return new Error(error)
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
