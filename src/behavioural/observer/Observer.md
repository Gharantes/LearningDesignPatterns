# Observer
Behavioural Design Pattern

> Permite que você defina um macanismo de assinatura para notificar múltiplos objetos sobre quaisquer 
> eventos que aconteçam com o objeto que eles observam.

> npx tsc src/behavioural/observer/observer.ts -w

## Intenção Oficial
Define uma dependência um para muitos entre objetos, de modo que, quando um objeto muda de estado,
todos os seus dependentes são automaticamente notificados e atualizados.

## Sobre o Observer
Implementado com dois tipos de objetos: Objetos observáveis (Observable) e objetos observadores
(Observer);

Objetos observáveis (Observable) têm uma referência para todos os seus observadores. Isso permite 
adicionar, remover e notificar observadores quando o seu estado muda.

Objetos observadores (Observer) devem ter meios de receber notificação dos seus Observáveis. 
Geralmente isso é feito com apenas um método.

## Aplicabilidade
Use o Observer quando...

Você precisa notificar vários objetos sobre a mudança de estado de outro(s) 
objeto(s).

## Consequências
Facilita a comunicação entre objetos em tempo de execução

mas

Pode ser complexo ou impossível manter a ordem em que as notificações são 
enviadas.