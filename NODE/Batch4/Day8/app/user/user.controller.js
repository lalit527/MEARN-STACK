const userModel = require('./user.model');


const showProfile = (req, res) => {
  let db = userModel.getDb();
  console.log('database', db);
  db.collection('users').find({'user.userName': "Jo3n"}).toArray(function(err, docs) {
    console.log("Found the following records");
    console.log(docs);
    res.send(docs);
  });
}

const addUser = async (req, res) => {
  let user = req.body;
  let {userName, email, password} = user;
  let userData = `${email} ${password}`;
  console.log("1", userData);
  console.log(userModel);
  let db = userModel.getDb();
  console.log('database', db);
  let data = await db.collection('users').insertOne({
    user
  });
  console.log(data);
  res.send(data);
}

module.exports = {
  showProfile,
  addUser
};