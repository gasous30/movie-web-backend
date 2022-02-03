const router = require("express").Router();
const verify = require("./verifyToken");
const User = require("../model/user");
const axios = require("axios");

const getBooksFromListID = async (list) => {
  const tempBook = [];
  for (const id of list) {
    await axios
      .get(`http://www.omdbapi.com/?apikey=1bee8ffd&i=${id}`)
      .then((res) => tempBook.push(res.data))
      .catch((err) => console.log(err));
  }
  return tempBook;
};

router.get("/get", verify, async (req, res) => {
  const data_user = await User.findOne({ _id: req.user._id });
  const tempBook = await getBooksFromListID(data_user.books);
  res.send(tempBook);
});

router.patch("/add", verify, async (req, res) => {
  const data_user = await User.findOne({ _id: req.user._id });
  res.data_user = data_user;
  if (req.body.books != null) {
    const tempList = [...res.data_user.books, ...req.body.books];
    const uniqList = [...new Set(tempList)];
    res.data_user.books = uniqList;
  }
  try {
    const updatedUser = await res.data_user.save();
    res.json(updatedUser.books);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch("/delete/:id", verify, async (req, res) => {
  const data_user = await User.findOne({ _id: req.user._id });
  res.data_user = data_user;
  const index = res.data_user.books.indexOf(req.params.id);
  if (index !== -1) {
    res.data_user.books.splice(index, 1);
  }
  try {
    const updatedUser = await res.data_user.save();
    res.json(updatedUser.books);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
