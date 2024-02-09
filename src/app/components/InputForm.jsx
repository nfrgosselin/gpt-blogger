import React, { useState, useEffect } from "react";

export default function InputForm({ onSubmit }) {
  const [msgSystem, setMsgSystem] = useState();
  const [msgUser, setMsgUser] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(msgSystem, msgUser);
    // console.log("system message:", msgSystem);
    // console.log("user message:", msgUser);
  };

  return (
    <div className="h-full">
      <form
        className="flex flex-col flex-grow justify-center"
        onSubmit={handleSubmit}
      >
        <textarea
          placeholder="Enter a system message"
          rows={5}
          value={msgSystem}
          className="textarea p-2 my-3"
          onChange={(e) => {
            setMsgSystem(e.target.value);
          }}
        />

        <textarea
          placeholder="Enter a user message"
          rows={5}
          value={msgUser}
          className="textarea p-2 my-3"
          onChange={(e) => {
            setMsgUser(e.target.value);
          }}
        />
        <input
          type="submit"
          className="btn btn-sm btn-primary px-2 py-1 my-3"
        />
      </form>
    </div>
  );
}
