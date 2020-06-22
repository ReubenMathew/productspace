import Head from 'next/head'
import Nav from './components/Nav'
import Splash from './components/Splash'
import Markdown from './components/Markdown'

function VercelTheme(props){
  
  console.log("\n------------------\n")
  console.log(props,"Vercel Theme")
  return (
    <div>
      Hello
    </div>
  );
}

export default VercelTheme;