(function() {
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller("ReviewController", function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  app.directive('productTitle', function(){
    return {
      restrict: 'A',
      templateUrl: 'product-title.html'
    };
  });

  app.directive('productPanels', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-panels.html',
      controller:function(){
        this.tab = 1;

        this.selectTab = function(setTab) {
          this.tab = setTab;
        };
        this.isSelected = function(checkTab) {
          return this.tab === checkTab;
        };
      },
      controllerAs: 'panels'
    };
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'Description of dodecahedron here.',
      canPurchase: true,
      soldOut: false,
      images: [
      {
        full: 'dodecahedron-01-full.jpg',
        thumb: 'dodecahedron-01-thumb.jpg'
      },
      {
        full: "dodecahedron-02-full.jpg",
        thumb: 'dodecahedron-02-thumb.jpg'
      }],
      reviews: [
        {
          stars: 5,
          body: "I love this product!",
          author: "joe@thomas.com"
        },
        {
          stars: 1,
          body: "This product sucks",
          author: "tim@hater.com"
        }],
    },
    {
      name: "Pentagonal Gem",
      price: 5.95,
      description: "Description of pentagonal here.",
      canPurchase: false,
      soldOut: false,
      images: [
      {
        full: "dodecahedron-02-full.jpg",
        thumb: 'dodecahedron-02-thumb.jpg'
      }],
      reviews: [
        {
          stars: 4,
          body: "Awesome product!",
          author: "bob@jones.com"
        },
        {
          stars: 3,
          body: "Well, it was okay!",
          author: "polly@undecided.com"
        },
        {
          stars: 2,
          body: "Nope nope nope!",
          author: "rick@hater.com"
        }],
    }
  ];
})();
