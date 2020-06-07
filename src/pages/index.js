import main from '../templates/vercel-theme/VercelTheme'
import Head from 'next/head'
import VercelTheme from '../templates/vercel-theme/VercelTheme'

function Home(){
  
  return (
    <div>
      <Head>
        <title>VennFX</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <VercelTheme/>
    </div>
  );

}



export default Home;
