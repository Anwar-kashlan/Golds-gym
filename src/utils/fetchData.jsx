export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
export const videoOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, option) => {
  const response = await fetch(url, option);
  const data = response.json();
  return data;
};
