
import Header from "../../Layout/Header/header.jsx"

import "./Search.scss";

const images = [
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
    return (
        <>
            <Header />
            <div className="bg-image d-flex justify-content-center">
                <div className="search d-flex justify-content-between">
                    <input type="text" placeholder="Enter your keywords..." />  
                    <img className="d-flex align-items-center" style={{ cursor: "pointer" }} src="/src/assets/img/Search.svg" />
                </div>
            </div>
            <div className="container mt-5 pt-4 img-gallery">
                {images.map((item, index) => (
                    <div key={index} className="image">
                        <img src={item} alt={`image-${index}`} />
                    </div>
                ))}
            </div>
        </>
    );
}

export default Search;

