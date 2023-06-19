const mongoose = require('mongoose')
const databaseUrl =
  process.env.DATABASE_URL || 'mongodb://localhost/argentBankDB'

module.exports = async () => {
  try {
    const connex = await mongoose.connect(databaseUrl, { useNewUrlParser: true })
    console.log('Database successfully connected',connex.connection)
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}
