import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Header from "../../Layout/Header/header.jsx";
import Loader from "../../common/Loader/Loader.jsx";
import useSearchImage from "../../../hooks/useSearchImage.jsx";

import "./Search.scss";

function Search() {
  const { search } = useParams();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState(search || "");
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setSearchTerm(e.target.value);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setData([]);
      navigate(`/search/${e.target.value}`, { replace: true });
      fetchImages();
    }
  };

  const fetchImages = async () => {
    let url = `http://localhost:8000/unsplash/photos?page=${page}&query=${searchTerm}`;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setLoading(false);
        setData((prevData) => [...prevData, ...response.data.data]);
        setTotalPages(response.data.total_pages);
      } catch (err) {
        setLoading(false);
      }
    };

    fetchData();
  };

  useEffect(() => {
    fetchImages();
  }, [page]);

  return (
    <>
      <Header />
      <div className="bg-image d-flex justify-content-center">
        <div className="search d-flex justify-content-between">
          <input
            type="text"
            placeholder="Enter your keywords..."
            value={searchTerm}
            onChange={handleChange}
            onKeyDown={handleSearch}
          />
          <img
            className="d-flex align-items-center"
            style={{ cursor: "pointer" }}
            src="/src/assets/img/Search.svg"
          />
        </div>
      </div>
      <div className="container mt-5 pt-4 img-gallery" >
        {data &&
          data.map((item, index) => (
            <div key={index} className="image">
              <img src={item.urls.raw} alt={`image-${index}`} />
            </div>
          ))}
      </div>
      {loading && (
        <div className="container d-flex justify-content-center">
          <Loader />
        </div>
      )}
      {
        !loading && (
          <div className="container d-flex justify-content-center">
            <button className="btn btn-load-more" onClick={() => setPage(page + 1)}>Load More</button>
          </div>
        )
      }
    </>
  );
}

export default Search;
