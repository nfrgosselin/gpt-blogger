import { submitPrompt } from "@/lib/actions";


export default function Sidebar() {
    
    return(
        <div className="h-lvh bg-neutral p-5 drop-shadow-md">
            <div className="">
                <h1 className="text-primary"><strong>GPT Blogger</strong></h1>
            </div>
            <div className="flex flex-col flex-grow">
                <form className="flex flex-col flex-grow justify-center" action={submitPrompt}>
                    <textarea name="systemMessage" rows={5} className="textarea p-2 my-3" placeholder="System Message"></textarea>
                    <textarea name="userMessage" rows={5} className="textarea p-2 my-3" placeholder="User Message"></textarea>
                    <button
                        className="btn btn-sm btn-primary px-2 py-1">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}