const productModel = require('./product.model');


const showAllProducts = (req, res) => {
  productModel.find({}).then(result => {
    console.log(result);
    res.render('products/index', {products: result});
  })
  .catch(err => {
    res.send(err);
  });
}

const addProduct = async (req, res) => {
  let params = req.body;
  let {name, category, price} = params;
  let product = new productModel({name, category, price});
  product.save()
      .then(result => {
        res.redirect('/api/v1/products');
      })
      .catch(err => {
        console.log(err);
        res.send(err);
      });
}

const getAddProduct = async (req, res) => {
  res.render('products/add');
}

const showUserDetail = (req, res) => {
  let id = req.params['id'];
  userModel.findOne({ '_id': id }).then(result => {
    console.log(result);
    res.render('users/user', {user: result});
  })
  .catch(err => {
    res.send(err);
  });
}

const updateUserDetail = (req, res) => {
  let id = req.params['id'];
  let body = req.body;
  userModel.findOneAndUpdate({ '_id': id }, { $set: { body } }).then(result => {
    console.log(result);
    res.redirect('/api/v1/users');
  })
  .catch(err => {
    res.send(err);
  });
}

module.exports = {
  showAllProducts,
  addProduct,
  showUserDetail,
  updateUserDetail,
  getAddProduct
};