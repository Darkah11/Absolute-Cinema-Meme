"use client";
import { useState } from "react";
import copy from "clipboard-copy";

const CopyButton = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await copy(text);
      setIsCopied(true);
    } catch (error) {
      console.error("Failed to copy text to clipboard", error);
    }
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div>
      <button
        onClick={handleCopyClick}
        className=" text-white bg-black rounded-xl px-3 py-[5px] hover:bg-green-950"
      >
        {isCopied ? "Copied!" : "Copy CA"}
      </button>
    </div>
  );
};

export default CopyButton;
