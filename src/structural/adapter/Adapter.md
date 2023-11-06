# Adapter
Structural Design Pattern

## Intenção Oficial
Converter a interface de uma classe de outra interface esperada pelos clientes. O adapter
permite que certas classes trabalhem em conjunto, pois de outra forma seria impossível por
causa de suas interfaces incompatíveis.

## Sobre o Adapter
É muito usado para definir limites dentro de camadas da aplicação.

Também pode ser usado para adaptar interfaces de código legado para um novo código.

## Aplicabilidade 
Use o padrão Adapter quando:

você não quiser que seu código dependa de código de terceiros ou legado.

Você quiser usar uma classe existente mas sua interface for incompatível com a interface
que seu código ou domínio precisam.

Você quiser reutilizar várias subclasses que não possuam determinada 
funcionalidade mas for impraticável 
estender o código de cada uma apenas para adicionar a funcionalidade desejada 
(o Decorator também faz isso).

## Consequências
- **BOM:**
  - Aplica o SRP ao separar a conversão de interfaces da lógica da aplicação.
  - Aplica o OCP ao permitir introduzir novos adapters para código existene.
- **RUIM:**
  - aumenta a complexidade