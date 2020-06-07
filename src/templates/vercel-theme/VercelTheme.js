import Head from 'next/head'
import Nav from './components/Nav'
import Splash from './components/Splash'
import Markdown from './components/Markdown'

const data = {
  tagline: 'Brainstorm. Organize. Create.',
  description: 'VennFX is a cross-platform Venn Diagram desktop application built for performance and customization.',
  download: 'https://github.com/EECS2311-Team8/SoftwareDevelopmentProject/releases/tag/vF',
  source: 'https://github.com/ReubenMathew/VennFX',
  projectName: 'VennFX',
  docs: "https://github.com/ReubenMathew/VennFX/tree/master/Documentation",
  author: 'Reuben Ninan'
}



function VercelTheme(){
    
  return (
    <div>
      <Head>
        <title>VennFX</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <div className="w-full">
        {/* fixed class for sticky nav */}
        <div className="bg-accent1">
          <Nav 
            projectName={`${data.projectName}`}
            docs={`${data.docs}`}
            author={`${data.author}`}
          />
          <Splash
            tagline={`${data.tagline}`}
            description={`${data.description}`}
            download={`${data.download}`}
            source={`${data.source}`}
          />
        </div>
        <Markdown/>
      </div>

    </div>
  );
}

export default VercelTheme;