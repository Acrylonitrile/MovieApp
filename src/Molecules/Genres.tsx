import { useState, useEffect } from "react";
import FetchData from "../fetchData";
import { IMovieorTv } from "../Interfaces";

interface Props {
  url: string;
  item: IMovieorTv;
}

function Genres({ url, item }: Props) {
  const [genreList, setGenreList] = useState<Map<number, string>>(new Map([]));
  const [status, setStatus] = useState<boolean>(false);

  const getData = async () => {
    let genreData = await FetchData(url);
    setStatus(true);
    setGenreList(
      new Map(
        genreData.genres.map((genre: { id: number; name: string }) => {
          return [genre.id, genre.name];
        })
      )
    );
  };

  useEffect(() => {
    if (!status) getData();
  }, [status]);

  return <>{item.genre_ids.map((id) => genreList.get(id) + "  ")}</>;
}

export default Genres;
