import { connect } from 'mongoose'

const connectDB = (url: string) => {
  return connect(url)
    .then(() => console.log('DataBase is connected'))
    .catch((error) => console.error(error))
}

export = connectDB
