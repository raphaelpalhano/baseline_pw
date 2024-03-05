# ms-automation-zap


## Executions

Qase report:

npm run test:qase

Execute pipeline

npm run test:ci

## Como funciona a hierarquia

## Ms Agentes 

Informações do vendedor (Agente)


## ZapArp

o Balance, os pontos para fazer vendas vem do arp.


## ZW

Parte do histórico de pagamento e referência de pagamentos.

É a aplicação onde está a informação dos clientes e 
referencias de pagamentos para os agentes.

Quando faço a pesquisa no Zap agentes eu estou chamando o ZW para verificando se existe um cliente com esse código zap.

Diz tudo sobre o cliente, quem é o cliente, quais assinaturas o cliente tem, zw tem os produtos do cliente.


## hierarquia

### Agente 

entidade principal que vai ter o código zap


### Lojas 

Um agente pode ter uma ou mais lojas.


### Sellers

Cada loja pode ter um ou mais vendedores


## Dependencias

Loja > SubAgent

Para criar uma loja é necessário primeiro criar um subagent `/agent/1/subagent`


## Rodando teste pelo docker

### Build

docker build -t pw-test:latest -f docker/dockerfile .


### Run

 docker run -it -e  NODE_ENV_TEST='local' -t pw-test:latest npm run test:ci
 docker run -it -e  NODE_ENV_TEST='develop' -t pw-test:latest npm run test:ci

 

 ## Test CICD Integracao continua atuomatica

 Rodar os teste no localhost

Montar um docker compose colocando o zaparp, ms-agentes


