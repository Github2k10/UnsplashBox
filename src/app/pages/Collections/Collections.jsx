import Header from "../../Layout/Header/header.jsx"

import "./Collections.scss";

let raw_data = [
    {
        id: 1,
        collection_name: "Nature",
        images: ["https://plus.unsplash.com/premium_photo-1681930071839-e5fbf9fae636?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2F0ZXJ8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1555412654-72a95a495858?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2F0ZXJ8ZW58MHx8MHx8fDA%3D",
            "https://plus.unsplash.com/premium_photo-1680555225031-5a2559c99e75?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2F0ZXJ8ZW58MHx8MHx8fDA%3D"
        ],
        total_img: 3,
    },
    {
        id: 2,
        collection_name: "Morder interior",
        images: ["https://images.unsplash.com/photo-1445510861639-5651173bc5d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yZGVyJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9yZGVyJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1558603668-6570496b66f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vcmRlciUyMGludGVyaW9yfGVufDB8fDB8fHww"
        ],
        total_img: 3,
    }
]

function Collections() {
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
                        {
                            raw_data && raw_data.map((item, index) => (
                                <div className="collection">
                                    <div>
                                        <div className="mb-3">
                                            <img
                                                src={item.images[0]}
                                                alt={item.total_img + index}
                                            />
                                            <img
                                                src={item.images[1]}
                                                alt={item.total_img + index}
                                            />
                                            <img
                                                src={item.images[2]}
                                                alt={item.total_img + index}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="mb-1">{item.collection_name}</h5>
                                        <p className="mb-0">{item.total_img} Photos</p>
                                    </div>
                                </div>
                            ))
                        }
                        <div className="collection-dummy d-flex justify-content-center align-items-center">
                            <svg width="32" height="32" viewBox="0 0 16 16" fill="none" >
                                <path d="M12.6665 7.33335H8.6665V3.33335C8.6665 3.15654 8.59627 2.98697 8.47124 2.86195C8.34622 2.73693 8.17665 2.66669 7.99984 2.66669C7.82303 2.66669 7.65346 2.73693 7.52843 2.86195C7.40341 2.98697 7.33317 3.15654 7.33317 3.33335V7.33335H3.33317C3.15636 7.33335 2.98679 7.40359 2.86177 7.52862C2.73674 7.65364 2.6665 7.82321 2.6665 8.00002C2.6665 8.17683 2.73674 8.3464 2.86177 8.47142C2.98679 8.59645 3.15636 8.66669 3.33317 8.66669H7.33317V12.6667C7.33317 12.8435 7.40341 13.0131 7.52843 13.1381C7.65346 13.2631 7.82303 13.3334 7.99984 13.3334C8.17665 13.3334 8.34622 13.2631 8.47124 13.1381C8.59627 13.0131 8.6665 12.8435 8.6665 12.6667V8.66669H12.6665C12.8433 8.66669 13.0129 8.59645 13.1379 8.47142C13.2629 8.3464 13.3332 8.17683 13.3332 8.00002C13.3332 7.82321 13.2629 7.65364 13.1379 7.52862C13.0129 7.40359 12.8433 7.33335 12.6665 7.33335Z" fill="#6C727F" />
                            </svg>

                            <p>Add new collection</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Collections;