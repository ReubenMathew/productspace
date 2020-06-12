import ProjectCard from '../modules/profile/ProjectCard'

function Profile() {
    return (
        <div class="bg-white min-h-screen px-8 sm:px-32 py-8 flex flex-wrap flex-col items-center justify-center">
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
        </div>
    );
}

export default Profile;