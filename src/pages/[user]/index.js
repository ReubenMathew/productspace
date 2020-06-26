import ProjectCard from '../../modules/profile/ProjectCard'
import Head from 'next/head'
import Footer from '../../components/Footer'
import {useRouter} from 'next/router'

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



function Profile(props) {
    const router = useRouter()
    
    return (
        <div class="">
            <Head>
                <title>{props.user}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>\
                <meta property="og:site_name" content="productspace" />
                <meta property="og:title" content={`${props.user}`} />
                <meta property="og:url" content={`www.productspace.now.sh/${props.user}/`} />
                <meta property="og:description" content={`${props.user}'s profile page`} />
            </Head>

            <Navbar/>

            <div class="bg-accent1">
                <div class="flex flex-wrap h-full min-h-screen ">
                    <div class="sm:w-2/3 w-full py-6 ">
                        <Cards data={props.ProjectData} user={props.user}/>
                    </div>
                    <div class="bg-white border-accent2 border-b-0 border-t-1 sm:border-l-1 sm:border-t-0 sm:w-1/3 py-8 text-center w-full ">
                        <div class="px-4">
                            Sample side bar with profile details...
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>

        </div>
    );
}

function Cards(props){

    const projects = props.data
    const userLink = props.user
    // console.log(userLink)

    return(
        <div class="flex flex-col sm:px-8">
            {projects.map(project => (
                <div class="p-4">
                    <ProjectCard
                        source={project.Source}
                        projectName={project.ProjectName}
                        link={`/${userLink}/${project.ProjectName}`}
                    />
                </div>
            ))}
        </div>
    )
}

function Navbar(){
    return (
    <nav class="bg-white border border-b-1 border-accent2">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
            <div class="flex-1 flex items-center justify-around sm:items-stretch sm:justify-start">
                <div class="flex-shrink-0">
                    <a href="/">
                        <svg class="w-auto h-8" viewBox="0 0 372 371" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="#fff" stroke="#333" stroke-width="20" d="M10 10h352v352H10z"/><path fill="#333" d="M60 60h252v252H60z"/></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h372v371H0z"/></clipPath></defs></svg>
                    </a>
                </div>
                <div class="ml-6">
                    <div class="flex">
                        <span href="#" class="hidden sm:block px-3 py-2 rounded-md items-center text-base font-medium leading-5 text-accent7 focus:outline-none transition duration-150 ease-in-out">Dashboard</span>
                    </div>
                </div>
            </div>
            <div class="ml-6">
                <div class="flex">
                    <a href="#" class="mx-4 px-3 py-2 rounded-md flex items-center justify-center text-base font-medium leading-5 text-accent5 border border-accent2 hover:text-black hover:border-accent8 focus:outline-none transition duration-150 ease-in-out">
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        <span class="pl-2">Profile</span>
                    </a>
                </div>
            </div>

        </div>
    </div>
    </nav>
    )
}

export default Profile;