const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  try {
    const conn = mongoose.connect("mongodb+srv://ayeshafqat6:PeQZ5RlslulfEHUf@ecommerce-website.qxltx.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce-website");
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("DAtabase error");
  }
};
module.exports = dbConnect;
