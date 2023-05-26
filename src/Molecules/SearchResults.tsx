import Card from "../Atoms/Card";
import { styled } from "styled-components";
import { IMovieorTv } from "../Interfaces";

interface Props {
  results: Array<IMovieorTv>;
}

function SearchResults({ results }: Props) {
  return (
    <>
      <MainWrapper>
        {results.map((item) => (
          <Card
            background={item.poster_path}
            name={item.title || item.name || ""}
          />
        ))}
      </MainWrapper>
    </>
  );
}

export default SearchResults;

const MainWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
