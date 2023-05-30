import { styled } from "styled-components";
import { useState, useEffect } from "react";
import Card from "../Atoms/Card";
import { IMovieorTv } from "../Interfaces";
import { baseUrl } from "../Constants";
import { IPageDetails } from "../Interfaces";
import FetchData from "../fetchData";

function Recommmendations({ mediatype, id }: IPageDetails) {
  const [recommendations, setRecommendations] = useState<Array<IMovieorTv>>([]);
  const [status, setStatus] = useState<boolean>(false);

  const getData = async () => {
    let data = await FetchData(`${baseUrl}${mediatype}/${id}/recommendations`);
    setStatus(true);
    setRecommendations(data.results);
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
  return (
    <MainWrapper>
      {recommendations.map((item) => (
        <Card
          background={item.poster_path}
          name={item.name || item.title || ""}
          mediatype={item.media_type}
          id={item.id}
        />
      ))}
    </MainWrapper>
  );
}

export default Recommmendations;

const MainWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;
