import { styled } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { IPageDetails } from "../Interfaces";
import { baseUrl, imageBaseUrl } from "../Constants";
import { ImageDetails } from "../Interfaces";
import { useState, useEffect } from "react";
import FetchData from "../fetchData";

function ImageSection({ mediatype, id }: IPageDetails) {
  const [details, setDetails] = useState<Array<ImageDetails>>([]);
  const [status, setStatus] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState("");

  const getData = async () => {
    let data = await FetchData(`${baseUrl}${mediatype}/${id}/images`).then(
      (data) => {
        setCurrentImage(data.backdrops[0].file_path);
        return data;
      }
    );
    setStatus(true);
    setDetails(data.backdrops);
  };
  useEffect(() => {
    setStatus(false);
  }, [id]);
  useEffect(() => {
    if (!status) {
      getData();
    }
  }, [status]);
  // console.log(currentImage);

  return (
    <MainWrapper>
      <BigImgWrap background={imageBaseUrl + currentImage}></BigImgWrap>
      <SwiperWrap>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={3}
          slidesPerGroup={5}
          rewind={true}
          slidesOffsetBefore={20}
          spaceBetween={10}
        >
          {details.map((item) => (
            <SwiperSlide>
              <SmallImgWrap
                background={imageBaseUrl + item.file_path}
                onClick={() => setCurrentImage(item.file_path)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrap>
    </MainWrapper>
  );
}

export default ImageSection;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const BigImgWrap = styled.div<{ background: string }>`
  width: inherit;
  height: 500px;
  background-color: white;
  margin-bottom: 20px;
  background-image: ${(props) => `url(${props.background})`};
  background-size: cover;
`;

const SmallImgWrap = styled.div<{ background: string }>`
  width: 200px;
  height: 140px;
  background-color: white;
  background-size: cover;
  background-image: ${(props) => `url(${props.background})`};
  &:hover {
    cursor: pointer;
  }
`;

const SwiperWrap = styled.div`
  height: 140px;
  width: 100%;
`;
