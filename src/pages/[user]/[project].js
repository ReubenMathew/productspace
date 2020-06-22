import Template from '../../modules/Template'
import Head from 'next/head'

export async function getStaticPaths() {

  // console.log("PARAMS - ",params)

  const res = await fetch(`http://localhost:3000/api/GetProjects?user="ReubenMathew"`)
  const projects = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = projects.map(project => `/ReubenMathew/${project.ProjectName}`)

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  console.log("PARAMS - ",params)
  const getURI = `http://localhost:3000/api/GetProject?user="${params.user}"&project=${params.project}`
  console.log(getURI)
  const res = await fetch(getURI)
  const ProjectData = await res.json()
  const username = params.user
  // console.log("------------")
  // console.log(ProjectData)

  return {
    props: {
      ProjectData,
      username
    }
  }

}

function ProjectPage(props){

  const data = props.ProjectData[0]
  
  // console.log("------------")
  // console.log(data)

  return (
    <div>
      <Head>
        <title>{data.ProjectName} - {props.username}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>\
        <meta property="og:site_name" content="productspace" />
        <meta property="og:title" content={`${data.projectName}`} />
      </Head>
      <Template theme="vercel" data={data}/>
    </div>
  );

}



export default ProjectPage;

// const data = {
//   tagline: 'Brainstorm. Organize. Create.',
//   description: 'VennFX is a cross-platform Venn Diagram desktop application built for performance and customization.',
//   download: 'https://github.com/EECS2311-Team8/SoftwareDevelopmentProject/releases/tag/vF',
//   source: 'https://github.com/ReubenMathew/VennFX',
//   docs: "https://github.com/ReubenMathew/VennFX/tree/master/Documentation",
//   author: 'Reuben Ninan'
// }