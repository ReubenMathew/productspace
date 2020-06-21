import Button from './Button'
import React, {useState} from 'react'
import Nav from './Nav'

function Splash(props){
  
  const [tagline, setTagline] = useState(props.tagline);
  const [description, setDescription] = useState(props.description);
  const [download, setDownload] = useState(props.download);
  const [source, setSource] = useState(props.source);

  function Download(props) {
    const download = props.download;
    if (download) {
      return (
        <div className="">
          <a href={`${download}`}>
            <Button py="3" px="12" type="success" shadow="true" text="Download"/>
          </a>
        </div>
      );  
    } 
    return <span/>;
  }

  return(
    <div class="relative bg-white overflow-hidden">
  <div class="max-w-screen-xl mx-auto ">
    <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>
      <Nav 
        projectName={`${props.projectName}`}
        docs={`${props.docs}`}
        author={`${props.author}`}
        source={`${props.source}`}
      />

      {/* <!--
        Mobile menu, show/hide based on menu open state.

        Entering: "duration-150 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      --> */}

      <main class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div class="sm:text-center lg:text-left">
          <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
            Data to enrich your online business
            <br class="xl:hidden" />

          </h2>
          <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
          </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
             <div className="flex justify-center w-auto space-y-3 text-lg whitespace-no-wrap sm:justify-start sm:space-y-0 ">
               <Download download={`${download}`}/>
               <div>
                  <a href={`${source}`}>
                  <Button py="3" px="12" type="secondary" shadow="true" text="Source Code"/></a>
                </div>
              </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="" />
  </div>
</div>
    // <div className="flex justify-center pb-12 sm:pb-24 border-b-1 border-accent2 sm:mt-12">
    //   <div className="flex flex-col flex-wrap sm:flex-row sm:px-32 ">
    //     <div className="self-center w-full px-12 pt-8 sm:px-2 sm:py-6 sm:w-1/2">
    //       <div className="text-4xl font-black text-center sm:text-left xl:text-5xl lg:text-5xl">{tagline}</div>
    //       <div className="hidden w-auto py-6 sm:block">{description}</div>
    //       <div className="hidden sm:block">
    //         <div className="flex justify-center w-auto space-y-3 text-lg whitespace-no-wrap sm:justify-start sm:space-y-0 ">
    //           <Download download={`${download}`}/>
    //           <div>
    //               <a href={`${source}`}>
    //               <Button py="3" px="12" type="secondary" shadow="true" text="Source Code"/></a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="self-center p-12 sm:p-8 sm:w-1/2 xl:self-start">
    //       <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1004.673 840.065"><path d="M677.603 209.358c-51.234-65.09-136.104-106.43-221.941-144.678C208.157-45.606 20.945-25.742 110.592 209.358zM282.145 529.018c41.242 66.233 89.753 114.374 173.517 114.374 88.009 0 166.197-44.878 215.656-114.374z" fill="#3f3d56"/><path d="M61.252 323.877c9.366-11.33 19.941-21.982 32.848-29.018s28.455-10.16 42.547-5.975c10.52 3.124 19.486 9.996 27.784 17.176 17.002 14.712 32.68 31.556 52.733 41.721s46.478 12.063 63.511-2.612c13.481-11.615 19.229-31.733 35.327-39.314 15.87-7.473 34.27.552 50.373 7.506a421.231 421.231 0 0067.648 22.63c15.66 3.799 31.791 6.711 47.833 5.183s32.141-7.95 42.604-20.205M290.977 389.373c9.366-11.33 19.941-21.981 32.848-29.018s28.455-10.16 42.547-5.975c10.52 3.124 19.486 9.996 27.784 17.176 17.002 14.712 32.68 31.556 52.733 41.721s46.478 12.063 63.511-2.612c13.481-11.615 19.229-31.733 35.327-39.313 15.87-7.473 34.27.551 50.373 7.505a421.233 421.233 0 0067.648 22.63c15.66 3.8 31.791 6.711 47.833 5.183s32.141-7.95 42.604-20.205" opacity=".1"/><path d="M68.095 316.056c9.366-11.33 19.941-21.981 32.848-29.018s28.454-10.159 42.546-5.974c10.52 3.124 19.486 9.996 27.785 17.176 17.002 14.711 32.68 31.555 52.733 41.72s46.478 12.064 63.511-2.612c13.48-11.614 19.228-31.732 35.327-39.313 15.87-7.473 34.27.552 50.373 7.506a421.233 421.233 0 0067.648 22.63c15.66 3.799 31.791 6.71 47.833 5.183s32.141-7.95 42.604-20.205" fill="#3f3d56"/><path d="M299.775 378.62c9.366-11.33 19.941-21.982 32.848-29.018s28.455-10.16 42.547-5.975c10.52 3.124 19.486 9.996 27.784 17.176 17.002 14.712 32.68 31.556 52.733 41.721s46.478 12.063 63.511-2.612c13.481-11.615 19.229-31.733 35.327-39.314 15.87-7.473 34.27.552 50.373 7.506a421.233 421.233 0 0067.648 22.63c15.66 3.799 31.791 6.711 47.833 5.183s32.141-7.95 42.604-20.205" fill="#3f3d56"/><circle cx="60.73" cy="253.348" r="21.506" opacity=".1"/><circle cx="68.551" cy="243.572" r="21.506" fill="#888"/><path d="M726.761 300.595h40.377a141.219 141.219 0 000-48.141h-40.377a86.622 86.622 0 010 48.14z" opacity=".1"/><path d="M732.627 292.774h40.376a141.219 141.219 0 000-48.14h-40.376a86.622 86.622 0 010 48.14zM101.85 606.346c33.588 101.086 21.792 196 21.792 196S57.388 733.365 23.8 632.28s-21.792-196-21.792-196 66.254 68.98 99.842 170.066z" fill="#888"/><path d="M145.434 606.346c-33.588 101.086-21.792 196-21.792 196s66.254-68.98 99.842-170.066 21.792-196 21.792-196-66.254 68.98-99.842 170.066z" fill="#888"/><path d="M158.962 607.439c2.252 106.496-37.037 193.698-37.037 193.698s-42.939-85.463-45.19-191.96 37.037-193.698 37.037-193.698 42.939 85.464 45.19 191.96z" fill="#3f3d56"/><ellipse cx="121.903" cy="802.338" rx="94.988" ry="5.213" fill="#3f3d56"/><circle cx="117.849" cy="513.32" r="10.425" fill="#888"/><circle cx="97.577" cy="596.724" r="5.792" fill="#888"/><circle cx="26.915" cy="539.384" r="5.792" fill="#3f3d56"/><circle cx="231.371" cy="483.202" r="5.792" fill="#3f3d56"/><circle cx="57.033" cy="593.828" r="5.792" fill="#3f3d56"/><circle cx="178.664" cy="560.235" r="5.792" fill="#3f3d56"/><circle cx="60.508" cy="678.97" r="5.792" fill="#3f3d56"/><circle cx="184.456" cy="645.956" r="5.792" fill="#3f3d56"/><circle cx="128.274" cy="651.748" r="5.792" fill="#888"/><path d="M666.788 327.774h-40.376a141.218 141.218 0 010-48.141h40.376a86.622 86.622 0 000 48.14z" opacity=".1"/><path d="M672.654 321.909h-40.377a141.218 141.218 0 010-48.142h40.377a86.622 86.622 0 000 48.142z" fill="#ff6584"/><path fill="#ffb9b9" d="M951.493 760.482l8.463 26.93-26.16 2.308 2.308-29.238h15.389zM824.537 781.256v36.933H794.53l8.463-36.933h21.544z"/><path d="M931.488 512.726l12.31 116.953s15.389 103.103 12.311 119.261.77 18.466.77 18.466h-23.083s.77-10.002-3.847-14.619-2.309-18.466-2.309-18.466l-58.476-178.507-33.085 100.026s-5.386 110.028-6.156 111.566-3.077 22.314-3.077 22.314h-28.47s3.848-12.311-1.538-16.158-10.003-.77-5.386-7.694 6.155-15.389 4.616-19.236-1.538-19.236-1.538-19.236 2.308-207.745 15.388-214.67 121.57 0 121.57 0zM816.406 798.615s13.157-1.974 13.157-1.316 15.787 43.416 0 42.759-75.65-9.21-71.704-24.998 23.682-11.183 23.682-11.183l17.761-9.867zM945.94 784.99s-13.156-1.973-13.156-1.315-15.788 43.416 0 42.758 75.65-9.21 71.703-24.997-23.682-11.183-23.682-11.183l-17.761-9.867z" fill="#2f2e41"/><path d="M887.529 616.891h-48.075a168.144 168.144 0 010-57.32h48.075a103.138 103.138 0 000 57.32z" fill="#888"/><circle cx="868.186" cy="262.647" r="30.279" fill="#ffb9b9"/><path d="M892.247 258.816s5.386 53.86 12.31 57.707-53.09 7.694-53.09 7.694 14.62-49.243 10.003-53.86 30.777-11.541 30.777-11.541z" fill="#ffb9b9"/><path d="M827.615 314.984s21.544-20.775 46.166-16.928 42.318 8.464 42.318 8.464 37.702 20.005 38.471 36.163-13.85 76.943-13.85 76.943-6.924 99.256-7.694 99.256-130.033-1.54-130.033-1.54l23.853-129.263z" fill="#3f3d56"/><path d="M832.647 500.13c4.986 1.347 13.58-.515 22.552-3.454 16.004-5.255 33.2-13.957 33.2-13.957s55.4-22.314 71.557-33.855 5.386-57.707 5.386-57.707l-24.621 7.694 1.539 28.469-60.785 39.24a137.129 137.129 0 00-28.138 5.656c-10.234 3.362-20.174 8.602-23.768 16.65a15.575 15.575 0 00-1.185 3.855c-.73 4.247.993 6.517 4.263 7.41z" fill="#ffb9b9"/><path d="M829.57 488.866c1.069 3.986 2.108 7.78 3.077 11.265 4.986 1.346 13.58-.516 22.552-3.455l-1.862-24.46c-10.233 3.362-20.174 8.602-23.768 16.65z" opacity=".15"/><path d="M840.695 376.538l4.617 40.78 7.656 100.62s42.357 50.957 18.504 52.495-36.932-50.012-36.932-50.012-23.852-81.56-23.083-98.487 0-45.396 0-45.396z" fill="#ffb9b9"/><path d="M833.991 259.268a7.899 7.899 0 01-2.177-1.312c-1.653-1.604-1.374-4.323-.656-6.511s1.766-4.452 1.252-6.697c-.24-1.047-.81-2.004-.972-3.065-.388-2.522 1.625-4.822 3.853-6.067s4.79-1.86 6.895-3.303c3.229-2.212 5.012-6.115 8.29-8.254 3.205-2.092 7.278-2.157 11.106-2.153l11.428.013c5.972.006 12.535.228 16.98 4.217 1.352 1.213 2.422 2.715 3.791 3.91 2.758 2.403 6.48 3.363 9.541 5.365a16.547 16.547 0 017.348 13.935c-.109 5.07-2.58 9.997-1.938 15.028.43 3.375 2.253 6.618 1.774 9.986-.568 3.995-4.232 6.857-7.99 8.326s-7.855 1.997-11.512 3.704c-2.984 1.393-6.102 3.613-9.248 2.638-2.662-.824-4.122-3.635-5.076-6.253a51.036 51.036 0 01-2.446-9.443c-.383-2.407-.637-4.959-2.05-6.945a7.996 7.996 0 00-7.15-3.083c-6.171.542-9.645 11.051-15.32 8.566-2.813-1.232-4.975-4.92-7.23-6.932a36.297 36.297 0 00-8.493-5.67z" fill="#2f2e41"/><path d="M945.337 335.758s15.389 5.386 21.544 26.93 3.847 36.163 3.847 36.163l-32.316 5.386zM843.004 313.445s-27.7-6.156-31.547 20.005a418.743 418.743 0 00-3.847 53.09s26.16-12.31 37.702 0z" fill="#3f3d56"/></svg>
    //       <div className="py-8 text-center sm:hidden">
    //         {description}
    //       </div>
    //       <div className="flex flex-wrap justify-center space-y-3 text-lg whitespace-no-wrap sm:hidden sm:justify-start sm:space-y-0 sm:space-x-5">
    //         <Download download={`${download}`}/>
    //         <a href={`${source}`}>
    //             <Button py="3" px="12" type="secondary" shadow="true" text="Source Code"/></a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Splash;