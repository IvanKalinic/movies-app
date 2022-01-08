const router = require("express").Router();
const User = require("../models/User");

router.post("/save", async (req, res) => {
    let user = req.body.user;
    let email = user.data.email;
    let movies = req.body.movies;
    let directors = req.body.directors;
    let actors = req.body.actors;
    let genres = req.body.genres;
    let Obj = { movies: movies,
                directors : directors,
                actors : actors,
                genres: genres,
                };
    let ObjJSON = JSON.stringify(Obj)
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    try {
        const _user = {email : email};
        let findUser = await User.findOne(_user);
        await User.updateOne(_user, {preferences : ObjJSON,
                                    prefBool: true});
        await findUser.save();
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
    
  });
  
  module.exports = router;
  