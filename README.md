# app.Currency v0.0.1

> Convierte un número a formato de moneda

---

### Ejemplos de uso

#### Pesos colombianos (cop)

Convertir un número a formato de moneda colombiana (cop).

```js
var value = 1250300; // Un millón doscientos cincuenta mil trescientos pesos

var cop = new app.Currency(value).format('cop'); // $1.250.300

alert(cop);
```