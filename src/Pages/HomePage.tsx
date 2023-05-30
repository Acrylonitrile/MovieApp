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
        <Slides urls={movieUrls} title="Trending Movies" mediatype="movie" />
        <CardRow
          url={movieUrls.topRated}
          mediatype="movie"
          title="Top Rated Movies"
          isPerson={false}
        />
        <CardRow
          url={movieUrls.upcoming || ""}
          mediatype="movie"
          title="Upcoming Movies"
          isPerson={false}
        />
        <Slides urls={tvUrls} title="Trending Tv" mediatype="tv" />
        <CardRow
          url={tvUrls.popular}
          mediatype="tv"
          title="Popular Tv"
          isPerson={false}
        />
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
