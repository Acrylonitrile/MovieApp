import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { styled } from "styled-components";
import { Navigation } from "swiper";
import FetchData from "../fetchData";
import { useState, useEffect } from "react";
import { IMovieorTv } from "../Interfaces";
import Card from "../Atoms/Card";

interface Props {
  title: string;
  url: string;
}

function CardRow({ title, url }: Props) {
  const [moviesOrTv, setMoviesOrTv] = useState<Array<IMovieorTv>>();

  const getData = async () => {
    let data = await FetchData(url);
    setMoviesOrTv(data.results);
  };

  useEffect(() => {
    getData();
  }, []);

  if (moviesOrTv) {
    // console.log(moviesOrTv);
    return (
      <MainWrapper>
        <SwiperWrap>
          <SubHeader>{title}</SubHeader>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            slidesPerView={10}
            slidesPerGroup={5}
            rewind={true}
            slidesOffsetBefore={20}
            spaceBetween={10}
          >
            {moviesOrTv.map((item) => (
              <SwiperSlide>
                <Card
                  background={item.poster_path}
                  name={item.title || item.name || ""}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperWrap>
      </MainWrapper>
    );
  }

  return <></>;
}

export default CardRow;

const MainWrapper = styled.div`
  padding: 20px 0px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0) 5%,
    95%,
    rgba(0, 0, 0, 1)
  );
`;

const SwiperWrap = styled.div`
  /* background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1)
  ); */
  z-index: 2;
`;

const SubHeader = styled.div`
  font-size: 20px;
  padding: 0px 20px 10px 20px;
`;
