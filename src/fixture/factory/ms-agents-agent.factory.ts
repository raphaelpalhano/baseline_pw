import { faker } from '@faker-js/faker';
import { dateYMD } from '../../helpers/date.helper';

/**
 * Refactor necessário:
 * remover as condições de erro e colocar tudo em uma se possível para reduzir a variação
 * 
 * @param condition 
 * 
 * @returns 
 */

export function generatePayloadAgent(condition: string) {
  let body;
  switch(condition) {
    case 'valid': 
      body = {
        'sap_code': faker.number.int(999999999),
        'name': `teste-qualitymap-${faker.number.int(9999999)}`,
        'nif': 'aaaaaaa22',
        'phone': '244935555049',
        'address': 'my-address, 1233, test',
        'pin': '2233',
        'type': 'box'
      };
      break;
    case 'sap-invalid': 
      body = {
        'sap_code': 998123117,
        'name': `teste-qualitymap-${faker.number.int(9999999)}`,
        'nif': 'aaaaaaa22',
        'phone': '244935555049',
        'address': 'my-address, 1233, test',
        'pin': '2233',
        'type': 'box'
      };
      break;
    case 'no-require': 
      body = {
        'nif': 'aaaaaaa22',
        'phone': '244935555049',
        'address': 'my-address, 1233, test',
        'pin': '2233',
        'type': 'box'
      };
      break;
    case 'numeric-fields': 
      body = {
        'sap_code': faker.number.int(999999999),
        'name': `teste-qualitymap-${faker.number.int(9999999)}`,
        'nif': 'aaaaaaa22',
        'phone': 'das',
        'address': 'my-address, 1233, test',
        'pin': 'as',
        'type': 'box'
      };
      break;
  }
  
  return body;
}


export function payloadPinAgent(id: number) {
  const payload = {
    'agent_id': id,
    'application': 'USSD',
    'rule': 'all',
    'rule_value': 1
  };

  return payload;
}



export function generatePayloadSubAgent(condition: string) {
  let body;
  switch(condition) {
    case 'valid': 
      body = {
        'name': `teste-qualitymap-${faker.number.int(9999999)}`,
        'nif': 'dasdsa22131231223',
        'phone': '244935555049',
        'address': 'my-address, 1233, test',
        'pin': '2233',
        'password:': '12345678',
        'type': 'box'
      };
      break;
    case 'no-require': 
      body = {
        'nif': 'dasdsa22131231223',
        'phone': '244935555049',
        'address': 'my-address, 1233, test',
        'pin': '2233',
        'password:': '12345678',
        'type': 'box'
      };
      break;
    case 'numeric-fields': 
      body = {
        'name': `teste-qualitymap-${faker.number.int(9999999)}`,
        'nif': 'dasdsa22131231223',
        'phone': 'abcdefced',
        'address': 'my-address, 1233, test',
        'pin': 'accd',
        'password:': '12345678',
        'type': 'box'
      };
      break;
  }
  
  return body;
}


export function generatePayloadLimit(condition: string) {
  let body;
  const date = dateYMD();
  switch(condition) {
    case 'valid': 
      body = 
      {
        'wallet_id': '1',
        'limit': faker.number.int(999999999),
        'reposition': faker.number.int({min: 1, max: 10}),
        'validity': date
      };
      break;
    case 'no-require': 
      body =  {
        'limit': faker.number.int(999999999),
        'reposition': faker.number.int({min: 1, max: 10}),
        'validity': date
      };
      break;
    case 'numeric-fields': 
      body =  {
        'wallet_id': 'wal',
        'limit': 'wal',
        'reposition': 'wal',
        'validity': date
      };
      break;
    case 'invalid-date': 
      body = 
      {
        'wallet_id': '1',
        'limit': faker.number.int(999999999),
        'reposition': faker.number.int({min: 1, max: 10}),
        'validity': 'abc'
      };
  }
  
  return body;
}


export function generatePayloadStore(condition: string, type: string) {
  let body;
  switch(condition) {
    case 'valid': 
      body = {
        'name': `teste-qualitymap-${faker.number.int(9999999)}`,
        'address': 'my-address, 1233, test',
        'type': type
      };
      break;
    case 'no-require': 
      body = {
        'address': 'my-address, 1233, test',
        'type': type
      };
      break;
  }
  
  return body;
}


export function generatePayloadSeller(condition: string, type: string) {
  let body;
  switch(condition) {
    case 'valid': 
      body = {
        'name': `qualityMap${faker.number.int(99999999)}`,
        'type': type,
        'password': 'qualityMap332',
        'pin': '2233',
        'phone': faker.number.int({min: 1000000000, max: 9999999999}),
        'address': 'my-address, 1233, test',
        'old_password': 'qualityMap332'
      };
      break;
    case 'invalid': 
      body = {
        'name': ``,
        'type': type,
        'password': 'x',
        'username': `qualityMapAdminn${faker.number.int(99999999)}`,
        'pin': '2233d31231232',
        'phone': 'abc21312312321',
        'address': 'my-address, 1233, test',
      };
      break;
    case 'no-require': 
      body = {
        'type': type,
        'password': 'qualityMap339',
        'username': faker.word.sample(8),
        'pin': '2233',
        'phone': faker.number.int({min: 100000000, max: 999999999}),
        'address': 'my-address, 1233, test',
      };
      break;
    case 'numeric-fields': 
      body = {
        'sap_code': faker.number.int(999999999),
        'name': `teste-qualitymap-${faker.number.int(9999999)}`,
        'nif': 'aaaaaaa22',
        'phone': 'das',
        'address': 'my-address, 1233, test',
        'pin': 'as',
        'type': 'box'
      };
      break;
  }
  
  return body;
}


export function generatePayloadLimitSeller(condition: string) {
  let body;
  const date = dateYMD();

  switch(condition) {
    case 'valid': 
      body = 
      {
        'wallet_id': '1',
        'limit': faker.number.int(9999999),
        'reposition': '10',
        'validity': date
      };
      break;
    case 'invalid': 
      body = {
        'wallet_id': 'ab',
        'limit': 'ab',
        'reposition': 'ab',
        'validity': '2024-01-300'
      };
      break;
    case 'no-require': 
      body = {
        'limit': faker.number.int(9999999),
        'reposition': '10',
        'validity': date
      };
      break;
  }
  
  return body;
}


export function generatePayloadPin(agentId: string, application: string, condition: string) {
  let body;
  switch(condition) {
    case 'valid': 
      body = 
      {
        'agent_id': agentId,
        'application': application,
        'rule': 'all',
        'rule_value': 1
      };
      break;
    case 'invalid': 
      body =  {
        'agent_id': agentId,
        'application': application,
        'rule': 'x',
        'rule_value': 'x'
      };
      break;
    case 'no-require': 
      body = {
        'rule_value': 1
      };
      break;
  }
  
  return body;
}

