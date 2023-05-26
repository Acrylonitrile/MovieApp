import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { debounce } from "lodash";

interface Props {
  setQuery(query: string): void;
}

function SearchBar({ setQuery }: Props) {
  const [value, SetValue] = useState("");

  const debounceSearch = debounce(() => {
    console.log(value);
    setQuery(value);
  }, 1000);

  useEffect(() => {
    debounceSearch();
    return () => {
      debounceSearch.cancel();
    };
  }, [value]);

  return (
    <>
      <MainWrapper>
        <SearchWrapper>
          <Search
            value={value}
            onChange={(e) => SetValue(e.target.value)}
            placeholder="Search movie or TV show"
          ></Search>
          <SearchButton>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </SearchButton>
        </SearchWrapper>
      </MainWrapper>
    </>
  );
}

export default SearchBar;

const MainWrapper = styled.div`
  height: 40px;
  overflow: visible;
  margin: 40px 0px;
`;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
`;

const Search = styled.input`
  height: 40px;
  width: 400px;
  padding: 0px 20px;
`;

const SearchButton = styled.button`
  height: 40px;
  width: 40px;
  font-size: 30px;
  background-image: linear-gradient(#262626, black, #262626);
  color: white;
  border: none;
  &:hover {
    cursor: pointer;
  }
  &:active {
    background-image: linear-gradient(black, black, black);
  }
`;
