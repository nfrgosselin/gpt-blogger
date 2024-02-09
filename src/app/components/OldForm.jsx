import { submitPrompt } from "@/lib/actions";

export default function OldForm() {
  return (
    <div className="h-full">
      <div className="flex flex-col flex-grow">
        <form
          className="flex flex-col flex-grow justify-center"
          action={submitPrompt}
        >
          <textarea
            name="systemMessage"
            rows={5}
            className="textarea p-2 my-3"
            placeholder="System Message"
          ></textarea>
          <textarea
            name="userMessage"
            rows={5}
            className="textarea p-2 my-3"
            placeholder="User Message"
          ></textarea>
          <button className="btn btn-sm btn-primary px-2 py-1">Submit</button>
        </form>
      </div>
    </div>
  );
}
