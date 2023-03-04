var traverseDomAndCollectElements = function(matchFunc, startEl = document.body) {
  var resultSet = [];

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  const {childElementCount,children} = startEl;
  if( childElementCount === 0){
		console.log({validate: matchFunc(startEl), startEl})
    if(matchFunc(startEl)){
      resultSet.push(startEl);
    }
  }
  if(childElementCount > 0){
		if(matchFunc(startEl)) resultSet.push(startEl);
    for(let child of children){
      resultSet = [...resultSet, ...traverseDomAndCollectElements(matchFunc, child)];
    };
  };

  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


function selectorTypeMatcher(selector) {
  // tu código aquí
  const values = {'#':'id', '.':'class'};
  return [...selector].reduce( (init, l, i) => {
    const {elements, iCurrent} = init;

    if(i === selector.length - 1){
      elements.push(selector.slice(iCurrent, i + 1));
    }

    if(['#','.'].includes(l)){
      elements.push(selector.slice(iCurrent, i ));
      init.iCurrent = i;
    }

    return init;
  }, {elements:[], iCurrent:0}).elements.reduce((init,l) => {
    const reg = l.match(/[.|#]/);
    if(reg){
      const [val] = reg;
      init.push(`${init.length ? val : ''}${values[val]}`);
    }else if(l){
      init.push('tag');
    }
    return init;
  },[]).join('');
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

function matchFunctionMaker(selector) {
  const selectorType = selectorTypeMatcher(selector);
  const [cero, first] = selector.split(/[.|#]/);

  const matchFunction = {
    id: ({id}) => id === first,
    class: ({classList}) => classList.contains(first),
    ['tag.class']: ({localName, classList}) => classList.contains(first) && localName === cero,
    tag: ({localName}) => localName === cero
  }

  return matchFunction[selectorType];
};



var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
