import { fa, faker } from '@faker-js/faker';

export function generateBalanceAgent(condition: string, techType: string) {
  let body;
  switch(condition) {
    case 'valid': 
      body = {
        'points': faker.number.int(10000),
        'origin_ref': faker.number.int(999999999),
        'technology': techType
      };
      break;
    case 'number-error': 
      body = {
        'points': 'abc',
        'origin_ref': '3123312',
        'technology': techType
      };
      break;
    case 'unknown-tech': 
      body = {
        'points': faker.number.int({ min: 100, max: 1000 }),
        'origin_ref': faker.number.int(999999999),
        'technology': techType
      };
      break;
  }
  
  return body;
}


export function generateBalanceSap(condition: string, sapCode: string) {
  let body;
  switch(condition) {
    case 'valid': 
      body =
      {
        'operationSapReference': faker.string.uuid(),
        'operationType': '1',
        'zapsDTH': faker.number.int({ min: 1500, max: 100000}),
        'agentSapReference': sapCode
      };
      break;
    case 'invalid': 
      body =
    {
      'operationSapReference': faker.string.uuid(),
      'operationType': 'abc',
      'zapsDTH': faker.number.int({ min: 1500, max: 100000}),
      'agentSapReference': sapCode
    };
      break;
  }
  
  return body;
}


export function generateClientChargePayload(condition: string, technology: string) {
  let body;
  switch(condition) {
    case 'valid': 
      body =
      {
        'origin_ref': faker.string.uuid(),
        'points': faker.number.int(10000),
        'technology': technology,
      };
      break;
    case 'invalid': 
      body =
    {
      'origin_ref': '9129321jd',
      'points': 'x',
      'technology': technology,
    };
      break;
  }
  
  return body;
}


export function generateChargeSubAgentPayload(condition: string, technology: string) {
  let body: any;
  switch(condition) {
    case 'valid': 
      body =
      {
        'points': faker.number.int(5000),
        'technology': technology,
        'origin_ref': faker.string.uuid(),
        'agentid': '2',
        'ignoreStoreRelation': 'true'
      };
      break;
    case 'invalid': 
      body =
      {
        'points': 'x',
        'technology': technology,
        'origin_ref': '1',
        'agentid': '0',
        'ignoreStoreRelation': 'true'
      };
      break;
  }
  
  return body;
}

