import { GlobalStlye } from "./globalstyles";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { styled } from "styled-components";
import Sidebar from "./Molecules/SideBar";
import SearchPage from "./Pages/SearchPage";
import DetailsPage from "./Pages/DetailsPage";
import PersonPage from "./Pages/PersonPage";

function App() {
  return (
    <>
      <GlobalStlye />
      <BrowserRouter>
        <MainWrapper>
          <Sidebar />
          <PageWrap>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/page/:mediatype/:id" element={<DetailsPage />} />
              <Route path="/person/:personId" element={<PersonPage />} />
            </Routes>
          </PageWrap>
        </MainWrapper>
      </BrowserRouter>
    </>
  );
}

export default App;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  flex: 0 0 auto;
  justify-content: flex-end;
  height: inherit;
`;
const PageWrap = styled.div`
  height: inherit;
  width: 96%;
`;
