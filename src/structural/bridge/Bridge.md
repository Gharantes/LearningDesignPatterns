# Bridge
Structural Design Pattern

## Intenção Oficial
Bridge é um padrão de projeto estrutural que tem a intenção de desacoplar uma abstração da
sua implementação, de modo qua as duas possam variar e evoluir independentemente.

### Abstração e Implementação
**Abstração** é um código de alto nível que geralmente delega ações para outro objeto.

**Implementação:** é o código que realmente faz o trabalho.

## Diferença entre Bridge e Adapter
A diferença chave entre esses padrões está nas suas intenções. O padrão Adapter faz as coisas 
funcionarem APÓS elas terem sido projetadas; o Bridge as faz funcionar ANTES QUE existam.

## Aplicabilidade
Use o padrão Bridge quando...

Você souber que sua estrutura terá abstrações (código de alto nível) e implementações dessa 
abstração (detalhes) que possam variar de maneira independente.

Você souber que o Adapter poderia ser aplicado naquela estrutura (você já conhece a estrutura).

Você quiser dividir uma classe que possa ter diversas variantes (como em produtos e as suas variações
de cores: CanetaAzul, CanetaVermelha, CamisetaAzul, CamisetaVermelha, etc.).

Você quer trocar as implementações em tempo de execução.

## Consequências
- **BOM:**
  - Desacopla o código da abstração do código da implementação (SRP).
  - Implementa o OCP ao permitir novas abstrações e/ou implementações para código existente.
  - Tem as mesmas vantagens do Adapter.
- **RUIM:**
  - Aumenta a complexidade quando implementado em locais incorretos.