const express = require('express');
const { getProducts, newProduct, getSingleProduct, updateProduct, deleteProduct, createReview, getReviews, deleteReview } = require('../controllers/productControllers');
const router = express.Router();
const path = require('path')
const {isAuthenticatedUser, authorizeRoles} =require('../middlewares/authenticate')

// router.route('./products').get(getProducts);
router.route('/products').get(getProducts);
router.route('/product/:id').get(getSingleProduct)
                            .put(updateProduct)
                            .delete(deleteProduct);
 router.route('/review').put(isAuthenticatedUser, createReview)   
                        .delete(deleteReview)                         

 router.route('/reviews').get(getReviews)                         




//Admin routes
router.route('admin/product/new').post(isAuthenticatedUser,authorizeRoles('admin'), newProduct);

// router.route('/admin/product/new').post(isAuthenticatedUser, authorizeRoles('admin'), upload.array('images'), newProduct);
// router.route('/admin/products').get(isAuthenticatedUser, authorizeRoles('admin'), getAdminProducts);
// router.route('/admin/product/:id').delete(isAuthenticatedUser, authorizeRoles('admin'), deleteProduct);
// router.route('/admin/product/:id').put(isAuthenticatedUser, authorizeRoles('admin'),upload.array('images'), updateProduct);
// router.route('/admin/reviews').get(isAuthenticatedUser, authorizeRoles('admin'),getReviews)
// router.route('/admin/review').delete(isAuthenticatedUser, authorizeRoles('admin'),deleteReview)
module.exports = router;


