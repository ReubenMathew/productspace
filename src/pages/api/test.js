export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    
    const data = {
        "rubrub": [
            {
              _id: '268780743276102144',
              ProjectName: 'Test Project 1',
              Description: 'Sample Description 1',
              __typename: 'Project'
            },
            {
              _id: '268780916576356882',
              ProjectName: 'Test Project 2',
              Description: 'Sample Description 2',
              __typename: 'Project'
            }
        ],
        "ReubenMathew": [
            {
              _id: '268785512233304595',
              ProjectName: 'VennFX',
              Description: 'Sample Description 2',
              __typename: 'Project'
            }
        ]
    }

    const out = (data => {
        
    })


    

    res.end(JSON.stringify(data))
}