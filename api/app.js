import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import createError from 'http-errors'
import path from 'path'
import morgan from 'morgan';
import cookieParser from 'cookie-parser'
import logger from 'morgan'

import indexRouter from './routes/index.js'
import connectDB from './config/datababse.js'

dotenv.config();
connectDB();

const app = express()

const port = process.env.PORT || 6432;
// view engine setup
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(
  cors({
    origin: ["*"],
    optionsSuccessStatus: 200,
    credentials: true,
  }),
)

if (process.env.NODE_ENV === 'production') {
  app.use(morgan('combined', { stream: accessLogStream }))
} else {
  app.use(morgan('dev'))
}

app.use('/', indexRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});