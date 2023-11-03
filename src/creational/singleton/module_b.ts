// import { MyDatabaseClassic } from "./db/my-database-classic";
// import { MyDatabaseModule } from "./db/my-database-module";
import { MyDatabaseFunction } from "./db/my-database-function";
import { myDatabase as myDbClassicFromModuleA } from "./module_a";

// const myDatabase = MyDatabaseClassic.instance;
// const myDatabase = MyDatabaseModule;
const myDatabase = MyDatabaseFunction;

myDatabase.add({ name: "Roberto", age: 30 });
myDatabase.add({ name: "ASD", age: 50 });
myDatabase.add({ name: "EWQ", age: 25 });
myDatabase.show();

console.log(myDatabase === myDbClassicFromModuleA);
