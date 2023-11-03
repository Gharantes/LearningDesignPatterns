// import { MyDatabaseClassic } from "./db/my-database-classic";
// import { MyDatabaseModule } from "./db/my-database-module";
import { MyDatabaseFunction } from "./db/my-database-function";

// const myDatabaseClassic = MyDatabaseClassic.instance;
// const myDatabaseClassic = MyDatabaseModule;
const myDatabase = MyDatabaseFunction
myDatabase.add({ name: "Luiz", age: 30 });
myDatabase.add({ name: "Maria", age: 50 });
myDatabase.add({ name: "Eduardo", age: 25 });
myDatabase.remove(1);

// export { myDatabaseClassic };
export { myDatabase };
