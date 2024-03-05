export async function postFormServerRest(endpoint: string, payload: any, headers: { [key: string]: string; }) {
  let body: any;
  let status: number;

  if (!globalThis.requestServerRest) {
    throw new Error('requestServerRest não foi inicializado corretamente.');
  }

  try {

    const request =  await requestServerRest.post(endpoint, {
      form: payload,
      headers: headers
    });

    body = request.json();
    status = request.status();
   
  } catch(e) {
    return {
      'body': e,
      'status': status
    };
  }
  
  return {
    'body': body,
    'status': status
  };

}


export async function postServerRest(endpoint: string, payload: any, headers: { [key: string]: string; }) {
  let body: any;
  let status: number;

  if (!globalThis.requestServerRest) {
    throw new Error('requestServerRest não foi inicializado corretamente.');
  }

  try {

    const request =  await requestServerRest.post(endpoint, {
      data: payload,
      headers: headers
    });

    body = await request.json();
    status = request.status();
   
  } catch(e) {
    return {
      'body': e,
      'status': status
    };
  }
  
  return {
    'body': body,
    'status': status
  };

}


export async function putFormServerRest(endpoint: string, payload: any, headers: { [key: string]: string; }) {
  let body: any;
  let status: number;

  if (!globalThis.requestServerRest) {
    throw new Error('requestServerRest não foi inicializado corretamente.');
  }

  try {

    const request =  await requestServerRest.put(endpoint, {
      form: payload,
      headers: headers
    });

    body = request.json();
    status = request.status();
   
  } catch(e) {
    return {
      'body': e,
      'status': status
    };
  }
  
  return {
    'body': body,
    'status': status
  };

}

export async function getServerRest(endpoint: string, headers: { [key: string]: string; }) {
  let body: any;
  let status: number;
  if (!globalThis.requestServerRest) {
    throw new Error('interactMsAgentes não foi inicializado corretamente.');
  }
  try {

    const request =  await requestServerRest.get(endpoint, {
      headers: headers
    });
  
    body = request.json();
    status = request.status();
   
  } catch(e) {
    return {
      'body': e,
      'status': status
    };
  }
  
  return {
    'body': body,
    'status': status
  };
}