import Template from '../modules/Template'
import Head from 'next/head'

function Display(){
  
  return (
    <div>
      <Head>
        <title>{props.projectName}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <Template theme="vercel"/>
    </div>
  );

}



export default Display;
