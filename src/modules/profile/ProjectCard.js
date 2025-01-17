import Link from 'next/link'

function ProjectCard(props){
    const repo = props.source ? props.source.slice(19) : "";
    return (
        <div class="max-w-md w-full h-auto shadow-lg rounded-lg border border-accent1">
            <div class="flex justify-between items-center py-6 px-6">
                <div class="font-bold text-2xl">
                    <Link class="cursor-pointer" href="/[user]/[project]" as={props.link}>{props.projectName}</Link>
                </div>
                <div class="cursor-pointer ">
                    <Link class="" href="/[user]/[project]" as={props.link}>
                        <span class="text-accent5 text-sm border flex items-center border-accent2 py-1 px-4 rounded-lg hover:border-accent5 hover:text-accent7 focus:outline-none transition duration-200 ease-in-out">
                            <span class="hidden sm:block">Visit</span>
                            <svg class="sm:hidden text-current h-4 w-auto" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>
                        </span>
                    </Link>
                </div>
            </div>
            <div class="bg-accent1 border-t border-accent2 py-3 px-6"> 
                <a href={props.source} class="flex text-black text-sm font-medium leading-normal items-center">
                    <svg class="h-5 w-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"/></svg>
                    <span class="tracking-tight font-medium truncate">{repo}</span>
                </a>
            </div>

        </div>
    );
}

export default ProjectCard;