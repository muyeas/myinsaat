const mongoose = require("mongoose");

const textSchema = new mongoose.Schema(
  {
    sayfa: {
      type: String,
      required: [true, "Baslik Giriniz"],
    },
    sayi: {
      type: String,
      required: [true, "Aciklama1Giriniz"],
    },
    text: {
        type: String,
        required: [true, "AciklamaGiriniz"],
      },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Texts", textSchema);