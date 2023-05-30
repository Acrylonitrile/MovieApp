import { styled } from "styled-components";
import PersonDetails from "../Molecules/PersonDetails";
import { useParams } from "react-router-dom";
import CardRow from "../Molecules/CardRow";
import { baseUrl } from "../Constants";
import ImageSection from "../Molecules/ImageSection";

function PersonPage() {
  const { personId } = useParams() as {
    personId: string;
  };
  // console.log(personId);
  return (
    <MainWrapper>
      <PersonDetails id={personId} />
      <SubHeader>Stars In:</SubHeader>
      <CardRow
        title="Movies:"
        url={`${baseUrl}person/${personId}/movie_credits`}
        mediatype="movie"
        isPerson={true}
      />
      <CardRow
        title="TV Shows:"
        url={`${baseUrl}person/${personId}/tv_credits`}
        mediatype="tv"
        isPerson={true}
      />
    </MainWrapper>
  );
}

export default PersonPage;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SubHeader = styled.div`
  font-size: 30px;
  font-weight: bold;
  padding: 20px;
`;
