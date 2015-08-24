(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name anonGradApp.service:ngDom
   * @author Aaron Bazzone
   * @description
   * # Shortcuts to query the dom OR
   * # Convert HTML node to angular object
   * Service of the anonGradApp
   */

  angular
    .module('ngdom', [])
    .service('ngdom', query);

  function query() {
    return (function(query) {
      //If HTML node return angular object else returns a nodelist as an angular object matching the query 
      //Example: ngdom(someDomNode) or ngdom('#main .cool')
      //Compound expressions, separated by commas, are also acceptable
        if (query.nodeType) {
          return angular.element(query);
        }
        var element = document.querySelectorAll(query);
        
        if(element.length > 1)  {
          for(var i=0; i<element.length; i=i+1)  {
            element[i] = angular.element(element[i]);
          }
        }
        
        element = angular.element(element);
        
        return element;
    });
  }

})(); 