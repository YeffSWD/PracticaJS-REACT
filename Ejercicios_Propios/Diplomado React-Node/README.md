# PracticaJS-REACT
## Autor: Yefri Ramos
## Fecha de inicio - 21/04/2023


Dentro de este directorio podrás encontrar la solución a algunos ejercicios planteados en un diplomado de 48hrs que recibí, aquí puedes encontrar el enunciado de cada uno:

# Práctica No. 1
Existen tres diferentes formas de poder expresar la temperatura del ambiente en el que nos encontramos, las cuales son kelvin, Fahrenheit y Celsius, dado una temperatura en grados Kelvin, proporcione su valor en grados Fahrenheit y en grados Celsius.
Consideraciones:
    - La fórmula para convertir grados kelvin a Celsius es restándole 273 a los grados kelvin
    - La fórmula para convertir grados Celsius a Fahrenheit consiste en:
        - Fahrenheit = Celsius * (9/5) + 32
        - La ecuación de arriba arroja valores decimales, deberá proporcionar el valor entero para ello deberá utilizar uno de los métodos del objeto Math y retornar el valor entero
Deberá imprimir los resultados de cada una de las conversiones

# Práctica No. 2
Conversión de años normales a años Caninos: Hemos visto que los perros cumplen años más rápido que los seres humanos, si nosotros quisiéramos saber nuestra edad en años caninos, deberíamos considerar lo siguiente:
    - Los primeros dos años de un perro son el equivalente a 10.5 años humanos
    - El resto de los años se multiplica por 4
Deberá realizar un programa que permita convertir su edad en Humano a edad Canina y mostrar el resultado obtenido con el mensaje “Hola soy NOMBRE, tengo EDAD-HUMANA años humanos, lo cual es igual a EDAD-CANINA años Perro”
 
# Práctica No. 3
## Como nota, las respuestas a cada numero podrás verla dentro del ejercicio
Habiendo aprendido como manejar el flujo de ejecución de un programa, deberá poner en práctica todo lo aprendido creando una réplica del juego Bola Mágica o Magic Eight Ball
Consideraciones:
    - El juego de Bola Mágica tiene un total de 20 posibles respuestas, siendo 10 positivas, 5 indiferentes y 5 respuestas negativas, las cuales se presentan en la tabla de valores.
    - Deberá crear una variable que guarde la generación de valor aleatorio entre 1 y 20, para ello puede utilizar las funciones Math.floor y Math.random de la siguiente manera: Math.floor(Math.random() * 20)
    - Deberá crear 3 variables:
    - La primera será el nombre del usuario el cual puede asignar al momento de crearla o dejarla en blanco. Si, la variable contiene un valor por ejemplo ‘Karin’, deberá imprimir en consola el mensaje ‘Hello Karin, let’s guess your fortune’, de lo contrario solo imprimirá el mensaje, ‘Hello, let’s guess your fourtune’
        - La segunda será la pregunta que se le hará al usuario, la cual no puede ser vacía.
        - Por último, deberá crear la variable que almacene la respuesta obtenida a la pregunta la cual va a depender del valor obtenido del número aleatorio, si:
            - El número se encuentra entre 1 y 10, deberá imprimir en consola ‘Lucky you, (respuesta_obtenida)’
            - El número se encuentra entre 11 y 15, deberá imprimir en consola la respuesta obtenida.
            - El número se encuentra entre 16 y 20, deberá imprimir en consola ‘Sorry, (respuesta_obtenida)’
            - El número obtenido es cero, deberá imprimir en consola ‘Try Again’

 
# Práctica No. 4
Implementando todo lo aprendido en esta sesión, deberá recrear el famoso juego de Piedra, Papel o Tijeras, recordando que las reglas son:
    - Piedra le gana a Tijeras
    - Papel le gana Piedra, y
    - Tijeras le gana a Papel
Consideraciones
    - Deberá trabajar únicamente con los temas aprendidos hasta el momento, ese es el objetivo, explorar diferentes maneras de trabajar antes de encontrar otras maneras más sencillas.
    - Deberá representar a 2 jugadores, la computadora y usted como jugador, deberá crear una variable que cumpla con su selección y una función que genere un número aleatorio entre 0 y 2 para poder competir contra su selección, el mapeo es el siguiente:
        - 0 es igual a Piedra
        - 1 es igual Papel, y
        - 2 es igual a Tijeras
    - Deberá crear una función que muestre las opciones que ambos seleccionaron, la de usted que va por defecto y la opción generada por el número aleatorio. Después deberá indicar quien es el ganador.


# Práctica No. 5
1. Escribir un programa en JavaScript que imprima en consola el siguiente triángulo de 7 niveles:
      #
     # #
    # # #
   # # # #
  # # # # #
 # # # # # #
# # # # # # #
Como una manera de subir el nivel del problema, declare una variable a la cual se le pueda asignar el número de niveles que tendrá el triángulo, la única validez es que esta variable debe ser mayor o igual a 3, de ser menor, deberá mostrar un mensaje “Lo siento, no imprimo triángulos menores a 3 niveles”

2. FIZZBUZZ
Escriba un programa que imprima en consola los números de 1 a 100 bajo las siguientes
consideraciones:
    - Para los números que sean divisibles dentro de 3 en lugar del número, deberá imprimir la palabra Fizz.
    - Para los números que sean divisibles dentro de 5 en lugar del número, deberá imprimir la palabra Buzz.
    - Para aquellos números que sean divisibles dentro de 5 y dentro 3 en lugar del número deberá imprimir la palabra FizzBuzz


Práctica No. 6
1. Dado un Array como [2, 5, 6, 7, 1, 8, 9, 10] deberá retornar un nuevo Array donde se omita el valor más pequeño del arreglo, pero sin modificar el Array original
2. Realice una función llamada range() la cual recibe 2 argumentos, inicio y fin, esta función deberá retornar un arreglo con todos los valores que se encuentren entre el rango descrito.
3. Realice una función llamada sum() la cual reciba como argumento un arreglo de números enteros, esta deberá retornar como resultado la suma de todos los números enteros que se encuentran dentro del arreglo enviado como parámetro.
4. Realice una modificación a la función range() que reciba un argumento opcional step que indique de cuanto en cuanto se desea ir aumentando los valores a mostrar en consola, si este parámetro no se envía deberá tomar el valor por defecto de 1.

