import { styled } from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import { IMovieorTv, Urls } from "../Interfaces";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useState, useEffect } from "react";
import FetchData from "../fetchData";
import "react-loading-skeleton/dist/skeleton.css";
import SingleSlide from "../Atoms/SingleSlide";

interface Props {
  urls: Urls;
  title: string;
  mediatype: "movie" | "tv";
}

function Slides({ urls, title, mediatype }: Props) {
  const [moviesOrTv, setMoviesOrTv] = useState<Array<IMovieorTv>>([]);
  const [timePeriod, setTimePeriod] = useState<"day" | "week">("day");
  const [status, setStatus] = useState<boolean>(false);

  const changeData = (timeOfButton: "day" | "week") => {
    if (timePeriod !== timeOfButton) {
      setTimePeriod(timeOfButton);
      setStatus(false);
      setMoviesOrTv([]);
    }
  };

  const getData = async () => {
    let movieData = await FetchData(urls.trending + timePeriod);
    setStatus(true);
    setMoviesOrTv(movieData.results);
  };

  useEffect(() => {
    if (!status) {
      getData();
    }
  }, [status]);

  console.log(moviesOrTv);
  return (
    <MainWrapper>
      <SwiperWrap>
        <SwipeHeader>
          <Spantext>{title}</Spantext>
          <TabButton onClick={() => changeData("day")}>Today</TabButton>
          <TabButton onClick={() => changeData("week")}>This Week</TabButton>
        </SwipeHeader>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          rewind={true}
          slidesPerView={"auto"}
        >
          {moviesOrTv.map((item) => (
            <SwiperSlide>
              <SingleSlide
                item={item}
                genreList={urls.genreList}
                mediatype={mediatype}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrap>
    </MainWrapper>
  );
}

export default Slides;

const MainWrapper = styled.div`
  position: relative;
`;

const SwiperWrap = styled.div`
  height: 600px;
  width: 100%;
  & .swiper {
    height: 100%;
  }
`;
const SwipeHeader = styled.div`
  height: auto;
  position: absolute;
  top: 20px;
  left: 80px;
  z-index: 2;
`;

const TabButton = styled.button`
  width: 100px;
  border: none;
  height: 50px;

  background-color: rgba(0, 0, 0, 0);
  color: white;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));
  }
`;

const Spantext = styled.span`
  margin-right: 20px;
  font-size: 25px;
`;

const SubHeader = styled.div`
  font-size: 16px;
  padding: 10px;
  color: #318000;
`;
