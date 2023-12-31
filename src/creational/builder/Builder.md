# Builder
Creational Design Pattern

## Intenção Oficial:
Separar a construção de um objeto complexo da sua representação de modo que o mesmo processo de 
construção possa criar diferentes representações.

## Visão Geral do Builder
O padrão sugere a separação do código que cria e o código que usa o objeto.

- Trata da criação
  - de objetos complexos, 
  - da composição de várias objetos (composite), 
  - ou de algoritmo de criação do objeto complexo.
- Permite a criação de um objeto em etapas
- Permite o method chaining.
- O objeto final pode variar conforme a necessidade.
- É um padrão complexo. 

## Exemplo de Builder

```ts
export class Person {
  constructor(
    public name?: string,
    public age?: number
  ) {}
}

export class PersonBuilder {
  private person = new Person();
  
  newPerson(): void {
    this.person = new Person();
  }
  setName(name: string): this {
    this.person.name = name;
    return this;
  }
  setAge(age: number): this {
    this.person.age = age;
    return this;
  }
  getResult(): Person {
    return this.person;
  }
}

const personBuilder = new PersonBuilder();
const person1 = personBuilder
  .setName('Luiz')
  .setAge(30)
  .getResult();
personBuilder.newPerson();
const person2 = personBuilder
  .setName('Maria')
  .setAge(25)
  .getResult();
```

## Consequências
- **BOM**
  - Separa criação de utilização
  - O cliente não precisa criar objetos diretamente
  - O mesmo código pode construir objetos diferentes
  - Ajuda na aplicação dos princípios SRP e OCP
- **RUIM**
  - O código final pode se tornar muito complexo.