# Arboles (trees)

Es una estructura de datos ramificada de forma desendiente desde un nodo root o principal hacia nodos hijos y de la misma forma.

## Caracaterísticas

- Se accede desde un nodo _root_ o _inicial_.
- Se establecen por medio de Niveles o etapas de profundización.
- cada conjuntro que de base contienen un elemento padre y más de 1 elemento hijo es equivalente a un arbol.
- Los nodos que comparten un mismo padre son nodos hermanos.
- Un elemento que pertenece a un arbol pero no contienen elementos hijos se les denomina elemento _leaf node_
- Para acceder a un elemento es necesario acceder de manera jerarquica por medio de cada padre.
- Para llegar a un nodo solo existe un único camino.
- Siempre se van completando de izquierda a derecha.
---
## Tipos de Arboles
- Arboles binarios: cada nodo no pueden contener 2 o menos elementos hijos
- Arbol binario de Busqueda: conservan las características de un arbol binario tradicional, mantiene una condición por cada nodo padre, la cual respeta que el valor de uno de los lados mantenga sus nodos sobre una condición, así mismo con el lado restante. Son buena opción para realizar busquedas de manera más eficiente.
- AVL (Arbol binario autobalanceado): Se trata de un arbol binario de busqueda que se va balanceando de lado y lado buscando siempre que se mantenga la misma cantidad (*o con diferencia de 1*) de niveles de profundidad en cada uno de los lados.
- max heap: es un tipo de arbol binario que establece que los hijos de cualquier nodo padre siempre son menores que el valor del padre. Un buen ejemplo de uso es el caso de prioridades.

## Formas de Recorrer un Arbol
- **DFS** (Dipp First) [Postorder]: Se trata de una forma de recorrer los arboles, este se fundamente en que primero recorre desde el último elemento en profundidad y va escalando desde la izquierda hacia la derecha y hacia arriba.
- **DFS** (Dipp First) [Preorder]: Recorre de arriba a abajo pero prioriza siempre el lado izquierdo de un nodo padre hasta cuando no encuentra ningún otro nodo padre, entonces cuando esto sucede se devuelve y toma el camino de la derecha y así de la misma manera.
- **DFS** (Dipp First) [Inorder]: Se recorre enfocandose en un nodo padre, en donde primero recorre el lado de la izquierda y luego el de la derecha y sube de nivel de profundidad para realizar el mismo proceso.
- **BFS**: Este recorre de izquierda a derecha desde la parte de arriba, pasa por cada nodo de manera horizontal de izquierda a derecha.