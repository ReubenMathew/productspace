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
                        }
                    }
                    }
                }
            }


        `
    })
    .then(result => {
    //   console.log(result)

    var projects = result.data.accountByUserID.data[0].projects.data

    var out = projects.filter(function(project) {
        // console.log(project.ProjectName)
        // console.log(`${req.query.project}`)
        return project.ProjectName == `${req.query.project}` ;
    });

    console.log(out)

      res.end(JSON.stringify(out))
      
    })
    .catch(error => console.log(error));

    
  }
  
