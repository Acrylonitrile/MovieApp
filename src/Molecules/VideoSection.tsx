import { styled } from "styled-components";
import { videoBaseUrl } from "../Constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import FetchData from "../fetchData";
import { IPageDetails } from "../Interfaces";
import { VideoDetails } from "../Interfaces";
import { baseUrl } from "../Constants";

function VideoSection({ mediatype, id }: IPageDetails) {
  const [details, setDetails] = useState<Array<VideoDetails>>([]);
  const [status, setStatus] = useState<boolean>(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const getData = async () => {
    let data = await FetchData(`${baseUrl}${mediatype}/${id}/videos`).then(
      (data) => {
        setCurrentVideo(data.results[0].key);
        return data;
      }
    );
    setStatus(true);
    setDetails(data.results);
  };
  useEffect(() => {
    setStatus(false);
  }, [id]);
  useEffect(() => {
    if (!status) {
      getData();
    }
  }, [status]);
  //console.log(currentVideo);
  return (
    <MainWrapper>
      <VideoWrap>
        <Iframe src={videoBaseUrl + currentVideo} />
      </VideoWrap>
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
              <VideoTitleWrap onClick={() => setCurrentVideo(item.key)}>
                <FontAwesomeIcon icon={faPlay} />
                {item.name}
              </VideoTitleWrap>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrap>
    </MainWrapper>
  );
}

export default VideoSection;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  width: 100%;
`;

const VideoWrap = styled.div`
  width: inherit;
  height: 500px;
  background-color: white;
  margin-bottom: 20px;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const SwiperWrap = styled.div`
  height: 140px;
  width: 100%;
`;

const VideoTitleWrap = styled.div`
  width: 200px;
  min-height: 70px;
  background-color: black;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  text-align: center;
`;
