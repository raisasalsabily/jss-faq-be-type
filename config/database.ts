import mongoose, { ConnectOptions } from "mongoose"

const URI = process.env.MONGODB_URL
const uri =
  "mongodb+srv://admin-jss-faq:uDGTBcq9WBlraQiX@jss-faq.itqdswd.mongodb.net/jss-faq-db?retryWrites=true&w=majority"

const dbConnect = async () => {
  return mongoose
    .connect(uri)
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
