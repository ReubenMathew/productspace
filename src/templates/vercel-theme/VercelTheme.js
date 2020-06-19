import Head from 'next/head'
import Nav from './components/Nav'
import Splash from './components/Splash'
import Markdown from './components/Markdown'

function VercelTheme(props){
    
  return (
    <div>
      <div className="w-full">
        {/* fixed class for sticky nav */}
        <div className="bg-accent1">
          <Nav 
            projectName={`${props.projectName}`}
            docs={`${props.docs}`}
            author={`${props.author}`}
            source={`${props.source}`}
          />
          <Splash
            tagline={`${props.tagline}`}
            description={`${props.description}`}
            download={`${props.download}`}
            source={`${props.source}`}
          />
        </div>
        <Markdown/>
      </div>

    </div>
  );
}

export default VercelTheme;