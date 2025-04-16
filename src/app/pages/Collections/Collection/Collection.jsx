import { React, useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";


import Header from "../../../Layout/Header/header";


import "./Collection.scss";

function Collection() {
    let [images, setImages] = useState([]);
    let [page, setPage] = useState(1);
    const { collection_id } = useParams();

    console.log("collection_id => ", collection_id);

    let fetchCollections = async () => {
        try {
            axios.get(`http://localhost:8000/collections/${collection_id}?page=${page}&limit=10`).then((res) => {
                if (!res.error){
                    setImages(res.data.data)
                }
            })
        } catch(err){
            console.log("error => ", err)
        }
    };

    useEffect(() => {
        fetchCollections();
    }, []);

    return (
        <>
            <Header />

            
        </>
    )
}

export default Collection;