export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "78662c4737msh47034be54d5f0c7p1b59aejsnb67bfae0d3a5",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
export const videoOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "78662c4737msh47034be54d5f0c7p1b59aejsnb67bfae0d3a5",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, option) => {
  const response = await fetch(url, option);
  const data = response.json();
  return data;
};
