import { useNavigate } from "react-router-dom";

import Header from "../../Layout/Header/header.jsx"

import "./Home.scss";

function Home() {
    let navigate = useNavigate();

    let searchFun = (event) => {
        if (event.key === 'Enter') {
            navigate(`/search/${event.target.value}`);
        }
    };

    return (
        <>
            <Header />
            <div className="home d-flex justify-content-center align-items-center">
                <div className="container d-flex justify-content-center align-items-center m-0 home-img">
                    <div className="card-body">
                        <h1>Search</h1>
                        <p>Search high-resolution images from Unsplash</p>
                        <div className="search d-flex justify-content-between">
                            <input type="text" placeholder="Enter your keywords..." onKeyDown={searchFun} />  
                            <img className="d-flex align-items-center" style={{ cursor: "pointer" }} src="/src/assets/img/Search.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;