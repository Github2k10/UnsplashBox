const mongoose = require('mongoose');


const collections = require("../models/Collections");
const images = require("../models/Images");


const getCollectionsList = async (req, res) => {
  try{
    const collectionsList = await collections.find();

    return res.status(200).json(collectionsList);
  } catch(error){
    console.log("error => ", error);
    res.status(500).json({ message: 'Error fetching Collections list.', error });
  }
};


module.exports = { getCollectionsList };

// db.Collections.aggregate([
//     {
//       $lookup: {
//         from: "Images",
//         localField: "image_ids",
//         foreignField: "_id",
//         as: "images"
//       }
//     },
//     {
//       $project: {
//         _id: 1,
//         name: 1,
//         total_images: 1,
//         images: {
//           $slice: [
//             {
//               $map: {
//                 input: "$images",
//                 as: "image",
//                 in: "$$image.image_url"
//               }
//             },
//             3
//           ]
//         }
//       }
//     }
//   ]);
  