 import express from 'express';
const app = express()
const port = process.env.PORT || 5000
import userRouter from './routes/users';

 const path = '/';

 
app.set('view engine', 'ejs')
app.use(express.urlencoded({   extended : true  })) //alow the use of req.body to perfoem an action
app.use('/users', userRouter)
app.use(express.static("public"))
app.use(express.json())


// app.get('/', (req, res) => {
//     res.render('index', {text:'world'})

// })



app.listen(port , (err) => {
    if(err) {
        console.log('err')
    }
    console.log(`listening on port ${port}`)
} );