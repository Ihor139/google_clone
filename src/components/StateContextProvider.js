import React from "react";
import axios from "axios";

const StateContext = React.createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');

  const getResults = async (type) => {
    setLoading(true);
    axios
      .get(`${baseUrl}${type}`, {
        headers: {
          "X-User-Agent": "desktop",
          "X-RapidAPI-Key":
            "b2fb307f1emsh88859dd9c38f76fp11dbf4jsna2b9c66bb9e1",
        },
      })
      .then((response) => {
        let data = response.data;

        if(type.includes('/news')){
          setResults(data.entries);
        } else if(type.includes('/image')){
          setResults(data.image_results);
        } else{
          setResults(data.results);
        }
        setLoading(false);
      });
  };

  return (
    <StateContext.Provider
      value={{ getResults, results, isLoading, searchTerm, setSearchTerm }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => React.useContext(StateContext);
