const express = require('express')

const router = express.Router();

const path = require('path')


router.get("/Service", (req, res, next) => {

    let coures = [
     "HTML",
     "CSS",
     "JAVASCRIPT",
     "REACTE"
  ];

    res.render('service', {
    
      docTitel: "pranavamuthu",
      coures:coures,

    }
    )

  
  });

module.exports=router