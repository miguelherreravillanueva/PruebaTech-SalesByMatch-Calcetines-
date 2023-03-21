/*There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

Example:

n = 7
ar = [1,2,1,2,1,3,2]

There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.

- Function Description

Complete the sockMerchant function in the editor below.

sockMerchant has the following parameter(s):

int n: the number of socks in the pile
int ar[n]: the colors of each sock

Returns

int: the number of pairs*/

function sockMerchant(n, ar) {
    let pairs = 0;
    let colors = new Set(ar);
    for (let color of colors) {
      let count = ar.filter(sock => sock === color).length;
      pairs += Math.floor(count / 2);
    }
    return pairs;
  }

/*Esta función llamada sockMerchant toma dos argumentos: n que representa el número de calcetines en la matriz ar, y ar que es una matriz que contiene el color de cada calcetín. La función utiliza un conjunto (Set) para almacenar los diferentes colores de calcetines presentes en la matriz, y luego cuenta el número de pares de calcetines para cada color. El número total de pares se devuelve como resultado.

Aquí hay una explicación detallada del código:

1. Se inicializa la variable pairs en 0. Esta variable será actualizada con la cantidad total de pares de calcetines.

2. Se crea un nuevo conjunto (Set) llamado colors, que contendrá todos los colores de calcetines presentes en la matriz ar.
javascript.

3. Se recorre el conjunto de colors utilizando un ciclo for...of.
4. En cada iteración del ciclo for...of, se cuenta la cantidad de calcetines de un color determinado. Para hacer esto, se utiliza el método filter() de la matriz ar para obtener una nueva matriz que contenga solo los calcetines del color actual, y luego se utiliza el método length para contar el número de elementos en la matriz resultante.
5. Se calcula el número de pares de calcetines para el color actual. Esto se hace dividiendo la cantidad de calcetines por dos y redondeando hacia abajo utilizando la función Math.floor().
6.Se repite este proceso para cada color en el conjunto de colors.
7.Finalmente, se devuelve el número total de pares de calcetines calculados en el paso 5.

En resumen, esta función utiliza un conjunto para identificar los diferentes colores de calcetines en la matriz, y luego cuenta la cantidad de calcetines de cada color para determinar la cantidad total de pares de calcetines que se pueden formar.

*/