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

export interface IPageDetails {
  id: string;
  mediatype: string;
}

export interface ImageDetails {
  file_path: string;
}

export interface VideoDetails {
  name: string;
  key: string;
}

export interface IPersonDetails {
  name: string;
  profile_path: string;
  character: string;
  id: number;
  biography: string;
  birthday: string;
  place_of_birth: string;
  gender: 1 | 2;
}
