# Flyweight
Structual Design Pattern

## Intenção Oficial
Flyweight é um padrão de projeto estrutural com a intenção de usar compartilhamento para suportar 
eficientemente grandes quantidades de objetos de forma granular.

## Sobre o Flyweight
É um padrão de otimização (cuidado).

Visa economizar memória RAM devido ao grande número de objetos na aplicação.

- Resolve o problema de desempenho, dividindo o estado de um objeto em "intrínseco" e "extrínseco";
  - Estado Intrínseco é o estado que geralmente não muda ou que muda muito pouco.
  - Estado Extrínseco é o estado que pode ser movido para fora do objeto por mudar frequentemente.

Só deve ser usado se a sua aplicação estiver com problemas de alto consumo de memória RAM.

### Exemplo? Não tenho certeza se tá certo.
```ts
const objeto1 = {
  intrinseco: intrinseco,
  extrinseco: extrinseco1,
}
const objeto2 = {
  intrinseco: intrinseco,
  extrinseco: extrinseco2,
}
const intrinseco = {
  //variaveis que mudam pouco ou nam mudam
}
const extrinseco1 = {
  // variaveis que mudam bastante.
}
const extrinseco2 = {
  // variaveis que mudam bastante.
}
```

## Aplicabilidade 
Só use o Flyweight se todas as condições a seguir forem verdadeiras:

Sua aplicação utiliza uma grande quantidade de objetos;

Os custos de armazenamento são altos devido à grande quantidade de objetos;

A maioria dos estados de objeto podem se tornar extrínsecos;

Muitos objetos podem ser substítuidos por poucos objetos compartilhados;

A Aplicação não depende da identidade dos objetos.