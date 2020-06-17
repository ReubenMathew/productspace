import ApolloClient, { gql, InMemoryCache, HttpLink } from 'apollo-boost';

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://graphql.fauna.com/graphql',
    fetch,
    headers: {
        Authorization: `Bearer ${process.env.FAUNADB_SECRET}`
    }
})


// or you can use `import gql from 'graphql-tag';` instead




export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    
    client
    .query({
        query: gql`
            query AccountByEmail {
                accountByEmail(email: "intelphysic@gmail.com") {
                    data {
                        _id
                        email
                        userid
                        profile {
                            _id
                            projects {
                                data {
                                    _id
                                    ProjectName
                                }
                            }
                        }
                    }
                }
            }

        `
    })
    .then(result => {
      console.log(result)
      res.end(JSON.stringify(result.data.accountsByEmail.data[0]))
    })
    .catch(error => console.log(error));

    
  }
  
