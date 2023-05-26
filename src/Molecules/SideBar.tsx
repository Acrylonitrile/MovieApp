import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { buttons } from "../Constants";
import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [visibleState, setVisibleState] = useState(false);

  return (
    <MainWrapper visibleState={visibleState}>
      <RowWrap
        onMouseEnter={() => setVisibleState(true)}
        onMouseLeave={() => setVisibleState(false)}
      >
        {buttons.map((item) => (
          <SideBarLink to={item.link}>
            <ButtonWrap>
              <IconWrap>
                <FontAwesomeIcon icon={item.icon} />
              </IconWrap>
              <TextWrap visibleState={visibleState}>{item.text}</TextWrap>
            </ButtonWrap>
          </SideBarLink>
        ))}
      </RowWrap>
    </MainWrapper>
  );
}

export default Sidebar;

const MainWrapper = styled.div<{ visibleState: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${(props) => (props.visibleState ? "250px" : "4%")};
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 2;
  transition: 0.2s;
  background-image: ${(props) =>
    props.visibleState
      ? `linear-gradient(
    to right,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 0)
  )`
      : `linear-gradient(
    to right,
    rgba(0, 0, 0, 1) ,
    rgba(0,0,0,1)
  )`};

  height: 100%;
  overflow: visible;
`;

const SideBarLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const RowWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const ButtonWrap = styled.div`
  width: 100%;
  height: 50px;
  margin: 30px 0px;
  display: flex;
  flex-direction: row;
  font-size: 30px;
  transition: 0.2s;
  &:hover {
    color: #178000;
    cursor: pointer;
  }
`;

const IconWrap = styled.div`
  width: 50px;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextWrap = styled.div<{ visibleState: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: inherit;
  padding: 0px 20px;
  display: ${(props) => (props.visibleState ? "initial" : "none")};
`;
