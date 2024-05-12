const Project = require("../models/Projects");

const createProject = async (req, res, next) => {
  try {
    const { baslik, aciklama, detay, resim, baslangicTarihi, bitisTarihi, ada,parsel,konutTipi,villaAdedi,kat,alan,ekstraDetaylar, projeResimleri, katResimleri} = req.body;

    console.log(req.body)
    
    const yeniProje = new Project({
      baslik: baslik,
      aciklama: aciklama,
      detay: detay,
      resim: resim,
      baslangicTarihi:baslangicTarihi,
      bitisTarihi:bitisTarihi,
      ada:ada,
      parsel:parsel,
      konutTipi:konutTipi,
      villaAdedi:villaAdedi,
      kat:kat,
      alan:alan,
      ekstraDetaylar:ekstraDetaylar,
      projeResimleri:projeResimleri,
      katGorselleri: katResimleri
    });

    if (!baslik || !aciklama || !detay || !resim  ) {
      res.status(400);
      return next(new Error("Eksik Bilgiler Var"));
    }

    // check if user already exists
    const isProjectExists = await Project.findOne({ baslik });

    if (isProjectExists) {
      res.status(404);
      return next(new Error("Project already exists"));
    }

    const proje = await Project.create(yeniProje);

    res.status(200).json({
      success: true,
      proje,
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
}

const getProjects = async (req, res, next) => {
  try {
    const projeler = await Project.find();

    res.status(200).json({
      success: true,
      projeler,
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const getProject = async (req, res, next) => {
  const { id } = req.params;
  try {
    const proje = await Project.findById(id);

    if (!proje) {
      res.status(404);
      return next(new Error("Proje not found"));
    }

    res.status(200).json({
      success: true,
      proje,
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const updateProject = async (req, res, next) => {
  const { id } = req.params;
  try {
    const proje = await Project.findById(id);

    if (!proje) {
      res.status(404);
      return next(new Error("Proje not found"));
    }

    const updatedProject = await Project.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );

    res.status(200).json({
      success: true,
      updatedProject,
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const deleteProject = async (req, res, next) => {
  const { id } = req.params;
  try {
    const proje = await Project.findById(id);

    if (!proje) {
      res.status(404);
      return next(new Error("User not found"));
    }

    await Project.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Project has been deleted.",
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

module.exports = {
    createProject,
    updateProject,
    deleteProject,
    getProject,
    getProjects
};