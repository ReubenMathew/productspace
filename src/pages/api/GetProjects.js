import ApolloClient, { gql, InMemoryCache, HttpLink } from 'apollo-boost';

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

    const user = req.query.user
    
    client
    .query({
        query: gql`
            query AccountByUserID {
                accountByUserID(userid: ${user}) {
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
                            Description
                        }
                        }
                    }
                    }
                }
            }

        `
    })
    .then(result => {
    //   console.log(result)
      res.end(JSON.stringify(result.data.accountByUserID.data[0].profile.projects))
      
    })
    .catch(error => console.log(error));

    
  }
  
