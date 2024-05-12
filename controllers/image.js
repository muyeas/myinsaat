const Image = require("../models/Images");


const getImages = async (req, res, next) => {
  try {
    const images = await Image.find();

    res.status(200).json({
      success: true,
      images,
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};


const updateImage = async (req, res, next) => {
  const { id } = req.params;
  try {
    const image = await Image.findById(id);

    if (!image) {
      res.status(404);
      return next(new Error("Proje not found"));
    }

    console.log('image: ', image)

    const updatedImage = await Image.findByIdAndUpdate(
      id,
      {
        $set:{ imageUrl: req.body.imageUrl },
      },
      {
        new: true,
      }
    );

    res.status(200).json({
      success: true,
      updatedImage,
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};
const createImage = async (req, res, next) => {
  try {
    const { sayfa, sayi, imageUrl} = req.body;

    
    const yeniProje = new Image({
      sayfa: sayfa,
      sayi: sayi,
      imageUrl: imageUrl
    });

    console.log(req.body)


    const images = await Image.create(yeniProje);

    res.status(200).json({
      success: true,
      images,
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
}



module.exports = {
    updateImage,
    getImages,
    createImage
};