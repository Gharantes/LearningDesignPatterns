# Abstractory Factory
Creational Design Pattern.
## Intenção Oficial
Fornecer uma interface para criação de famílias de objetos relacionados ou dependentes sem 
específicar as suas classes concretas.

## Sobre o Abstract Factory 
É uma fábrica, assim como o Factory Method e geralmente é composto por múltiplos Factory
Methods.

Visa agrupar famílias de produtos compatíveis criando uma fábrica concreta por grupo de objetos
compatíveis.

Separa o código que cria do código que usa os objetos (SRP).

Permite fácil implementação de novas famílias de Objetos (OCP)

Toda a programação fica focada nas interfaces e não tem implementações.

## Aplicabilidade
Usar o Abstract Factory quando...

Um sistema deve ser independente de como seus produtos são criados, compostos ou representados.

Um sistema deve ser configurado com uma família de produtos que podem ou não trabalhar juntos.

Uma família de objetos for projetada para ser usada em conjuto e você necessita garantir essa restrição.

Você quer forncecer uma biblioteca de classes de produtos e quer revelar somente as suas interfaces,
não as suas implementações.

## Consequências
- **BOM:**
  - Os produtos sempre serão compatíveis entre si;
  - Aplicação clara do Open/Closed Principle, é fácil adicionar novas fábricas e produtos.
  - Aplicação clara do Single Responsibility Principle, o código que cria está separado do código que usa os objetos.
- **RUIM:**
  - Muitas classes e maior complexidade será introduzida no código