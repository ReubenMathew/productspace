import Head from 'next/head'
import Nav from './components/Nav'
import Splash from './components/Splash'
import Markdown from './components/Markdown'

function VercelTheme(props){
  
  // console.log(props,"Vercel Theme")
  return (
    <div>
      <div className="w-full">
        {/* fixed class for sticky nav */}
        <div className="bg-accent1">

          <Splash
            tagline={`${props.Tagline}`}
            description={`${props.Description}`}
            download={`${props.Download}`}
            source={`${props.Source}`}
          />
        </div>
        <Markdown/>
      </div>

    </div>
  );
}

export default VercelTheme;