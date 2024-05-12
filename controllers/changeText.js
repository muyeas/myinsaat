const Text = require("../models/Text");


const getTexts = async (req, res, next) => {
  try {
    const texts = await Text.find();

    res.status(200).json({
      success: true,
      texts,
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};


const updateText = async (req, res, next) => {
  console.log(req)
  const { id } = req.params;
  try {
    const text = await Text.findById(id);

    if (!text) {
      res.status(404);
      return next(new Error("Proje not found"));
    }

    console.log("BURADAA")

    const updatedText = await Text.findByIdAndUpdate(
      id,
      {
        $set:{ text: req.body.text },
      },
      {
        new: true,
      }
    );

    res.status(200).json({
      success: true,
      updatedText,
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};
const createText = async (req, res, next) => {
  try {
    const { sayfa, sayi, text} = req.body;

    
    const yeniProje = new Text({
      sayfa: sayfa,
      sayi: sayi,
      text: text
    });

    console.log(req.body)


    const texts = await Text.create(yeniProje);

    res.status(200).json({
      success: true,
      texts,
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
}



module.exports = {
    updateText,
    getTexts,
    createText
};