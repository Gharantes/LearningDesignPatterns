import { MyDataStructure } from "./my-data-structure";
import { MyReverseIterator } from "./my-reverse-iterator";

const dataStructure = new MyDataStructure();
dataStructure.addItem("A", "B", "C", "D", "E", "F");

const [a, b] = dataStructure;
console.log("Roubados:", a, b);
console.log("Executei várias coisas e depois usei o Iterator");
const [c, ...rest] = dataStructure;
console.log(c, rest);

dataStructure.resetIterator();
for (const data of dataStructure) {
  console.log(data);
}
console.log();

dataStructure.changeIterator(new MyReverseIterator(dataStructure));

dataStructure.resetIterator();
for (const data of dataStructure) {
  console.log(data);
}
console.log();
