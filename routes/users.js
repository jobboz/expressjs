 import express from 'express';
const router = express.Router();
router.use(logger);


router.get('/', (req, res) => {
   console.log(req.query.name)
   res.send('user list')
})

router.get('/new', (req, res) => {
   res.render('users/new')
    
})

router.post('/', (req, res) => {
    const isValid = true;
    if(isValid) {
        users.push( {firstName : req.body.firstName})
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log('Error')
        // passing d value
        res.render('users/new', {firstName: req.body.firstName })
    }
       
 })

 router.route("/:id")
 .get((req, res) => {
    res.send ( `GET USER ID ${req.params.id}`)   
    console.log(req.user)
}).put((req, res) => {
    res.send ( `UPDATE USER ID ${req.params.id}`)   
}).delete((req, res) => {
    res.send ( `DELETE USER ID ${req.params.id}`)   
})

const users = [{names:'joe'}, {names:'emmanuel'}]
router.param('id', (req, res, next, id) =>  {
     req.user = users[id]
       next();

})

function logger  (req, res, next) {
    console.log(req.originalUrl)
       next()
}





 export default router