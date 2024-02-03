

export default function Sidebar() {
    return(
        <div className="h-lvh bg-slate-300 p-5 drop-shadow-md">
            <div className="">
                <h1><strong>GPT Blogger</strong></h1>
            </div>
            <div className="flex flex-col flex-grow">
                <form className="flex flex-col flex-grow justify-center">
                    <textarea rows={5} className="textarea p-2 my-3" placeholder="System Message"></textarea>
                    <textarea rows={5} className="textarea p-2 my-3" placeholder="User Message"></textarea>
                    <button
                        type="button"
                        className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-3">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}