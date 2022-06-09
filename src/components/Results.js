import React from "react";

import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

import { useStateContext } from "./StateContextProvider";
import Loading from "./Loading";

const Results = () => {
  const { isLoading, searchTerm, getResults, results } = useStateContext();
  const location = useLocation();

  React.useEffect(() => {
    if (searchTerm !== "") {
      getResults(`${location.pathname}/q=${searchTerm}&num=40`);
    }
  }, [searchTerm, location.pathname]);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between md:px-1 lg:px-48 max-w-5xl">
          {results?.map(({ link, title, description }, ind) => (
            <div key={ind} className="w-full mb-4">
              <a
                href={link}
                className="block text-xs mb-3"
                target="_blank"
                rel="norefer"
              >
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
                {link.length > 30 ? link.substring(0, 30) : link}
              </a>
              <p className="text-sm break-all">{description}</p>
            </div>
          ))}
        </div>
      );
    case "/image":
      return (
        <div className="flex flex-wrap justify-between items-center gap-5 w-full">
          {results?.map(({ image, link: { href, title } }, ind) => (
            <a
              key={ind}
              href={href}
              className="flex justify-center items-center flex-col text-xs h-full"
              target="_blank"
              rel="norefer"
            >
              <img src={image?.src} alt={title} loading="lazy" className="" />
              <p className="mt-2 text-sm break-words hover:underline dark:text-blue-300 text-blue-700">
                {title}
              </p>
            </a>
          ))}
        </div>
      );
    case "/news":
      return (
        <div className="flex flex-wrap justify-between items-center md:px-1 lg:px-48 max-w-5xl">
          {results?.map(({ link, source, title, id }, ind) => (
            <div key={ind} className="w-full mb-4">
              <a
                href={link}
                className="block text-xs hover:underline"
                target="_blank"
                rel="norefer"
              >
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
              <a href={source?.href} className="text-sm break-all">
                {source?.title}
              </a>
            </div>
          ))}
        </div>
      );
    case "/video":
      return (
        <div className="flex flex-wrap justify-between items-center gap-1 w-full">
          {results?.map((video, ind) => (
            <div key={ind} className="p-2">
              {video?.additional_links?.[0].href && <ReactPlayer url={video?.additional_links?.[0].href} controls  width="350px" height="350"/>}
            </div>
          ))}
        </div>
      );

    default:
      return "Error...";
  }
};

export default Results;
