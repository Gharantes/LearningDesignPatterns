# Composite
Structural Design Pattern

## Intenção Oficial
Compor objetos em estruturas de árvore para representar hierarquias parte/todo. 

Composite permite aos clientes tratarem de maneira uniforme objetos individuais e 
composições de objetos.

## Sobre o Composite
Faz mais sentido em estruturas que podem ser tratadas hierarquicamente (como árvores).

Pode ser uma solução para estruturas complexas que podem ser tratadas de maneira uniforme.

Prioriza composição a`o invés de herança.

Exemplo: produto solto com preço e caixa com vários do mesmo produto também com preço.

## Aplicabilidade
Use o padrão Composite quando...

Sua estrutura de objetos possa ser representada hierarquicamente, como, por exemplo, estruturas
do tipo árvore.

Você quiser qu`e o código cliente trate objetos compostos e objetos simples da mesma maneira.

## Consequências
- **BOM:**
  - É muito fácil criar objetos complexos por composição.
  - É fácil gerar uma hierarquia de objetos.
  - É fácil usar polimorfismo e recursão.
  - É fácil adicionar novos tipos de elementos na estrutura (OCP)
- **RUIM:**
  - Dependendo da estrutura, pode quebrar o princípio da segregação de interface (ISP). Objetos do tipo "Leaf" (folha) tendem a ter métodos que não usam ou não fazem nada.
