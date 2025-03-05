import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "../../Layout/Header/header.jsx"
import Loader from "../../common/Loader/Loader.jsx";

import "./Search.scss";

let images = [
    "https://images.unsplash.com/photo-1740905546458-2b0199785aa3?ixid=M3w3MTcwNDl8MHwxfGFsbHwxfHx8fHx8fHwxNzQxMDA0ODMyfA&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1740916856932-7b02aeca973b?ixid=M3w3MTcwNDl8MHwxfGFsbHwyfHx8fHx8fHwxNzQxMDA0ODMyfA&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1740880250725-8b0d83ac9c23?ixid=M3w3MTcwNDl8MHwxfGFsbHwzfHx8fHx8fHwxNzQxMDA0ODMyfA&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1740859743702-e52ec69325c8?ixid=M3w3MTcwNDl8MHwxfGFsbHw0fHx8fHx8fHwxNzQxMDA0ODMyfA&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1740953669187-70139f77d1ec?ixid=M3w3MTcwNDl8MHwxfGFsbHw1fHx8fHx8fHwxNzQxMDA0ODMyfA&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1740964169160-10f96dd960a3?ixid=M3w3MTcwNDl8MHwxfGFsbHw2fHx8fHx8fHwxNzQxMDA0ODMyfA&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1734799081043-e94d698bd6a2?ixid=M3w3MTcwNDl8MHwxfGFsbHw3fHx8fHx8fHwxNzQxMDA0ODMyfA&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1740905546458-2b0199785aa3?ixid=M3w3MTcwNDl8MHwxfGFsbHwxfHx8fHx8fHwxNzQxMDA0ODMyfA&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1740916856932-7b02aeca973b?ixid=M3w3MTcwNDl8MHwxfGFsbHwyfHx8fHx8fHwxNzQxMDA0ODMyfA&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1740880250725-8b0d83ac9c23?ixid=M3w3MTcwNDl8MHwxfGFsbHwzfHx8fHx8fHwxNzQxMDA0ODMyfA&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1740859743702-e52ec69325c8?ixid=M3w3MTcwNDl8MHwxfGFsbHw0fHx8fHx8fHwxNzQxMDA0ODMyfA&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1740953669187-70139f77d1ec?ixid=M3w3MTcwNDl8MHwxfGFsbHw1fHx8fHx8fHwxNzQxMDA0ODMyfA&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1740964169160-10f96dd960a3?ixid=M3w3MTcwNDl8MHwxfGFsbHw2fHx8fHx8fHwxNzQxMDA0ODMyfA&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1734799081043-e94d698bd6a2?ixid=M3w3MTcwNDl8MHwxfGFsbHw3fHx8fHx8fHwxNzQxMDA0ODMyfA&ixlib=rb-4.0.3"
]


function Search() {
    let { search } = useParams();
    let navigate = useNavigate();
    images = []

    const [searchTerm, setSearchTerm] = useState(search || '');

    useEffect(() => {
        setSearchTerm(search || '');
    }, [search]);

    let searchFun = (event) => {
        if (event.key === 'Enter') {
            let value = event.target.value
            setSearchTerm(value);
            navigate(`/search/${value}`, { replace: true });
        }
    };

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };
    
    return (
        <>
            <Header />
            <div className="bg-image d-flex justify-content-center">
                <div className="search d-flex justify-content-between">
                    <input type="text" placeholder="Enter your keywords..." value={searchTerm} onChange={handleChange} onKeyDown={searchFun} />  
                    <img className="d-flex align-items-center" style={{ cursor: "pointer" }} src="/src/assets/img/Search.svg" />
                </div>
            </div>
            <div className="container mt-5 pt-4 img-gallery">
                {
                    images && images.map((item, index) => (
                        <div key={index} className="image">
                            <img src={item} alt={`image-${index}`} />
                        </div>
                    ))
                }
                {
                    images.length === 0 && (<Loader/>)
                }
            </div>
        </>
    );
}

export default Search;

