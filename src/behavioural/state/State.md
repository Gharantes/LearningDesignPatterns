# State 
Behavioural Design Pattern

## Intenção Oficial
Permite que um objeto altere o seu comportamento quando o seu estado interno muda. O objeto perceberá 
ter mudado a sua classe.

> Visa delegar o estado de um objeto contexto para uma família de estados
> caso o seu objeto de contexto dependa do estado para mudar o seu comportamento.

## Sobre o State
Evita condicionais quando um objeto contexto muda de comportamento dependendo do seu estado.

Desacopla o estado de um objeto contexto e seus métodos em objetos de estado separados.

Facilita a adição de novos estados sem a necessidade de alterar estados anteriores.

## Aplicabilidade
Use o State quando...

O seu objeto pode se comportar de maneira diferente dependendo do seu estado atual.

Você quer evitar o uso de condicionais que alteram o comportamento da classe de acordo com valores 
dos seus campos.

## Conquências
- **BOM:**
  - Desacopla a lógica de um estado da classe de contexto;
  - Permite a criação de novos estados, apenas adicionando novas clases;
  - Elimina condicionais complexas da classe de contexto.
- **RUIM:**
  - Se você tem apenas poucas condicionais simples, aplicar este padrão pode deixar o seu código mais complexo que o necessário.