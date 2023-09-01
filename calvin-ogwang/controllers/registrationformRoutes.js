const express = require('express');
const Registration = require('/controllers/Registration');
const router = express.Router();


router.get('/registrationform', (req, res) => {
    res.render('registrationform.pug');
});

router.post('/registrationform',  async (req, res) => {
    try{
    const Person = new Registration(req.body );
    console.log(req.body);
    await Person.save();
    console.log(req.body);
    res.redirect('/api/registrationform'); 
}catch(error){
    res.status(404).render('registrationform')
    console.log(error);
}



})
module.exports = router
