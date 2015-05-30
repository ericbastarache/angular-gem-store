(function() {
  var app = angular.module('gemStore', ['store-directives']);


  app.controller('StoreController', function() {
    this.products = gems;
  });

  
  app.controller("ReviewController", function(){

    this.review = {};

    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };

  });
    
  app.controller('StoreController', ['$http', function($http){
    var store = this;
    store.products = [];
    $http.get('angular-gem-store/store-products.json').success(function(data){
        store.products = data;
        
    });
  }]);


})();
