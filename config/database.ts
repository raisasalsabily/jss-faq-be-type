import mongoose from "mongoose"

const URI = process.env.MONGODB_URL

const dbConnect = async () => {
  return mongoose
    .connect(`${URI}`)
    .then(() => console.log(`connection to db established...`))
    .catch(() => console.log(`connection to db failed...`))
}

module.exports = dbConnect

// mongoose.connect(
//   `${URI}`,
//   {
//     autoIndex: true,
//     useFindAndModify: false,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   (err) => {
//     if (err) throw err
//     console.log("Koneksi MongoDB")
//   }
// )
