# Proyecto de clase
Solución por Ronald Gabriel Romero González 201701048. Vacaciones junio 2021. 
## Objetivo
Poner en práctica los conocimientos adquiridos respecto de las búsquedas por adversario
implementando un agente inteligente de decisión mediante una página Web en GitHub Pages que
responda con el mejor movimiento del juego Reversi según el estado dado.

## Requisitos
El proyecto debe:
- Implementarse con Javascript
- Publicarse en GitHub Pages
- No debe implementarse un sitio Web, solo es necesario que el script responda con la mejor decisión según el formato establecido posteriormente
- El sitio debe recibir por parámetros GET el turno y el estado del juego
- El mejor movimiento se mostrará como respuesta HTML con dos números consecutivos que serán la fila y la columna. (sin espacios ni otros caracteres, ni CSS)

## Consideraciones
- Las fichas negras y blancas se representarán con 0 y 1 respectivamente.
- El turno se define como 0 o 1.
- Las fichas también se representarán con 0 ‘s y 1’s en una matriz 8x8
- Los índices de la matriz son de 0 a n-1.
- Para representar un espacio en blanco se utilizará el número 2.
- El estado será la representación lineal de la matriz, siendo mostrado por fila, es decir, los primeros 8 dígitos representar a la primera fila, los siguientes 8 dígitos representan la segunda fila, etc.