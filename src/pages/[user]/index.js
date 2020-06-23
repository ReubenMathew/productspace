import ProjectCard from '../../modules/profile/ProjectCard'

const data = [
    {
        source: 'https://github.com/ReubenMathew/VennFX',
        projectName: 'VennFX'
    },
    {
        source: 'https://github.com/ReubenMathew/productspace',
        projectName: 'productspace'
    },
    {
        source: 'https://github.com/ReubenMathew/pingo',
        projectName: 'pingo'
    },
    {
        source: 'https://github.com/ReubenMathew/SodaDB',
        projectName: 'SodaDB'
    },

]


function Cards(){
    return(
        <div class="flex flex-wrap ">
            {data.map(item => (
                <ProjectCard 
                    source={item.source}
                    projectName={item.projectName}
                />
            ))}
        </div>
    )
}

function Profile() {
    return (
        <div class="bg-white min-h-screen px-8 py-8  ">
            <Cards/>
        </div>
    );
}

export default Profile;