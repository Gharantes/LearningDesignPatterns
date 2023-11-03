# Prototype
Creational Design Pattern 

## Intenção Oficial
Especificar os tipos de objetos a serem criados usando uma instância-protópipo 
e criar objetos pela cópia desse protótipo

### Sobre JS & TS
- Linguagens baseadas em protótipos;
- Objetos estão diretamente ligados a outros;
- Você pode literalmente fazer um objeto "herdar" de outro;
- A herança é obtida via delegação (um objeto delega algo para seu protótipo);
- Uma das maneiras mais simples para manipular o protótipo de um objeto é usando Object.create(prototypeObject);
- Também temos o costume de usar classes ou funções construtoras para manipular de protótipos (isso faz com que JS/TS pareçam estar usando o padrão orientado a objetos clássico).

## Visão Geral do Padrão Prototype
- O tipo de objeto a ser criado é determinado pelo objeto protótipo;
- É tipicamente usado para evitar a recriação de objetos "caros";
- Ajudar a evitar a explosão de subclasses;
- Pode (ou não) manter um registro de objetos protótipo em um objeto separado;
- Geralmente é criado apenas com um método "clone" dentro do objeto protótipo;
- O método clone pode gerar uma "shallow" ou "deep" copy do objeto protótipo;
- Evita que o cliente conheça as classes que criam os objetos.

## Aplicabilidade
Use o padrão prototype quando precisar que seu códgio não dependa de classes concretas 
para a criação de novos objetos.

Use o padrão quando quiser evitar explosão de subclasses para objetos muito similares.

Use o padrão prototype para evitar a recriação de objetos "caros".

## Consequências
Clonar objetos com referências para outros objetos pode ser super complexo.