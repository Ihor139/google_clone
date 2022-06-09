import React from "react";
import Links from "./Links";
import { useDebounce } from "use-debounce";
import { useStateContext } from "./StateContextProvider";

const Search = () => {
  const { setSearchTerm } = useStateContext();
  const [text, setText] = React.useState("");
  const [debouncedValue] = useDebounce(text, 300);

  React.useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="relative w-3/5">
      <input
        value={text}
        type="text"
        className="w-full mb-5 h-10 dark:bg-gray-200  border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="🔎 Search Google or type URL"
        onChange={(e) => setText(e.target.value)}
      />
      {text !== "" && (
        <button
          type="button"
          className="absolute top-1.5 right-4 text-2xl text-gray-500 "
          onClick={() => setText("")}
        >
          x
        </button>
      )}
      <Links />
    </div>
  );
};

export default Search;
