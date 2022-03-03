import React from "react";
import { useState } from "react";
import { searchMovies } from "../service";
import ResultCard from "../components/ResultCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Input, Divider } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";
import "../style/add.css";
const SearchInput = styled(Input)`
  vertical-align: middle;
  line-height: 45px;
  border-radius: 5px;
  font-size: 20px;
  width: 90%;
  margin: 0 auto;
`;
const ListGroupItem = styled.li`
  padding: 0.5rem 3rem;
`;

function Add() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState([]);

  const fetchAPI = async () => {
    setSearch(await searchMovies(query));
  };

  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    fetchAPI();
  };

  return (
    <div className="container">
      <Header />
      <div className="add-content">
        <div className="row mt-4">
          <SearchInput
            type="text"
            placeholder="🕵️‍♀️ Search for a movie! ex ) harry, potter, ..."
            value={query}
            onChange={onChange}
          />
        </div>
        {search.length > 0 && (
          <ul className="list-group mt-5">
            {search.map((movie) => (
              <ListGroupItem
                className="list-group-item container"
                key={movie.id}
              >
                <ResultCard movie={movie} />
              </ListGroupItem>
            ))}
          </ul>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Add;
