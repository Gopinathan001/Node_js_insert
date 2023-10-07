const {Router} = require('express');
const controler = require('../Controler/form.controler')
const router = Router();

router.get("/",controler.getData);
router.post("/details",controler.enterds);
router.get("/tableviews",controler.views);




module.exports=router;