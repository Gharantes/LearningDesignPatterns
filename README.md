Repositório baseado na [playlist](https://www.youtube.com/playlist?list=PLbIBj8vQhvm0VY5YrMrafWaQY2EnJ3j8H)

## O que são padrões de projeto
- São divididos em 3 categorias:

### de Criação (Creational)
Que visam abstrair o processo de como objetos são criados na aplicação;

- [ ] Abstract Factory
- [ ] Factory Method
- [x] Builder
- [x] Prototype
- [x] Singleton

### Estruturais (Structural)
Que lidam com a composição de classes e objetos;

- [ ] Adapter
- [ ] Bridge
- [ ] Composite
- [ ] Decorator
- [ ] Façade
- [ ] Flyweight
- [ ] Proxy

### Comportamentais (Behavioural)
Que caracterizam como as classes e objetos interagem e distribuem responsabilidades na aplicação.

- [ ] Interpreter
- [ ] Template Method
- [ ] Chain of Responsibility
- [ ] Iterator
- [ ] Command
- [ ] Mediator
- [ ] Memento
- [ ] Observer
- [ ] State
- [ ] Strategy
- [ ] Visitor

## Benefícios e Problemas

- **O que é bom:**
    - Não precisa reinventar a roda;
    - Padrões universais facilitam o entendimento do seu projeto;
    - Evita refatoração desnecessária;
    - Ajuda na reutilização de código;
    - Abstrai e nomeia partes particulares do projeto;
    - Ajusta na aplicação dos princípios do design orientado a objetos (SOLID);
        - **Princípio da Responsabilidade Única:** Uma classe deve ter apenas um motivo para mudar;
        - **Princípio do Aberto/Fechado:** Classes ou objetos e métodos devem estar abertos para extensão, mas fechados para modificações;
        - **Princípio da Substituição de Liskov:** Classes derivadas devem ser capazes de substituir totalmente classes-bases;
        - **Princípio da Segregação de Interface:** Os clientes não devem ser forçados a depender de interfaces que não utilizam;
        - **Princípio da Inversão de Dependência:** Módulos de alto nível não devem ser dependentes do módulo de baixo nível; ambos devem depender de abstrações. Detalhes devem depender das abstrações, não o inverso.
    - Facilitam a criação de testes unitários.

- **O que é ruim:**
    - Alguns padrões podem ser complexos até que você os compreenda;
    - Muito código para atingir um objetivo simples;
    - Podem trazer otimização prematuras para seu código;
    - Se usados incorretamente, podem atrapalhar ao invés de ajudar.