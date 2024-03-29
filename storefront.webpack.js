const path = require('path')
console.log(path.resolve(__dirname, 'template/js/custom-js/html/TheProduct.html'))
module.exports = () => ({
  resolve: {
    alias: {
      './html/TheProduct.html': path.resolve(__dirname, 'template/js/custom-js/html/TheProduct.html'),
      './html/PaymentOption.html': path.resolve(__dirname, 'template/js/custom-js/html/PaymentOption.html'),
      './js/TheProduct.js': path.resolve(__dirname, 'template/js/custom-js/js/TheProduct.js'),
      './js/PaymentOption.js': path.resolve(__dirname, 'template/js/custom-js/js/PaymentOption.js'),
      './js/APrices.js': path.resolve(__dirname, 'template/js/custom-js/js/APrices.js'),
      './html/APrices.html': path.resolve(__dirname, 'template/js/custom-js/html/APrices.html'),
/*       './js/PaymentMethods.js': path.resolve(__dirname, 'template/js/custom-js/js/PaymentMethods.js'),
      './html/PaymentMethods.html': path.resolve(__dirname, 'template/js/custom-js/html/PaymentMethods.html'), */
      './html/EcSummary.html': path.resolve(__dirname, 'template/js/custom-js/html/EcSummary.html')
/*       './js/Checkout.js': path.resolve(__dirname, 'template/js/views/js/Checkout.js'),
      './js/checkout.js': path.resolve(__dirname, 'template/js/store/modules/checkout.js') */
    }
  }
})