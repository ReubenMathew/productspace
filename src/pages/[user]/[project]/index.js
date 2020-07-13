import Template from '../../../modules/Template'
import Head from 'next/head'
import styles from '../../../assets/Markdown.module.css'
import Footer from '../../../components/Footer'

const host = process.env.NODE_ENV == 'development' ? 'http://localhost:3000' : `https://${process.env.VERCEL_URL}`

export async function getServerSideProps({ params }) {

  const getURI = `${host}/api/GetProject?user="${params.user}"&project=${params.project}`
  // console.log(getURI)
  const res = await fetch(getURI)
  const ProjectData = await res.json()
  const username = params.user

  const repoID = await ProjectData[0].Source ? ProjectData[0].Source.slice(19) : "";


  const markdown_res = await fetch(`https://raw.githubusercontent.com/${repoID}/master/PRODUCTSPACE.md`)
  var markdown = await markdown_res.text()
  markdown = markdown == "404: Not Found" ? "" : markdown;
  console.log(markdown)

  return {
    props: {
      ProjectData,
      username,
      markdown
    }
  }

}

function ProjectPage(props){
  // console.log(props)
  const data = props.ProjectData[0]
  
  // console.log("------------")
  // console.log(data)

  return (
    <div class="flex flex-col">
      <Head>
        <title>{props.username} | {data.ProjectName}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <meta name="title" content={`${props.username} - ${data.ProjectName}`}/>
        <meta name="description" content={data.Description}/>

        {/* Open Graph */}
        <meta property="og:site_name" content="productspace" />
        <meta property="og:title" content={`${props.username} - ${data.ProjectName}`} />
        <meta property="og:url" content={`https://www.productspace.now.sh/${props.username}/${data.ProjectName}`} />
        <meta property="og:description" content={data.Description} />
        {/* <meta property="og:image" content="../../assets/OG_IMAGE.png" /> */}

        {/* Twitter */}
        <meta property="twitter:url" content="https://www.productspace.now.sh/"/>
        <meta property="twitter:title" content={`${props.username} - ${data.ProjectName}`} />
        <meta property="twitter:description" content={data.Description}/>
        {/* <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"></meta> */}
      </Head>
      <div class="min-h-screen">
        <Template theme="vercel" data={data}/>
        <div class="xl:px-12">
          <Markdown text={props.markdown}/>
        </div>
      </div>

      <Footer></Footer>

    </div>
  );

}


function Markdown(text){

  const ReactMarkdown = require('react-markdown')

  const markdown = text.text

  function RenderMarkdown(){

    return (
      <div className="w-full whitespace-pre-wrap prose md:prose-lg lg:prose-xl">
        <ReactMarkdown 
          source={markdown}
          unwrapDisallowed="true"
        />
      </div>

    )
  }

  return (
    <div class="bg-white sm:py-8 py-4 lg:py-12 px-4 sm:px-12 xl:px-24" optionClassName="markdown">
      <RenderMarkdown/>
    </div>

  )

}



export default ProjectPage;