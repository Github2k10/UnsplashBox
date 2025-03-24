import { React, useState, useEffect } from "react";
import axios from "axios";


import Header from "../../Layout/Header/header.jsx"


import "./Collections.scss";


function Collections() {
    let [images, setImages] = useState([]);
    let [modal, setModal] = useState(false);
    let [collectionName, setCollectionName] = useState("");

    let fetchCollections = async () => {
        try {
            axios.get("http://localhost:8000/collections/getList").then((res) => {
                if (!res.error){
                    setImages(res.data.data)
                }
            })
        } catch(err){
            console.log("error => ", err)
        }
    };

    let saveCollection = async (collection_name) => {
        try {
            axios.post("http://localhost:8000/collections/saveCollection", {collection_name: collection_name}).then((res) => {
                if (!res.error){
                    fetchCollections();
                }
            })
        } catch(err){
            console.log("error => ", err)
        } finally {
            setCollectionName("");
            setModal(false);
        }
    }


    useEffect(() => {
        fetchCollections();
    }, []);

    const openModal = (event) => {
        event.preventDefault();
        setModal(true);
    };

    const closeModal = (event) => {
        event.preventDefault();
        setModal(false);
    };

    return (
      <>
        <Header />
        <div className="col">
          <div className="card-body">
            <div className="collections-header d-flex justify-content-center py-5">
              <div className="">
                <h1>Collections</h1>
                <p>
                  Explore the world through collections of beautiful photos free
                  to use under the <span>Unsplash License</span>.
                </p>
              </div>
            </div>

            <div className="card-body collections-container m-5 px-5 mt-0">
              {images &&
                images.map((item, index) => (
                  <div key={item.name + + "_" + index} className="collection">
                    <div>
                      <div className="mb-3">
                        {item.images.length != 0 && (
                            item.images.map((image, index) => (
                                <img key={image + "_" + index} src={image} />
                            ))
                        )}
                        {
                            item.images.length == 0 && (
                                <img src="src/assets/img/coming_soon.png" />
                            )
                        }
                      </div>
                    </div>
                    <div>
                      <h5 className="mb-1">{item.name}</h5>
                      <p className="mb-0">{item.total_images} Photos</p>
                    </div>
                  </div>
                ))}
              <div className="collection-dummy d-flex justify-content-center align-items-center" onClick={openModal}>
                <svg width="32" height="32" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M12.6665 7.33335H8.6665V3.33335C8.6665 3.15654 8.59627 2.98697 8.47124 2.86195C8.34622 2.73693 8.17665 2.66669 7.99984 2.66669C7.82303 2.66669 7.65346 2.73693 7.52843 2.86195C7.40341 2.98697 7.33317 3.15654 7.33317 3.33335V7.33335H3.33317C3.15636 7.33335 2.98679 7.40359 2.86177 7.52862C2.73674 7.65364 2.6665 7.82321 2.6665 8.00002C2.6665 8.17683 2.73674 8.3464 2.86177 8.47142C2.98679 8.59645 3.15636 8.66669 3.33317 8.66669H7.33317V12.6667C7.33317 12.8435 7.40341 13.0131 7.52843 13.1381C7.65346 13.2631 7.82303 13.3334 7.99984 13.3334C8.17665 13.3334 8.34622 13.2631 8.47124 13.1381C8.59627 13.0131 8.6665 12.8435 8.6665 12.6667V8.66669H12.6665C12.8433 8.66669 13.0129 8.59645 13.1379 8.47142C13.2629 8.3464 13.3332 8.17683 13.3332 8.00002C13.3332 7.82321 13.2629 7.65364 13.1379 7.52862C13.0129 7.40359 12.8433 7.33335 12.6665 7.33335Z"
                    fill="#6C727F"
                  />
                </svg>

                <p>Add new collection</p>
              </div>
            </div>
          </div>
        </div>
        {modal && (
          <div className="add-collection d-flex justify-content-center align-items-center">
            <div className="card card-body d-flex p-4">
              <h5>Add Collection</h5>
              <input
                className="form-control my-3"
                type="text"
                placeholder="Enter collection name..."
                value={collectionName}
                onChange={(e) => setCollectionName(e.target.value)}
              />
              <div className="d-flex justify-content-center gap-2 mt-1">
                <button className="btn btn-primary px-4 py-2" onClick={() => saveCollection(collectionName)}>Save</button>
                <button className="btn btn-secondary px-4 py-2" onClick={closeModal}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </>
    );
}

export default Collections;