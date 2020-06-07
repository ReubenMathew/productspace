import Head from 'next/head'
import Nav from './components/Nav'
import Splash from './components/Splash'
import Markdown from './components/Markdown'

const splashData = {
  tagline: 'Brainstorm. Organize. Create.',
  description: 'VennFX is a cross-platform Venn Diagram desktop application built for performance and customization.',
  download: 'https://github.com/EECS2311-Team8/SoftwareDevelopmentProject/releases/tag/vF',
  source: 'https://github.com/ReubenMathew/VennFX'
}

const navData = {
  projectName: 'VennFX',
  docs: "https://github.com/ReubenMathew/VennFX/tree/master/Documentation",
  author: 'Reuben Ninan'
}

function VercelTheme(){
    
  return (
    <div>
      <div className="w-full">
        {/* fixed class for sticky nav */}
        <div className="bg-accent1">
          <Nav 
            projectName={`${navData.projectName}`}
            docs={`${navData.docs}`}
            author={`${navData.author}`}
          />
          <Splash
            tagline={`${splashData.tagline}`}
            description={`${splashData.description}`}
            download={`${splashData.download}`}
            source={`${splashData.source}`}
          />
        </div>
        <Markdown/>
      </div>

    </div>
  );
}

export default VercelTheme;