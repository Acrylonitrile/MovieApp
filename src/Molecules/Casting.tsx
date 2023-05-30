import { useState, useEffect } from "react";
import FetchData from "../fetchData";
import { styled } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { baseUrl, imageBaseUrl } from "../Constants";
import { IPageDetails } from "../Interfaces";
import { IPersonDetails } from "../Interfaces";
import { useNavigate } from "react-router-dom";

function Casting({ mediatype, id }: IPageDetails) {
  const [details, setDetails] = useState<Array<IPersonDetails>>([]);
  const [status, setStatus] = useState<boolean>(false);
  const navigate = useNavigate();

  const getData = async () => {
    let data = await FetchData(`${baseUrl}${mediatype}/${id}/credits`);
    setStatus(true);
    setDetails(data.cast);
  };
  useEffect(() => {
    setStatus(false);
  }, [id]);
  useEffect(() => {
    if (!status) {
      getData();
    }
  }, [status]);
  console.log(details);
  return (
    <SwiperWrap>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={6}
        slidesPerGroup={5}
        rewind={true}
        slidesOffsetBefore={20}
        spaceBetween={10}
      >
        {details.map((item) => (
          <SwiperSlide>
            <PersonWrap
              id={item.id.toString()}
              onClick={() => navigate(`/person/${item.id}`)}
            >
              <ProfilePic background={imageBaseUrl + item.profile_path} />
              <PersonName>{item.name}</PersonName>
              <PersonRole>{item.character}</PersonRole>
            </PersonWrap>
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperWrap>
  );
}

export default Casting;

const SwiperWrap = styled.div`
  min-height: 140px;
  width: 100%;
  margin-bottom: 30px;
`;

const PersonWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100px;
  &:hover {
    cursor: pointer;
  }
`;

const ProfilePic = styled.div<{ background: string }>`
  height: 140px;
  width: 100px;
  background-color: white;
  background-size: cover;
  background-image: ${(props) => `url(${props.background})`};
`;

const PersonName = styled.div`
  font-size: 20px;
`;
const PersonRole = styled.div`
  font-size: 16px;
  opacity: 0.7;
`;
