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

    const query = req.query 

    const reqData = {
        ProjectName: query.ProjectName,
        Description: query.Description,
        Profile: "268527194172555795"
    }
    console.log(reqData)
    
    client
    .mutate({
        mutation: gql`
            mutation AddProject {
                createProject(data: {
                ProjectName: ${reqData.ProjectName}
                Description: ${reqData.Description}
                profile:{ connect: ${reqData.Profile}}
            }){
                _id
                ProjectName
            }
            }

        `
    })
    .then(result => {
      console.log(result)
      res.end(JSON.stringify(result))
    })
    .catch(error => console.log(error));

    
  }
  
