const express = require("express");
const Url = require("../models/Url");

const router = express.Router();

// Get /:code (Redirection vers lien Original)
router.get("/:code", async (req, res) => {
  try {
    const url = await Url.findOne({ urlCode: req.params.code });
    if (url) {
      return res.redirect(url.longUrl);
    } else {
      res.status(404).json({ msg: "No URL Found" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Erreur du Serveur" });
  }
});

module.exports = router;
