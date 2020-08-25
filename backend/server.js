import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import config from './config';
import userRoute from './routes/userRoute';

const mongodbUrl = config.MONGODB_URL;

mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).catch((error) => console.log(error.reason));

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const app = express();

app.use(bodyParser.json());
app.use('/api/users', userRoute);
app.use('/uploads', express.static('uploads'));

//if (process.env.NODE_ENV === "production") {

  app.use(express.static(path.join(__dirname, '/../client/deploy')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/deploy", "build", "index.html"));
   });
//}
  app.listen(config.PORT, () => { console.log('Server started at port:5000'); });

