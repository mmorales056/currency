# app.Currency v0.0.1

> Convierte un número a formato de moneda

## Instalar

Agregue el archivo en sus archivos locales e incluya el archivo en el proyecto.

```html
<script src="currency.min.js"></script>
```

## Ejemplos de uso

### Pesos colombianos (cop)

Convertir un número a formato de moneda colombiana (cop).

```js
var value = 1250300; // Un millón doscientos cincuenta mil trescientos pesos

var cop = new app.Currency(value).format('cop'); // $1.250.300

alert(cop);
```