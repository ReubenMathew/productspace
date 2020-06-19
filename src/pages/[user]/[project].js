import Template from '../../modules/Template'
import Head from 'next/head'
import {useRouter} from 'next/router'

async function getProjectDataAsync() 
{
  let response = await fetch(`/api/GetProject?user="ReubenMathew"&project=VennFX`);
  let data = await response.json()
  return data;
}

function ProjectPage(){
  const router = useRouter()
  const head = String(router.query.project).trim()
  // ProjectData()
  // console.log(ProjectData())
  const data = {
    tagline: 'Brainstorm. Organize. Create.',
    description: 'VennFX is a cross-platform Venn Diagram desktop application built for performance and customization.',
    download: 'https://github.com/EECS2311-Team8/SoftwareDevelopmentProject/releases/tag/vF',
    source: 'https://github.com/ReubenMathew/VennFX',
    docs: "https://github.com/ReubenMathew/VennFX/tree/master/Documentation",
    author: 'Reuben Ninan'
  }

  getProjectDataAsync()
  .then(raw => {
    const res = raw[0]
    console.log(res.ProjectName)
    data.projectName = res.ProjectName
  }); 

  console.log(data)

  // console.log(router.query)
  return (
    <div>
      <Head>
        <title>{data.projectName} - {data.author}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <Template theme="vercel" data={data}/>
    </div>
  );

}



export default ProjectPage;
