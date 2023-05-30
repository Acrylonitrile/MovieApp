import { styled } from "styled-components";
import { IPersonDetails } from "../Interfaces";
import { useState, useEffect } from "react";
import FetchData from "../fetchData";
import { baseUrl, imageBaseUrl } from "../Constants";

interface Props {
  id: string;
}

function PersonDetails({ id }: Props) {
  const [details, setDetails] = useState<IPersonDetails>();
  const [status, setStatus] = useState<boolean>(false);

  const getData = async () => {
    let data = await FetchData(`${baseUrl}person/${id}`);
    setStatus(true);
    setDetails(data);
  };

  useEffect(() => {
    if (!status) {
      getData();
    }
  }, [status]);
  console.log(details);
  if (details) {
    return (
      <Mainwrapper>
        <PictureArea>
          <ImageWrap
            background={imageBaseUrl + details.profile_path}
          ></ImageWrap>
        </PictureArea>
        <DetailsArea>
          <PersonName>{details.name}</PersonName>
          <DetailRow>
            <DetailTitle>Date Of Birth: </DetailTitle>
            {details.birthday}
          </DetailRow>
          <DetailRow>
            <DetailTitle>Place Of Birth: </DetailTitle>
            {details.place_of_birth}
          </DetailRow>
          <DetailRow>
            <DetailTitle>Gender: </DetailTitle>
            {details.gender === 1 ? "Female" : "Male"}
          </DetailRow>
          <DetailRow>
            <DetailTitle>Biography:</DetailTitle>
            <Biography>{details.biography}</Biography>
          </DetailRow>
        </DetailsArea>
      </Mainwrapper>
    );
  } else return <></>;
}

export default PersonDetails;

const Mainwrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 300px;
  background-color: #0d1125;
`;

const PictureArea = styled.div`
  width: 30%;
  padding: 30px 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageWrap = styled.div<{ background: string }>`
  background-color: white;
  width: 200px;
  height: 260px;
  background-size: cover;
  background-image: ${(props) => `url(${props.background})`};
`;

const DetailsArea = styled.div`
  width: 70%;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
`;

const PersonName = styled.div`
  width: 100%;
  text-align: center;
  font-size: 30px;
`;
const DetailTitle = styled.span`
  font-weight: bold;
`;
const DetailRow = styled.div`
  padding: 10px 0px;
  font-size: 18px;
`;
const Biography = styled.div`
  width: 100%;
  font-size: 18px;
`;
