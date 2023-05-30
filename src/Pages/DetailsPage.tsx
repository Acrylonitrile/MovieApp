import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import ImageSection from "../Molecules/ImageSection";
import BasicDetails from "../Molecules/BasicDetails";
import VideoSection from "../Molecules/VideoSection";
import Recommmendations from "../Molecules/Recommendations";
import { useState, useEffect } from "react";
import Casting from "../Molecules/Casting";

function DetailsPage() {
  const { mediatype, id } = useParams() as {
    mediatype: string;
    id: string;
  };
  // const [newId, setNewId] = useState<string>("");
  // useEffect(() => {
  //   console.log("id change");
  //   setNewId(id);
  // }, [id]);
  // console.log(newId);
  // if (newId) {
  return (
    <>
      <MainWrapper>
        <BasicDetails id={id} mediatype={mediatype} />
        <DoubleColumn>
          <Col>
            <SectionTitle>Cast:</SectionTitle>
            <Casting mediatype={mediatype} id={id} />
            <ImageSection mediatype={mediatype} id={id} />
            <VideoSection mediatype={mediatype} id={id} />
          </Col>
          <ColSmall>
            <SectionTitle>Recommended:</SectionTitle>
            <Recommmendations
              mediatype={mediatype}
              id={id}
              key={Math.random()}
            />
          </ColSmall>
        </DoubleColumn>
      </MainWrapper>
    </>
  );
  // } else return <></>;
}

export default DetailsPage;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: inherit;
`;

const DoubleColumn = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 60%;
  padding: 50px;
`;
const ColSmall = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
  padding: 50px 0px;
  font-size: 30px;
  text-align: center;
  max-height: 1400px;
  overflow: scroll;
  background-color: #261a1a;
`;

const SectionTitle = styled.div`
  text-align: center;
  font-size: 30px;
  margin: 20px 0px;
`;
