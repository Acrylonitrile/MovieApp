import "swiper/css";
import "swiper/css/navigation";
import CardRow from "../Molecules/CardRow";
import Slides from "../Molecules/Slides";
import { movieUrls, tvUrls } from "../Constants";
import { styled } from "styled-components";

function HomePage() {
  return (
    <>
      <PageContent>
        <Slides urls={movieUrls} title="Trending Movies" />
        <CardRow url={movieUrls.topRated} title="Top Rated Movies" />
        <CardRow url={movieUrls.upcoming || ""} title="Upcoming Movies" />
        <Slides urls={tvUrls} title="Trending Tv" />
        <CardRow url={tvUrls.popular} title="Popular Tv" />
      </PageContent>
    </>
  );
}

export default HomePage;

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  //max-width: 96%;
`;
