
function Short() {
    return (
        <div class="w-full px-3">
            <input placeholder="Text here" class="px-4 py-3 rounded-lg border border-accent2 focus:border-accent5 transition duration-200 ease-in-out"/>
        </div>
    )
}

function Setup(){
    return (
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
        </div>
    );
}

export default Setup;
