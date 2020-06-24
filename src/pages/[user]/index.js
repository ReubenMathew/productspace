import ProjectCard from '../../modules/profile/ProjectCard'
import Head from 'next/head'

const host = process.env.NODE_ENV == 'development' ? 'http://localhost:3000' : `https://${process.env.VERCEL_URL}`

export async function getServerSideProps({ params }) {

    const getURI = `${host}/api/GetProjects?user="${params.user}"`
    const res = await fetch(getURI)
    const ProjectData = await res.json()

   
    const user = params.user
    
    return {
      props: {
        ProjectData,
        user
      }
    }
  
  }

function Cards(props){

    const projects = props.data
    const userLink = props.user
    // console.log(userLink)

    return(
        <div class="flex flex-wrap ">
            {projects.map(project => (
                <ProjectCard 
                    source={project.Source}
                    projectName={project.ProjectName}
                    link={`/${userLink}/${project.ProjectName}`}
                />
            ))}
        </div>
    )
}

function Profile(props) {
    
    return (
        <div>
            <Head>
                <title>{props.user}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>\
                <meta property="og:site_name" content="productspace" />
                <meta property="og:title" content={`${props.user}`} />
                <meta property="og:url" content={`www.productspace.now.sh/${props.user}/`} />
                <meta property="og:description" content={`${props.user}'s profile page`} />
            </Head>
            <div class="bg-white min-h-screen px-8 py-8">
                <Cards data={props.ProjectData} user={props.user}/>
            </div>
        </div>
    );
}

export default Profile;