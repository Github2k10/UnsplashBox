import { React, useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";


import Header from "../../../Layout/Header/header";


import "./Collection.scss";

function Collection() {
    let [images, setImages] = useState([]);
    let [page, setPage] = useState(1);
    const { collection_id } = useParams();

    console.log("collection_id => ", collection_id)

    return (
        <>
            <Header />

            
        </>
    )
}

export default Collection;