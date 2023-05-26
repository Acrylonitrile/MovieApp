import { styled } from "styled-components";
import { imageBaseUrl } from "../Constants";

interface Props {
  background: string;
  name: string;
}

function Card({ background, name }: Props) {
  // console.log(background);

  return (
    <CardWrap background={imageBaseUrl + background}>
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
`;
