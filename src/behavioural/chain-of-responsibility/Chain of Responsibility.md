# Chain of Responsibility
Behavioural Design Pattern

## Intenção Oficial:
Evita o acoplamento do remetente de uma solicitação ao seu destinatário, dando a mais de um
objeto a chance de tratar a solicitação. Encadeia os objetos receptores e passa a 
solicitação ao longo da cadeia até que um objeto a trate.

## Sobre o Chain of Responsibility
É usado quando uma requisição precisa passar por uma sequêcia de operações até ser totalmente tratada.

Desacopla quem envia de quem vai tratar a requisição.

É muito usado com requisições HTTP

É a base para outros padrões de projeto conhecidos (como Middleware usado no Express)

Permite que um objeto trate a requisição e chame o próximo objeto da cadeia.

Permite que um objeto não trate a requisição e chame o próximo objeto da cadeia.

Permite que um objeto trate a requisição e finalize a cadeia.

Permite que um objeto não trate a requisição e finalize a cadeia.

O Cliente pode iniciar a requisição de qualquer objeto caso necessário.

## Aplicabilidade
Use o Chain of Responsibility quando...

Seu sistema precisa processar uma requisição em várias etapas diferentes e você não quer criar uma
ordem rígida para o processamento. O Chain of Responsibility permite que você altere a ordem dos objetos
na cadeia facilmente (mesmo assim, mantendo uma ordem específica).

Você quer aplicar o princípio da responsabilidade única para tratamento de dados da requisição. Cada
objeto fica responsável por tratar apenas a parte que lhe couber.

Você quer permitir que os objetos responsáveis pelo tratamento de requisição possam variar em tempo 
de execução.
