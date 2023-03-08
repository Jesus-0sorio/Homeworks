import { CardExercise } from "../components";

export const Home = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 grid-flow-row gap-4 container mx-auto">
      <CardExercise number={1} text="Convertidor de segundos a hora" />
      <CardExercise number={2} text="Total a pagar por llamada" />
      <CardExercise number={3} text="Mensaje de saludo" />
      <CardExercise number={4} text="¿Los números son iguales?" />
      <CardExercise number={5} text="Lista de numeros ordenados" />
      <CardExercise number={6} text="Numeros impares" />
      <CardExercise number={7} text="Aumento de salario" />
      <CardExercise number={8} text="Divide por el numero" />
      <CardExercise number={9} text="Muestra la matriz" />
    </div>
  );
};
