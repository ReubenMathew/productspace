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
        // Authorization: `Bearer ${req.query.token}`
    }
})

export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')

    const user = req.query.user
    
    client
    .query({
        query: gql`
            # Write your query or mutation here
            query ProjectsByUserID {
                accountByUserID(userid: ${user}){
                    data{
                    _id
                    email
                    userid
                    projects{
                        data{
                        _id
                        ProjectName
                        Description
                        Tagline
                        Download
                        Source
                        Docs
                        }
                    }
                    }
                }
            }


        `
    })
    .then(result => {
    //   console.log(result)
        if(result.data.accountByUserID.data[0].projects.data){
            var projects = result.data.accountByUserID.data[0].projects.data

            res.end(JSON.stringify(projects))
        }
        res.end(JSON.stringify({}))

    // console.log(out)

    
      
    })
    .catch(error => console.log(error));

    
  }
  
