# Proxy
Structural Design Pattern

Proxy implementado é do tipo _virtual_.

> Fornece um substituto ou espaço reservado a um outro objeto. Esse proxy controla o acesso ao objeto
> original, permitindo fazer algo antes ou depois do pedido chegar ao objeto original

## Intenção Oficial
É um padrão de projeto com a intenção de fornecer um substituto ou marcador de localização para outro
objeto para controlar o acesso a esse objeto.

> Basicamente, é algo que fica no meio do caminha quando o cliente quer obter um objeto

## Sobre o Proxy
Usa composição, portanto tem a estrutura muito semelhante ao "Composite" e "Decorator" 
(mas as intenções são completamente diferentes: 
o Decorator adiciona algo a mais ao objeto, 
o Composite se comporta como se foce um objeto único, o
Proxy por enquanto, tenta ser substítuto ao objeto real).

É usado para controle de acesso, logs, cache, lazy instantiation e lazy evaluation, distribuição de 
serviços e mais.

Pode escolher como e quando repassar chamadas de métodos para o objeto real.

Pode executar ações antes e depois das chamadas dos métodos do objeto real.

Tem várias variações: proxy virtual, proxy remoto, proxy de proteção, proxy inteligente...

## Variações de Proxy
- **Proxy Virtual:** controla acesso a recursos que podem ser caros para criação ou utilização.
  - salvaria grandes tabelas no cache, por exemplo, para não precisar ficar reconenctando todo hora.

- **Proxy Remoto:** controla acesso a recursos que estão em servidores remotos.

- **Proxy de Proteção:** controla acesso a recursos que possam necessitar autenticação ou permissão.
  - login, por exemplo.

- **Proxy Inteligente:** além de controlar acesso ao objeto real, 
também executa tarefas adicionais para saber quando e como executar determinadas ações;

## Aplicabilidade
use o Proxy quando...

Você tem um objeto caro para ser criado e não quer permitir acesso direto a esse objeto (proxy virtual).

Você quer restringir acesso a partes da sua aplicação (proxy de proteção);

Você quer uma ligação entre seu sistema e um sistema remote (proxy remoto);

Você quer fazer cache de chamadas já realizadas (proxy inteligente ou de cache);

Você quer interceptar quaisquer chamadas de métodos no objeto real por qualquer motivo
(por exemplo, criar logs).

etc.

## Consequências
- **BOM:**
  - código cliente nem precisa saber se está usando um proxy (ele finge ser real);
  - OCP;
  - Proxy funciona mesmo se o objeto real não estiver operacional ou pronto para uso;
  - Você pode controlar o ciclo de vida de objetos reais dentro do proxy