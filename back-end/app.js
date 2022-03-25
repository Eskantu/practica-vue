//#region Imports
import Express from "express";
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import fileUpload from 'express-fileupload'
import history from 'connect-history-api-fallback'
import mongose from 'mongoose'

//#endregion

//#region Configurations
const CONNECTION_URL = "mongodb+srv://node:bhu4TqCBwnW5tHjP@cluster0.ltn1g.mongodb.net/api_Node?retryWrites=true&w=majority";
var app = Express();
app.use(fileUpload({
  createParentPath: true
}));
app.use(morgan('tiny'))
app.use(cors())
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))

app.use(Express.static(path.join(__dirname, 'public')))
app.use('/api', require('./routes/Controllers/MainController'))
app.use(history())
app.set('puerto', process.env.PORT || 5001)
app.listen(app.get('puerto'));
mongose.connect(CONNECTION_URL);
mongose.connection.on('connected', () => console.log('Connected to ', app.get('puerto')));
mongose.connection.on('error', () => console.log('Connection failed with - ', err));
//#endregion

