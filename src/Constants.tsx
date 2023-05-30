import { Urls } from "./Interfaces";
import {
  faHouse,
  faMagnifyingGlass,
  faFilm,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import { IMovieorTv } from "./Interfaces";

const baseUrl = "https://api.themoviedb.org/3/";
const searchUrl = "https://api.themoviedb.org/3/search/multi";

const movieUrls: Urls = {
  trending: baseUrl + "trending/movie/",
  topRated: baseUrl + "movie/top_rated",
  upcoming: baseUrl + "movie/upcoming",
  genreList: baseUrl + "genre/movie/list",
  popular: baseUrl + "movie/popular",
};

const tvUrls: Urls = {
  trending: baseUrl + "trending/tv/",
  topRated: baseUrl + "tv/top_rated",
  genreList: baseUrl + "genre/tv/list",
  popular: baseUrl + "tv/popular",
};

const configUrl = baseUrl + "configuration";
const imageBaseUrl = "https://image.tmdb.org/t/p/original";
const videoBaseUrl = "https://www.youtube.com/embed/";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNGY2YzQ2MzUwZmY3OGMzODk5ZjQ0OWRmMjg5YzdkYSIsInN1YiI6IjY0NmM4NTM3MzNhMzc2MDE1OGRiNjdiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O33dhYWtNJxqqAs8PbiJ9hqCVTbsOM4PYco3J8IE1M0",
  },
};

export const emptyDetails: IMovieorTv = {
  id: 0,
  overview: "",
  backdrop_path: "",
  poster_path: "",
  genre_ids: [],
  media_type: "movie",
};

const buttons = [
  {
    icon: faHouse,
    text: "Home",
    link: "/",
  },
  {
    icon: faMagnifyingGlass,
    text: "Search",
    link: "/search",
  },
  {
    icon: faFilm,
    text: "Movies",
    link: "/",
  },
  {
    icon: faTv,
    text: "TV Shows",
    link: "/",
  },
];

export {
  baseUrl,
  tvUrls,
  options,
  configUrl,
  imageBaseUrl,
  movieUrls,
  buttons,
  searchUrl,
  videoBaseUrl,
};
