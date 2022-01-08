const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      // required: true,
      default: "",
    },
    password: {
      type: String,
      default: "",
    },
    profilePicture: {
      type: String,
      default: "",
    },
    prefBool: {
      type: Boolean,
      default: false,
    },
    preferences: {
      type: Object,
      defualt: undefined
    }
  },
  { timestamps: true }
);

UserSchema.plugin(findOrCreate);

const User = mongoose.model("User", UserSchema);

module.exports = User;
