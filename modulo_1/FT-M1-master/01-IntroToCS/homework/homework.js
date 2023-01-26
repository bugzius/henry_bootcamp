'use strict';

function BinarioADecimal(num) {
   //Toma un número en string binario y entrega un número decimal
   const arrNum = [...num].reverse();
   let numFinal = 0;

   for(let i = 0; i < arrNum.length; i++){
      //numFinal += Math.pow(2,i) * Number(arrNum[i]);
      
      if(arrNum[i] === '1'){
         const numComp = Math.pow(2,i);
         numFinal += numComp;
      }
   }

   return numFinal;
}

function DecimalABinario(num) {
   let numberFinal = '';
   
   for(let i = num; i > 0; i = ( ( i - ( i % 2 ) ) / 2 ) ){
      numberFinal += `${ i % 2 }`
   };

   return [...numberFinal].reverse().join().replaceAll(',','');
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
