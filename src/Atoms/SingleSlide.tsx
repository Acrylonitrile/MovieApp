import Genres from "../Molecules/Genres";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { styled } from "styled-components";
import { imageBaseUrl } from "../Constants";
import { IMovieorTv } from "../Interfaces";
import { useNavigate } from "react-router-dom";

interface Props {
  item: IMovieorTv;
  genreList: string;
  mediatype: string;
}

function SingleSlide({ item, genreList, mediatype }: Props) {
  let navigate = useNavigate();
  return (
    <SlideWrapper
      background={imageBaseUrl + item.backdrop_path}
      onClick={() => navigate(`/page/${mediatype}/${item.id}`)}
    >
      <TextWrapper id={item.id.toString()}>
        <Title>{item.title || item.name || <Skeleton />}</Title>
        <SubHeader>
          {<Genres url={genreList} inputGenres={item.genre_ids} /> || (
            <Skeleton />
          )}
        </SubHeader>
        <Description>{item.overview || <Skeleton count={5} />}</Description>
      </TextWrapper>
    </SlideWrapper>
  );
}

export default SingleSlide;

const SlideWrapper = styled.div<{ background: string }>`
  width: 100%;
  height: 100%;
  background-image: ${(props) => `url(${props.background})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0%;
  &:hover {
    cursor: pointer;
  }
`;

export const TextWrapper = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 80px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0)
  );
`;

export const Title = styled.div`
  font-size: 40px;
  margin: 20px 0px 0px;
`;
export const Description = styled.div`
  font-size: 18px;
  padding: 20px 0px;
`;

export const SubHeader = styled.div`
  font-size: 16px;
  padding: 10px;
  color: #318000;
`;
