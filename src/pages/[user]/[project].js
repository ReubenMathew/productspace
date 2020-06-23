import Template from '../../modules/Template'
import Head from 'next/head'

const host = process.env.NODE_ENV == 'development' ? 'http://localhost:3000' : `https://${process.env.VERCEL_URL}`
// console.log(host)
// export async function getStaticPaths() {

  
//   const res = await fetch(`${host}/api/AllUsers`)
//   const users = await res.json()
//   // console.log(users)
//   const paths = users.map( user => user.projects.data.map(project => `/${user.userid}/${project.ProjectName}`)).flat()

//   return {
//     paths,
//     fallback: false
//   }
// }


export async function getServerSideProps({ params }) {

  const getURI = `${host}/api/GetProject?user="${params.user}"&project=${params.project}`
  // console.log(getURI)
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
        <meta property="og:title" content={`${props.username} - ${data.ProjectName}`} />
        <meta property="og:url" content={`www.productspace.now.sh/${props.username}/${data.ProjectName}`} />
        <meta property="og:description" content={data.Description} />
        <meta property="og:image" content="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />

      </Head>
      <div class="min-h-screen">
        <Template theme="vercel" data={data}/>
        <Markdown/>
        <Footer/>
      </div>
    </div>
  );

}

function Markdown(){
  return (
    <div class="bg-white py-20 lg:py-32 text-center">
      Markdown goes here...
    </div>
  )
}

function Footer(){

  return (
    <div class="bg-accent1 border-t-1 border-accent2">
      <div class="h-auto flex font-semibold text-sm text-accent6 md:px-12 p-3">
        <div class="w-1/2 text-left">
            <p>Made with ❤️</p>
        </div>
        <div class=" w-1/2 text-right">
            <p>2020. <b>Lv19</b></p>
        </div>
      </div>
    </div>
  )

}

export default ProjectPage;