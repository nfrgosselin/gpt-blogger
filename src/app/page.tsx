"use client";

import OldForm from "@/app/components/OldForm";
import InputForm from "@/app/components/InputForm";
import { useState } from "react";

export default function Page() {
  const [error, setError] = useState(null);
  const [choices, setChoices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (msgUser, msgSystem) => {
    try {
      console.log(msgUser, msgSystem);
      setChoices([]);
      setIsLoading(true);
      const response = await fetch("/api/chat-gpt", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          msgSystem,
          msgUser,
        }),
      });
      setIsLoading(false);
      const result = await response.json();
      console.log(result);
      setChoices(result.choices);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div id="left" className="flex-none w-1/3 bg-neutral p-5">
        <div className="">
          <h1 className="text-primary">
            <strong>GPT Blogger</strong>
          </h1>
        </div>
        <InputForm onSubmit={handleFormSubmit} />
      </div>
      <div id="right" className="flex-auto overflow-hidden p-5">
        <div>
          <h1 className="text-neutral">
            <strong>Response</strong>
          </h1>
        </div>
        <div className="max-h-full overflow-y-auto my-3">
          {choices.map((choice) => {
            return (
              <div
                key={choice.index}
                dangerouslySetInnerHTML={{ __html: choice.message.content }}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
