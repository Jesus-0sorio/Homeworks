const number = Math.round(Math.random() * 100);

function regularFunction(a) {
  if (a % 2 === 0) return `El numero ${a} es par`;
  return `El numero ${a} es impar`;
}

const arrowFunction = (a) => {
  if (a % 2 === 0) return `El numero ${a} es par`;
  return `El numero ${a} es impar`;
};

var nombre = 'prueba'
this.adios = 'adios'

const prueba = () => {
  console.log(this.nombre)
  console.log(this.adios)
}

prueba()

console.log(regularFunction(number));
console.log(arrowFunction(number));
