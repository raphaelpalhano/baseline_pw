export function queryAgentById(id: string) {
  const query = JSON.stringify({
    query: `query {
      agent(id: ${id}) {
      id
      name
      address,
      sap_code,
      stores {
        id
        name
        address
        status
        created_at
        limits {
          id,
          date_limit,
          limit,
          wallet_id,
          reposition,
          validity
          }
          details {
          id,
          name,
          value
          }
        sellers {
          id,
          name,
          status,
          pin,
          phone,
          username,
          created_at
          limits {
          id,
          date_limit,
          limit,
          wallet_id,
          reposition,
          validity
          }
          details {
          id,
          name,
          value
          }
        }
      }
      pinManagement {
          id,
          application,
                  rule,
          rule_value,
          created_at
      }
    } 
  }`,
    variables: {}
  });
  
  return query;
}


export function querySellerById(id: string) {
  const query = JSON.stringify({
    query: `query {
    seller(id: ${id}) {
      id,
      status,
      pin,
      phone,
      username,
      created_at
      limits {
          id,
          date_limit,
          limit,
          wallet_id,
          reposition,
          validity
      }
      details {
        id,
        name,
        value
      }
      store {
        id
        name
        address
        status
        created_at
        limits {
          id,
          date_limit,
          limit,
          wallet_id,
          reposition,
          validity
        }
          details {
          id,
          name,
          value
          }
        agent {
          id,
          name,
          sap_code,
          status
          address,
          created_at,
          details {
              id,
              name,
              value
          }
          pinManagement {
              id
              application
              rule
              rule_value
              created_at
          }
        }
      }
    } 
  }`,
    variables: {}
  });
 
  return query;
}


export function queryStoreById(id: string) {
  const query = JSON.stringify({
    query: `query {
    store(id: ${id}) {
          id
          name
          address
          status
          created_at
          limits {
            id,
            date_limit,
            limit,
            wallet_id,
            reposition,
            validity
            }
           details {
            id,
            name,
            value
        }
        agent {
            id,
            name,
            sap_code,
            status
            address,
            created_at
            details {
                id,
                name,
                value
            }
        }
      }
    }`,
    variables: {}
  });
 
  return query;
}


export function queryPinAgentId(agentId: string) {
  const query = JSON.stringify({
    query: `query {
      getPinByAgentId(agent_id: ${agentId}) {
          id,
          application,
          rule,
          rule_value,
          created_at,
          agent {
              id,
              name,
              address,
              sap_code
          }
      } 
  }`,
    variables: {}
  });
  
  return query;
}


export function queryAgentSapCode(sapCode: string) {
  const query = JSON.stringify({
    query: `query {
      agentBySapCode(sap_code: "${sapCode}") {
        id
        name
        address,
        sap_code,
        stores {
          id
          name
          address
          status
          created_at
          limits {
            id,
            date_limit,
            limit,
            wallet_id,
            reposition,
            validity
            }
          details {
            id,
            name,
            value
          }
          sellers {
            id,
            name,
            status,
            pin,
            phone,
            username,
            created_at
            limits {
                id,
                date_limit,
                limit,
                wallet_id,
                reposition,
                validity
            }
            details {
                id,
                name,
                value
            }
          }
        }
      } 
    }`,
    variables: {}
  });
  
  return query;
}


export function queryOperations(id: number, model: string, limit: number) {
  const query = JSON.stringify({
    query: `query {
      operations(id: ${id}, model: "${model}", limit: ${limit}) {
        id
        description
        user
        changes
        created_at
      }
    }
    `,
    variables: {}
  });
  
  return query;
}