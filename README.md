# ng-dom
An Angular service for querying the DOM.

Here's a simple Angular service module for querying the DOM.<br>
No more including jQuery just for DOM lookups! Who want's that?<br>
No more JavaScript queries like, document.getElementsByTagName('section')...yuck!

## Usage

Specify the ngdom service as a dependency of your application:

```js
var app = angular.module('digMyApp', ['ngdom']);
```

Next, inject the modal service into any controller, service or directive where you need it.<br>
*But we only manipulate the DOM in directives right? ;)

```js
app.controller('digMyController', function($scope, $location, ngdom) {
  var el = ngdom('.buttonYo').on('click', function() {
    $location.path('/someHellaCoolView');
  });
})
```

Ngdom can be used for single, multiple and compound lookups.<br>
All results are returned as Angular element objects. <br>
Queries that result in more than one result returns an array of Angular elements.<br>
Also, you can pass in a DOM node as a parameter and it will return an object.<br>
This is basically shorthand for - angular.elemnt(some DOM node).

If no results are found then an empty array will be returned. 
To test for no results, do something like this: if (ngDom('.myClassAintHere').length !== 0) 

## Examples

Returns one element:<br>
```js
var oneEl = ngdom('#oneSpecialDiv');
oneEl.css('fontSize','20px');
```
Returns multiple elements:<br>
```js
var allEls = ngdom('section');
allElls[3].remove();
```
Convert a dom Node into an Angular object:
```js
var myDivNode = document.getElementById('#oneSpecialDiv');
var myDivObj = ngdom(myDivNode); 
```

At this time the jQuery option to make a query in a specific scope is not available with ngdom.<br>
For example, $('.myDiv',$('myParentDiv'))<br>
That will be a future enhancement because it is a useful feature and we like that. Yeah we do! :)<br>




