const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    baslik: {
      type: String,
      required: [true, "Baslik Giriniz"],
      unique: true,
    },
    aciklama: {
      type: String,
      required: [true, "AciklamaGiriniz"],
      unique: true,
    },
    detay: {
        type: String,
        required: [true, "AciklamaGiriniz"],
        unique: true,
      },
    resim: {
      type: String, // Resmi bir Buffer olarak tanımla
      required: [true, "Resim alanı gereklidir."]
    },
    baslangicTarihi: {
      type: String, // Resmi bir Buffer olarak tanımla
      required: [true, "baslangicTarihi alanı gereklidir."]
    },
    bitisTarihi: {
      type: String, // Resmi bir Buffer olarak tanımla
      required: [true, "bitisTarihi alanı gereklidir."]
    },
    ada: {
      type: String, // Resmi bir Buffer olarak tanımla
      required: [true, "ada alanı gereklidir."]
    },
    parsel: {
      type: String, // Resmi bir Buffer olarak tanımla
      required: [true, "parsel alanı gereklidir."]
    },
    konutTipi: {
      type: String, // Resmi bir Buffer olarak tanımla
      required: [true, "konutTipi alanı gereklidir."]
    },
    villaAdedi: {
      type: String, // Resmi bir Buffer olarak tanımla
      required: [true, "villaAdedi alanı gereklidir."]
    },
    kat: {
      type: String, // Resmi bir Buffer olarak tanımla
      required: [true, "kat alanı gereklidir."]
    },
    alan: {
      type: String, // Resmi bir Buffer olarak tanımla
      required: [true, "alan alanı gereklidir."]
    },
    ekstraDetaylar: [String],
    projeResimleri: [String],
    katGorselleri: [String]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Projects", projectSchema);