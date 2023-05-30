import { styled } from "styled-components";
import {
  TextWrapper,
  Title,
  SubHeader,
  Description,
} from "../Atoms/SingleSlide";
import { IMovieorTv } from "../Interfaces";
import { imageBaseUrl } from "../Constants";
import { useState, useEffect } from "react";
import FetchData from "../fetchData";
import { movieUrls, tvUrls, baseUrl, emptyDetails } from "../Constants";
import Skeleton from "react-loading-skeleton";
import { IPageDetails } from "../Interfaces";
import DisplayGenres from "./Genres";

interface Genres {
  id: number;
  name: string;
}

function BasicDetails({ id, mediatype }: IPageDetails) {
  const [details, setDetails] = useState<IMovieorTv>();
  const [status, setStatus] = useState<boolean>(false);
  const [genreIds, setGenreIds] = useState<Array<number>>([]);

  const genreList =
    mediatype === "movie" ? movieUrls.genreList : tvUrls.genreList;

  const getData = async () => {
    let data = await FetchData(`${baseUrl}${mediatype}/${id}`);
    setStatus(true);
    setDetails(data);
    setGenreIds(() => {
      return data.genres.map((item: Genres) => item.id);
    });
  };
  useEffect(() => {
    setStatus(false);
  }, [id]);
  useEffect(() => {
    if (!status) {
      getData();
    }
  }, [status]);
  //console.log(details);

  if (details) {
    return (
      <DetailsArea background={imageBaseUrl + details.backdrop_path}>
        <TextWrapper>
          <Title>{details.name || details.title}</Title>
          <SubHeader>
            {<DisplayGenres url={genreList} inputGenres={genreIds} /> || (
              <Skeleton />
            )}
          </SubHeader>
          <Description>{details.overview}</Description>
        </TextWrapper>
      </DetailsArea>
    );
  } else return <></>;
}

export default BasicDetails;

const DetailsArea = styled.div<{ background: string }>`
  height: 600px;
  width: 100%;
  background-image: ${(props) => `url(${props.background})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0%;
`;
