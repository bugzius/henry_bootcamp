'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
  */

function BinarySearchTree(value) {
   this.value = value;
   this.left = null;
   this.right = null;

   this.length = 1;
}

BinarySearchTree.prototype.insert = function(val){
   //Si no existe ningún nodo
   
   if(!this.left && !this.right){
      if(val > this.value){
         this.right = new BinarySearchTree(val);
      }else if(this.value > val){
         this.left = new BinarySearchTree(val);
      }
      // Si existe el nodo izquierdo y el derecho no
   }else if(!this.right && !!this.left){
      if(val > this.value){
         this.right = new BinarySearchTree(val);
      }else if(this.value > val){
         this.left.insert(val);
      }
      //Si el nodo derecho existe pero el nodo izquierdo no
   }else if(!!this.right && !this.left){
      if(val > this.value){
         this.right.insert(val);
      }else if(this.value > val){
         this.left  = new BinarySearchTree(val);
      }
   }else{
      if(val > this.value){
         this.right.insert(val)
      }else if(val < this.value){
         this.left.insert(val)
      }
   }
   //Si ya tiene los dos nodos
};
BinarySearchTree.prototype.size = function() {
   if(!this.left && !this.right) return this.length;
   return this.length + ((this.left?.size() || 0) + (this.right?.size() || 0));
};

BinarySearchTree.prototype.contains = function(val) {
   if(this.value === val) return true;

   return !!this.left?.contains(val) || !!this.right?.contains(val);
}

BinarySearchTree.prototype.depthFirstForEach = function(cb,type = "in-order") {
   switch (type) {
      case 'in-order':
         if(!!this.left) this.left.depthFirstForEach(cb,type);
         cb(this.value);
         if(!!this.right) this.right.depthFirstForEach(cb,type);
         break;
      case 'pre-order':
         cb(this.value);
         if(!!this.left) this.left.depthFirstForEach(cb,type);
         if(!!this.right) this.right.depthFirstForEach(cb,type);
         break;
      case 'post-order':
         if(!!this.left) this.left.depthFirstForEach(cb,type)
         if(!!this.right) this.right.depthFirstForEach(cb,type);
         cb(this.value);
         break;
      default:
         break;
   }
}
BinarySearchTree.prototype.breadthFirstForEach = function(cb,arr) {
   if(!arr) var arr = [];
   if(!!this.left) arr.push(this.left);
   if(!!this.right) arr.push(this.right);
   cb(this.value);
   if(arr.length > 0) arr.shift().breadthFirstForEach(cb,arr);
};
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
