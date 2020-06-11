
function Short(props) {
    
    return (
        <div class="py-4">
            <label className="px-2 py-2">{props.label}</label>
            <input placeholder={props.text} class="px-4 py-2 focus:outline-none rounded-lg border border-accent2 focus:border-accent5 transition duration-200 ease-in-out"/>
        </div>
    )
}

function Medium(props) {
    
    return (
        <div class="">
            <label className="px-2 py-2">{props.label}</label>
            <input placeholder={props.text} class="px-4 py-2 min-w-lg focus:outline-none rounded-lg border border-accent2 focus:border-accent5 transition duration-200 ease-in-out"/>
        </div>
    )
}

function Setup(){
    return (
        <div class="bg-accent1 min-h-screen px-8 flex flex-wrap items-center justify-center">
            <div class="flex flex-wrap flex-col justify-center ">
                <Short label="Project Name" text="VennFX"/>
                <Short label="Description" text="Write a description"/>
            </div>            
        </div>
    );
}

export default Setup;
