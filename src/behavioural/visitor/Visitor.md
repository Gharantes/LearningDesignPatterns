# Visitor
Behavioural Design Pattern

> O Visitor é um padrão de projeto comportamental que permite 
> que você separe algoritmos dos objetos nos quais eles operam.

## Intenção
Representa uma operação a ser executada sobre os elementos da estrutura de um objeto. O
visitor permite que você separe um algoritmo dos elementos sobre os quais opera.

## Sobre o Visitor:
## Aplicabilidade
Use o Visitor quando...

Você precisa executar um algoritmo em todos os elementos de uma estrutura mais complexa
(como uma estrutura criada com o padrão Composite).

Você quer separar uma lógica complexa em objetos auxiliares.

## Consequências
- **BOM**
  - Limpa o código da regra de negócio (sem IFs, etc.)
  - Separa algoritmos complexos em objetos auxiliares
  - Aplica SRP e OCP
- **RUIM:**
  - Se um novo objeto for adicionado à estrutura. você precisará atualizar os objetos visitantes
  - Objetos visitantes podem não ter acesso a todos os membros dos objetos em que operam.