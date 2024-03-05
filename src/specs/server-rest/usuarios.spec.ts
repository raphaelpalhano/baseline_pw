import test, { expect } from '@playwright/test';
import { setupServerRest } from '../../config/setup';
import { getServerRest, postServerRest } from '../../services/rest-server-rest.service';
import { readerJson } from '../../helpers/json.helper';
import { schemaValidation } from '../../helpers/schema.helper';

let headers = {accept: 'application/json', 'Content-Type': 'application/json'};

test.beforeAll(async () => {
  await setupServerRest();
  const token = await postServerRest('login', readerJson('login').valid, headers);
  headers['Authorization'] = token.body.authorization;
});
  
test.describe('[Service: ServerRest, Method: POST, Endpoint: client/charge/2, Contexto: buscar pontos agente]', async () => {

  test('listagem de usuarios valido', async () => {
    const response = await getServerRest('usuarios', headers);
    expect(response.status).toBe(200);
    
    const schema = await schemaValidation('server-rest/get-list-usuarios.json', response.body);
    expect(schema).toBe('Schema validado com sucesso!');
    
  });
  
 
});