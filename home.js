const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res, next) => {
  let coures = ["HTML", "CSS", "JAVASCRIPT", "REACTE"];
  let name = "Cours :-";

  res.render("index", {
    docTitel: "pranavamuthu",
    coures: coures,
    name,
    pagehome:true,
  });
});

module.exports = router;
