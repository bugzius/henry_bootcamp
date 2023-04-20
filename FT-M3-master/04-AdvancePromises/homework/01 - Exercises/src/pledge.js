'use strict';
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:

function $Promise(executor){
    if(typeof executor !== 'function' || !executor ) throw new TypeError('Executor is not must be a Function');
    
    this._value;
    this._state = 'pending';
    this._handlerGroups = [];
    this._internalResolve = function(data){
        if(this._state === 'pending'){
            this._value = data;
            this._state = 'fulfilled';
        };
        const groups = this._handlerGroups;
        for(let i = 0; i < groups.length; i++){
            groups[i]?.successCb(this._value)
            if(i + 1 === groups.length){
                this._handlerGroups = []
            };
        }
    }
    this._internalReject = function(reason){
        if(this._state === 'pending') {
            this._value = reason
            this._state = 'rejected';
        };
        const groups = this._handlerGroups;
        for(let i = 0; i < groups.length; i++){
            groups[i]?.errorCb(this._value)
            if(i + 1 === groups.length){
                this._handlerGroups = []
            };
        }
    }

    const resolve = (value) => {
        this._internalResolve(value);
    }
    const reject = (data) => {
        this._internalReject(data)
    }


    this.then = function(handleSuccess, handleError){
        this._handlerGroups = [
            ...this._handlerGroups,
            {
                successCb: typeof handleSuccess !== 'function' ? false : handleSuccess,
                errorCb: typeof handleError !== 'function' ? false : handleError
            }
        ];
        if(this._state !== 'pending' && this._state === 'fulfilled'){
            if(handleSuccess) handleSuccess(this._value);
        }
        if(this._state !== 'pending' && this._state === 'rejected'){
            if(handleError) handleError(this._value)
        }
    }

    this.catch = function(handleError){
        this._handlerGroups = [...this._handlerGroups,
            {
                errorCb: handleError

            }
        ]
        this.then(null, handleError);
    }
    executor(resolve, reject)
}

module.exports = $Promise;
/*-------------------------------------------------------
El spec fue diseñado para funcionar con Test'Em, por lo tanto no necesitamos
realmente usar module.exports. Pero aquí está para referencia:

module.exports = $Promise;

Entonces en proyectos Node podemos esribir cosas como estas:

var Promise = require('pledge');
…
var promise = new Promise(function (resolve, reject) { … });
--------------------------------------------------------*/
