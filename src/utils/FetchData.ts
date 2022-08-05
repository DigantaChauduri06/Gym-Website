import Axios from "axios";
/// url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',

export const exerciesOptions = {
  method: "GET",

  headers: {
    // "X-RapidAPI-Key": "bbb0decf56mshcb20645551f399dp169b2djsnd57a9109ad88", // Remaining
    "X-RapidAPI-Key": "7baeab4d23msh845f17cd45f1b66p1b38ddjsn879727f7d560", // Remaining

    // "X-RapidAPI-Key": "b2e31abb9bmsh3f0a314721a1f5dp12ffc9jsn1103d86e34a2",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const YoutubeOptions = {
  method: "GET",
  // params: {query: 'never+gonna+give+you+up', safesearch: 'false'},
  headers: {
    "X-RapidAPI-Key": "7baeab4d23msh845f17cd45f1b66p1b38ddjsn879727f7d560",
    "X-RapidAPI-Host": "simple-youtube-search.p.rapidapi.com",
  },
};

type optionsType = {
  method: string;
  headers: any;
};

export async function fetchData(
  url: string,
  options: optionsType,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  try {
    setLoading(true);
    const response = await Axios.get(url, options);
    const { data } = response;
    setLoading(false);
    return [false, data];
  } catch (e: any) {
    setLoading(false);
    return [true, e.response];
  }
}
