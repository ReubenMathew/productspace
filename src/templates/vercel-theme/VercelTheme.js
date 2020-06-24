import Button from './components/Button'
import Link from 'next/link'
import {useRouter} from 'next/router'


function VercelTheme(props, params){
  const router = useRouter()
  const user = router.query.user 
  console.log(user)
  // console.log("Vercel Theme",props,params)
  return (
    <div>

    <div class="relative bg-accent1 overflow-hidden">
      <div class="max-w-screen-xl mx-auto ">
        <div class="relative z-10 pb-8 bg-accent1 border-b-1 border-accent2 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full ">
          <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-accent1 transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav class="relative flex items-center justify-around sm:h-10 lg:justify-start">
              <div class="flex justify-between items-center w-full">
                <span class="font-medium text-2xl text-accent4">
                  {props.ProjectName}
                </span>
                <a href={props.Docs}>
                  <Button py="1" px="2" type="secondary" text="Documentation"/>
                </a>
              </div>
            </nav>
          </div>

          {/* <!--
            Mobile menu, show/hide based on menu open state.

            Entering: "duration-150 ease-out"
              From: "opacity-0 scale-95"
              To: "opacity-100 scale-100"
            Leaving: "duration-100 ease-in"
              From: "opacity-100 scale-100"
              To: "opacity-0 scale-95"
          --> */}


          <main class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 ">
            <div class="sm:text-center lg:text-left">
              <h2 class="text-4xl font-black tracking-tight text-black leading-10 sm:text-5xl sm:leading-none md:text-6xl">
                {props.Tagline}
              </h2>
              <p class="mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                {props.Description}
              </p>
              <div class="mt-4 text-sm text-accent6 sm:mt-4 sm:text-base sm:max-w-xl sm:mx-auto md:mt-5 md:text-base lg:mx-0">
                Created by: <span class=" text-sm  text-accent5 rounded-full bg-accent2 px-2 py-1"><Link as={`/${user}`} href="/[user]">{user}</Link></span>
              </div>
              <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div class="rounded-md">
                  <a href={props.Source} class="w-full flex items-center justify-center px-8 py-3 text-base leading-6 font-medium rounded-md text-white bg-success shadow-lg transform hover:-translate-y-1 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                    Source Code
                  </a>
                </div>
                { props.Download && 
                <div class="mt-3 sm:mt-0 sm:ml-3">
                  <a href={props.Download} class="w-full flex items-center justify-center px-8 py-3 text-base leading-6 font-medium rounded-md text-accent6 bg-white shadow-lg transform hover:-translate-y-1 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                    Download
                  </a>
                </div>
                }
              </div>
            </div>
          </main>
        </div>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img class="h-64 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1505764761634-1d77b57e1966?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="" />
      </div>
    </div>

    </div>
  );
}

export default VercelTheme;