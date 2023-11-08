# Template Method
Behavioural Design Pattern

> Define o esqueleto de um algoritmo na superclasse, mas deixa as subclasses sobrescreverem etapas 
> específicas do algoritmo sem modificar a sua estrutura.

## Intenção

Define o esqueleto de um algoritmo numa operação, postergando a definição de 
alguns passos para subclasses. O template method permite qe as subclasses redefinam 
certos passos de um algoritmo sem mudar a sua estrutura.

> Factory Method é um Template Method especializado em criar objetos.

Ordem de execução dos passos é fixa.

## Sobre o Template MEthod
Mantém a ordem de chamada de métodos no algoritmo;

Evita a duplicação de código dentro da classe base;
- Criar um método (e.g. ParseData() e permitir que subclasses redefinam esse método);

Substitui condicionais por polimorfismo;

Permite que as subclasses alterem apenas os passos necessários para concluir o algoritmo;
- Subclasses só mudam oque precisam mudar.

Permite a adição de hooks para que as subclasses utilizem em pontos estratégicos do algoritmo.

## Aplicabilidade
Use o Template Method quando...

Você precisa de variações de um mesmo algoritmo sem mudar a ordem de execução dos métodos.

Você percebe que está usando herança para alterar apenas pequenos trechos de código de um algoritmo.

## Consequências
- **BOM:**
  - Evita a duplicação do código
  - Permite fácil alteração de algoritmos
  - Aplica o OCP e SRP
- **RUIM:**
  - Em alguns casos pode violar o LPS ao alterar o comportamento de métodos nas subclasses.