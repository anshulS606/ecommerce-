import express from 'express'
import cors from 'cors' // cross-origin resource sharing
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'


// App Config
const app = express()
const port = process.env.PORT || 4000;
connectDB()
connectCloudinary()


// Middlewares
app.use(express.json()) // what ever is get that is passed using json
app.use(cors()) // by using this we can excess the backend from any ip

// api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)

app.get('/', (req,res) => {
    res.send("API Working")
})

app.listen(port,()=> console.log('Server started on PORT : '+ port))

// Now we create mongoose model using that we can store the data in the database