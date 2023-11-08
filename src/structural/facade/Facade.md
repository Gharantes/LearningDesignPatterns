# Facade
Structural Design Pattern

> fornece uma interface simplificada para uma biblioteca, um 
> framework, ou qualquer conjunto complexo de classes.

## Intenção Oficial
Tem a intenção de fornecer uma interface unificada para um conjunto de interfaces em um subsistema.
Façade define uma interface de nível mais alto que torna o subsistema mais fácil de ser usado.

## Sobre o Façade
Imagine ter que instanciar várias classes, passar objetos como 
parâmetro de outros objetos, chamar vários métodos ou executar algorítmos apenas para iniciar um sistema.
O façade ajudará você a não poluir o código cliente com tudo isso. Else visa fornecer uma interface
muito mais simples e unificada em um objeto que o cliente pode simplesmente chamar métodos e 
obter o comportamente desejado.

> Pense no Façade como uma pessoa que atende telefones em um call center cheio de setores. O foco 
> dessa pessoa é coletar informações com o cliente para saber para qual setor direcionar a ligação.

Como esse padrão visa unificar coisas que poderiam estar separadas no sistema, é muito comum que a
 própria classe de fachada se torne uma "God Class" (classe faz tudo), isso quebra o SRP (princípio
 da responsabilidade única). 

Porém, ele também permite a criação de facahdas adicionais que podem ser usadas tanto por clientes 
quanto por outras fachadas, o que ajuda a minimizar este problema.

## Aplicabilidade 
Use o padrão Façade quando...

Você quer disponibilizar uma interface mais simples para um sistema complexo;

Você quer criar pontos de entrada para determinadas partes do sistema, como serviços externos, camadas 
da aplicação e objetos complexos dentro em determinadas partes do código.

## Consequências
- **BOM:**
  - Isola o código complexo do código cliente;
  - Facilita o uso do sistema;
  - Cria pontos de entrada para camadas da aplicação e serviços de terceiros.
- **RUIM:**
  - O objeto façade se torna facilmente uma "God Class".
    - use Fachadas adicionais se perceber que isso está ocorrendo no seu código.