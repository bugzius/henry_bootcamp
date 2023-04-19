"use strict";

let exerciseUtils = require("./utils");

let args = process.argv.slice(2).map(function (st) {
  return st.toUpperCase();
});

module.exports = {
  problemAx: problemA,
  problemBx: problemB
};

// corre cada problema dado como un argumento del command-line para procesar
args.forEach(function (arg) {
  let problem = module.exports["problem" + arg];
  if (problem) problem();
});

function problemA() {
  // callback version
  /* exerciseUtils.readFile("poem-two/stanza-01.txt", function (err, stanza) {
    exerciseUtils.blue(stanza);
  });
  exerciseUtils.readFile("poem-two/stanza-02.txt", function (err, stanza) {
    exerciseUtils.blue(stanza);
  }); */

  // promise version
  // Tu código acá:
  /**
   * Este método retorna una Promesa, Si alguna de las promesas en el
   * arreglo es rechazada, la promesa del método irá directamente a el
   * reject de la promesa.
   */
  //PROMISES
  exerciseUtils.promisifiedReadFile("poem-two/stanza-01.txt")
    .then(stanza => exerciseUtils.blue(stanza));
  
  exerciseUtils.promisifiedReadFile("poem-two/stanza-02.txt")
    .then(stanza => exerciseUtils.blue(stanza));

  
  //PROMISE ALL
  /* const promises = [
    exerciseUtils.promisifiedReadFile("poem-two/stanza-01.txt"),
    exerciseUtils.promisifiedReadFile("poem-two/stanza-02.txt")
  ];
  Promise.all([...promises])
    .then(([stanza1,stanza2]) => {
      exerciseUtils.blue(stanza1);
      exerciseUtils.blue(stanza2);
    }); */
};

function problemB() {
  let filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) {
    return "poem-two/" + "stanza-0" + n + ".txt";
  });
  let randIdx = Math.floor(Math.random() * filenames.length);
  filenames[randIdx] = "wrong-file-name-" + (randIdx + 1) + ".txt";

  // callback version
  filenames.forEach((filename) => {
    exerciseUtils.readFile(filename, function (err, stanza) {
      exerciseUtils.blue(stanza);
      if (err) exerciseUtils.magenta(new Error(err));
    });
  });

  // promise version
  // Tu código acá:
  
  //Prop Of Concept
  
  /* const promises = filenames.map( filename => exerciseUtils.promisifiedReadFile(filename));
  const valuesPromises = Promise.allSettled(promises);
  
  valuesPromises.then( data => {
    for(let i = 0; i < data.length; i++){
      const {status, value} = data[i];
      if(status === 'rejected'){
        exerciseUtils.magenta(value);
        continue;
      };
      exerciseUtils.blue(value);
    }
  }); */
  
  filenames.forEach((filename) => {
    exerciseUtils.promisifiedReadFile(filename)
      .then( stanza => exerciseUtils.blue(stanza)
        ,reason => exerciseUtils.magenta(new Error(reason)));
  });
}

// EJERCICIO EXTRA
function problemC() {
  let fs = require("fs");
  function promisifiedWriteFile(filename, str) {
    // tu código acá:
  }
}
