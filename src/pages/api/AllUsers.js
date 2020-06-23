import ApolloClient, { gql, InMemoryCache } from 'apollo-boost';

// API Arguments:
// user: String
// project: String

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://graphql.fauna.com/graphql',
    fetch,
    headers: {
        Authorization: `Bearer ${process.env.FAUNADB_SECRET}`
    }
})

export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    
    client
    .query({
        query: gql`
            query AllUsers {
            Accounts {
                data {
                userid
                projects{
                    data{
                    _id
                    ProjectName
                    }
                }
                }
            }
            }

        `
    })
    .then(result => {
    //   console.log(result)

    const users = result.data.Accounts.data

    // console.log(out)

    res.end(JSON.stringify(users))
      
    })
    .catch(error => console.log(error));

    
  }
  
