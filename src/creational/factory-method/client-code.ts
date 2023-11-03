import { randomVehicleAlg } from "./main/random-vehicle-alg";
import { randomNumbers } from "./utils/random-numbers";
import { CarFactory } from "./factories/car-factory";

const customerNames = ["Ana", "Joana", "Helena", "João"];
const carFactory = new CarFactory();

for (let i = 0; i < 10; i++) {
  const vehicle = randomVehicleAlg();
  const name = customerNames[randomNumbers(customerNames.length)];

  vehicle.pickUp(name);
  vehicle.stop();
  const newCar = carFactory.pickUp(name, `Novo Carro - ${randomNumbers(100)}`);
  newCar.stop();
  console.log("---");
}
