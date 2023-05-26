export interface IMovieorTv {
  id: number;
  title?: string;
  name?: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  genre_ids: Array<number>;
  media_type: "movie" | "tv";
}
// interface Imovie extends BaseInterface{
//   title:string;
// }

export interface Urls {
  trending: string;
  topRated: string;
  upcoming?: string;
  genreList: string;
  popular: string;
}

export interface MediaTypes {
  type: "all" | "movie" | "tv";
}
