import Link from 'next/link'

function Home(){
  
  return (
    <div>
      <div>
        <Link href="/display">Template</Link>
      </div>
      <div>
        <Link href="/setup">Setup</Link>
      </div>
    </div>
    );
}

export default Home;
