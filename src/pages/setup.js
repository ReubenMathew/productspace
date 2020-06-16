
function Short(props) {
    
    return (
        <div class="text-sm tracking-tighter uppercase">
            <label className="px-2">{props.label}</label>
            <div class="py-2">
                <input placeholder={props.text} class="px-4 py-2 w-full focus:outline-none rounded-lg border border-accent2 focus:border-accent5 transition duration-200 ease-in-out"/>
            </div>
        </div>
    )
}

function MediumText(props) {
    
    return (
        <div class="py-2 text-sm tracking-tighter uppercase">
            <label className="px-2">{props.label}</label>
            <div class="py-2">
                <textarea placeholder={props.text} class="p-4 w-full h-32 focus:outline-none rounded-lg border border-accent2 focus:border-accent5 transition duration-200 ease-in-out"/>
            </div>
        </div>
    )
}

function Setup(){
    return (
<<<<<<< HEAD
        <div class="bg-accent1 min-h-screen flex items-center justify-center">
            <Short/>
            {/* <div class="w-full px-3">
                Hello
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    Password
                </label>
                <input class="appearance-none block max-w-md bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************"/>
                <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
            </div> */}
=======
        <div class="bg-white min-h-screen px-8 sm:px-32 py-8 flex flex-wrap flex-col items-center justify-center">
            <div class="bg-white shadow-xl w-full rounded-lg pt-12">
                <div class="px-8">
                    <div class="p-2 font-extrabold text-xl">Project Details</div>
                    <div class="flex pb-3 flex-wrap w-full">
                        <span class="sm:w-1/2 pr-0 sm:pr-8"><Short label="Product Name" text="e.g. VennFX"/></span>
                        <span class="sm:w-1/2"><Short label="Repository URL" text="e.g. github.com/ReubenMathew/VennFX"/></span>
                    </div>    
                    {/* <hr class="py-3"/> */}
                    <div class="pb-3">
                        <Short label="Tagline" text="Write a short tagline in 5 words or less."/>
                        <MediumText label="Description" text="Write a description..."/>
                    </div>
                    <hr class="py-2"/>
                    <div class="px-2 pb-4 font-extrabold text-lg">Optional Links</div>
                    <div class="flex pb-6 flex-wrap w-full whitespace-no-wrap">
                        <span class="sm:w-1/2 pr-0 sm:pr-8"><Short label="Documentation Link" text="e.g. github.com/ReubenMathew/VennFX/wiki"/></span>
                        <span class="sm:w-1/2"><Short label="Download Link" text="e.g. github.com/ReubenMathew/VennFX/releases"/></span>
                    </div>
                </div>
                <div class="bg-accent1 border-t border-accent2 px-8">
                    <div class="py-4 px-2 flex flex-wrap justify-center sm:justify-between items-center">
                            <span class="text-accent5 text-sm pb-4 text-center sm:text-left">Fill out this form before submitting.</span>
                            <button class="text-accent4 border border-accent2 py-2 px-8 rounded-lg hover:border-accent4 hover:text-accent5 focus:outline-none transition duration-200 ease-in-out">Submit</button>
                    </div>
                </div>
            </div>
>>>>>>> b6cbd79051c0a6b67d43cd86e686c1f5d7ac625d
        </div>
    );
}

export default Setup;
