# Factory Method
Creational Design Pattern

> Fornece uma interface para criar objetos em uma superclasse, 
> mas permite que as subclasses alterem o tipo de objetos que serão criados.


## Intenção Oficial
Definir uma interface para criar um objeto, mas deixar as subclasses decidires que classe
instanciar. O Factory Method permite adiar a instanciação para as subclasses.

> Fábricas são simplesmente operações que criam objetos.

## Implementação
### Exemplo 1
```ts
type Car = { model: string; motor: string };
type CarPrototype = { showDetails(): void };

const carPrototype: CarPrototype = {
  showDetails(): void {
    console.log(this);
  },
};

const carFactory = (model: string, motor: string): Car & CarPrototype => {
  const  idAsAPrivateMember = Math.floor(Math.random() * 1000);
  const carObj = Object.create(carPrototype);
  return Object.assign(carObj, {id: idAsAPrivateMember, model, motor});
}

const car1 = carFactory("Fusca", "V8");
car1.showDetails();
const car2 = carFactory("Celta", "ABDD1233");
car2.showDetails();
```
### Exemplo2
```ts
interface Produc {
  sayHi(): void;
}
class ConcreteProduct implements Product {
  sayHi(): void {
    console.log("Hi")
  }
}
abstract class Creator {
  abstract factoryMethod(): Product;
  createAndShow(): void {
    const product = this.factoryMethod();
    console.log(product);
  }
}
class ConcreteCreator extends Creator {
  factoryMethod(): Product {
    return new ConcreteProduct();
  }
}
const creator = new ConcreteCreator();
const product = creator.factoryMethod();
product.sayHi();
creator.createAndShow();
```

## Sobre o Factory Method
Oculta a lógica de instanciação do código cliente. O método fábrica 
será responsável por instanciar as classes desejadas.

É obtido por herança. O método fábrica pode ser criado ou sobrescrto por subclasses.

Dá flexibilidade ao código cliente permitindo a criação de novas factories sem a necessidade
de alterar código já escrito (OCP).

Pode usar parâmetros para determinar o tipo de objetos a serem criados ou os
parâmetros a serem enviados aos objetos sendo criados.

## Aplicabilidade 
Use o Factory Method quando não souber com certeza quais os tipos de objetos o seu 
código vai precisar.

Use o factory method para permitir a extensão de suas factories para criaçõa de novos objetos
(isso ajuda a aplicar o Open/Closed Principle)

Use o Factory Method para desacoplar o código que cria do código que usa as classes
(Single Responsibility Principle)

Use o Factory Method para dar um hook (gancho) às subclasses para permitir que elas decidam 
à lógica de criação de objetos.

Use o factory method para eliminar duplicação de código na criação de objetos.

## Consequências
- **RUIM:**
  - se usado sem necessidade pode causar uma explosão de subclasses. Será necessária uma classe ConcreteCreator para cada ConcreteProduct.