# ms-automation


## Executions

Qase report:

npm run test:qase

Execute pipeline

npm run test:ci

## Como funciona a hierarquia

## Ms Agentes 

Informações do vendedor (Agente)



## Rodando teste pelo docker

### Build

docker build -t pw-test:latest -f docker/dockerfile .


### Run

 docker run -it -e  NODE_ENV_TEST='local' -t pw-test:latest npm run test:ci
 docker run -it -e  NODE_ENV_TEST='develop' -t pw-test:latest npm run test:ci

 

 ## Test CICD Integracao continua atuomatica

 Rodar os teste no localhost


