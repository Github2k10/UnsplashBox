const mongoose = require('mongoose');


const collections = require("../models/Collections");
const images = require("../models/Images");


const getCollectionsList = async (req, res) => {
  try{
    const collectionsList = await collections.aggregate([
      {
        $lookup: {
          from: "images",
          localField: "image_ids",
          foreignField: "_id",
          as: "images",
        },
      },
      {
        $project: {
          _id: 1,
          name: 1,
          total_images: 1,
          images: {
            $slice: [
              {
                $map: {
                  input: "$images",
                  as: "image",
                  in: "$$image.image_url",
                },
              },
              3,
            ],
          },
        },
      },
    ]);

    let response = {
      error: false,
      data: collectionsList,
      message: "Collections list fetched successfully.",
    };

    return res.status(200).json(response);
  } catch(error){
    console.log("error => ", error);
    res.status(500).json({ message: 'Error fetching Collections list.', error });
  }
};

const addNewCollections = async (req, res) => {
  try{
    const { collection_name } = req.body;
    let newCollection = new collections({ name: collection_name, image_ids: [], total_images: 0 });
    await newCollection.save();

    let response = {
      error: false,
      data: newCollection,
      message: "New Collections added successfully.",
    };

    return res.status(200).json(response);
  } catch(error){
    console.log("error => ", error)
    res.status(500).json({ message: 'Error adding new Collections.', error });
  }
};


module.exports = { getCollectionsList, addNewCollections };