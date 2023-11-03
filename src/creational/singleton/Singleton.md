# Singleton
Creational Design Pattern

## Intenção Oficial:
Garantir que uma classe tenha somente uma instância no programa e fornecer um ponto de acesso global para a mesma

### Somente uma Instância?
Geralmente usado para acesso a recursos compartilhados, como acesso à base de dados, 
interfaces gráficas, sistema de arquivos, servidores de impressão, logger e mais.


Também usado para substituir variáveis globais como em casos de uso de objetos de 
configuração do sistema como um todo.

### Ponto de Acesso Global?
Você pode permitir acesso global ao Singleton em toda a sua aplicação, 
assim como fazíamos (ou fazemos) com variáveis globais.

Uma vantagem do Singletpm é que podemos proteger a instância com encapsulamento, 
evitando que outro código sobrescreva o seu valor

## Implementação:

```ts
export class Singleton {
  private static _instance: Singleton | null = null;

  private constructor() {
  }
  
  static get instance(): Singleton {
    if (Singleton._instance === null) {
      Singleton._instance = new Singleton();
    }
    return Singleton.instance;
  }
}

const instance1 = Singleton.instance;
const instance2 = Singleton.instance;

console.log(instance1 === instance2); // true
```

## Aplicabilidade
Use o Singleton quando uma classe precisa ter somente uma instância disponível em todo o seu programa.

Use o Singleton quando perceber que está usando variáveis globais para manter partes importantes do
programa, como variáveis de configuração usadas por toda a aplicação.

## Consequências:
- **Bom:**
  - Acesso controlado à instancia unica
  - É fácil permitir um número maior de instâncias caso mude de ideia;
  - Usa lazy instantiation, o Singleton só é criado no momento do uso;
  - Substitui variáveis globais.

- **Ruim:**
  - É mais difícil de testar;
  - Viola o princípio da responsabilidade única;
  - Requer tratamento especial em casos de concorrência;
