# Listas Enlazadas

Las listas enlazadas unidireccionales; se construyen por medio de nodos que contienen la referencia a un nodo siguiente.

Javascript no tiene este tipo de estructura de manera nativa, lo más cercano son los objetos iterables, pero el valor del siguiente nodo no pertenece al nodo actual.

## Entonces, ¿ Cómo lo hacemos?

```javascript
function Node(data){
    this.info = data;
    this.next = null;
}

function List(){
    this._length = 0;
    this.head = null; // Es la cabeza
}

//Para agregar un nodo, debemos asignarle el head actual al nodo creado
// y luego asignarle al head de la lista el nodo creado.
List.prototype.add = function(data){
    const nodo = new Node(data);

    let current = this.head;
    if(!this.head){
        this.head = nodo;
        this._length++;
        return nodo;
    };

    while(current.next){
        current = current.next;
    }
    current.next = nodo;
    this._length++;
    return nodo;
}

//Para iterar sobre una lista de nodos enlazados, vamos a ir atravezando los
//nodos por medio de las referencias del siguiente.

List.prototype.getAll = function(){
    let current = this.head;

    if(!current){
        console.log('La lista está vacía');
        return;
    }

    while(current){
        console.log(current);
        current = current.next;
    }
}
```

## Ahora también se encuentran las listas doblemente enlazadas.

Son bidireccionales, en donde cada nodo conoce su nodo posterior y su nodo previo.

## Hast Table

Una tabla de referencias con poca probabilidad de colisión en su distribución. Se elije una cantidad de asignaciones y vamos a ir integrando los elementos en cada posición de la tabla de asignaciones.

- Distribución de Elementos en cada Bucket / Casillero
- Función hash por string.