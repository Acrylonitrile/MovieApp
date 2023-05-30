import { styled } from "styled-components";
import { imageBaseUrl } from "../Constants";
import { useNavigate } from "react-router-dom";

interface Props {
  background: string;
  name: string;
  mediatype: "movie" | "tv";
  id: number;
}

function Card({ background, name, mediatype, id }: Props) {
  // console.log(background);
  let navigate = useNavigate();

  return (
    <CardWrap
      background={imageBaseUrl + background}
      onClick={() => navigate(`/page/${mediatype}/${id}`)}
    >
      {background ? "" : name}
    </CardWrap>
  );
}

export default Card;

const CardWrap = styled.div<{ background: string }>`
  width: 130px;
  height: 200px;
  background-size: cover;
  background-color: black;
  background-image: ${(props) => `url(${props.background})`};
  margin: 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
