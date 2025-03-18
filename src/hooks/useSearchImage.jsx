import { useState, useEffect } from "react";
import axios from "axios";

function useSearchImage(query, page) {
  let url = `http://localhost:8000/unsplash/photos?page=${page}&query=${query}`;
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data.data);
        setTotalPages(response.data.total_pages);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, [url]);

  return { data, totalPages, error };
}

export default useSearchImage;
