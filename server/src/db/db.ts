import mongoose from 'mongoose'
import config from '../config'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function db() {
  try {
    const { connection } = await mongoose.connect(config.db_uri!)
    // eslint-disable-next-line no-console
    console.log(`MongoDB connected ${connection.host}`)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
    process.exit(1)
  }
}

export default db
