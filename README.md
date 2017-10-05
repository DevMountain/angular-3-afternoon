<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

In this project, we'll make use of Angular components and routing to complete a website that sells swag. The file structure has already been setup for you and should feel very familiar to the mini project. There are also two services that have been built out for you. One is the swag service, it holds all the data for swag that is available for purchase. The other service holds all the cart functionality. Take a minute to understand how the cart works before beginning the project.

In addition to the services, the Angular application has routing pre-built for you as well. This should be very similiar to the routing you've already practiced earlier in the course. The only difference here is in the router's configuration. When dealing with components you can actually provide the component's name in the router's configuration and it will automagically know which HTML to render.

It is imperative to feel comfortable with the existing code base before attempting this project. If you are having trouble, feel free to ask a fellow classmate or one of your mentors. 

Live Example: <a href="https://devmountain.github.io/angular-3-afternoon/#!/">Click Me!</a>

<img src="https://github.com/DevMountain/angular-3-afternoon/blob/solution/readme-assets/1.png" />

## Setup

* Run `npm i`.
* Run `npm run dev` to start the development server.

<img src="https://github.com/DevMountain/angular-3-afternoon/blob/solution/readme-assets/2.png" />

## Step 1

### Summary

In this step, we'll build out the swag component. The swag component is responsible for displaying information about swag, such as price, color, size, etc. The swag component will act as a re-usable component and will be used in both the list and cart component.

In the swag component, there is a button available that a user can click. That button's action and label will have to be dynamic. When on the list view, we want that button to say 'details' and take a user to the detailed view of that swag. When on the cart view, we want that button to say 'remove' and remove the swag from the cart. Remember the title we passed down in the mini project? You can do the same for functions. When binding a function in the controller you use the `&` symbol. The other binding you haven't seen yet is `<` which is used for `one-way` data binding. We'll use this `binding symbol` for when we bind `item` ( `item` will be the swag object ).

### Instructions

* Open `app/swag/swag.component.js`.
* Create the skeleton of an Angular component:
  * Use `swagShop` as the application name.
  * Use `swag` as the component name.
* Link the template into the component and set the component's controller as `swagCtrl`.
* Add bindings for the following:
  * A `<` binding for `item`. `item` will be the swag object.
  * A `&` binding for `action`. `action` will be the dynamic action that was explained in the summary.
  * A `@` binding for `actionLabel`. `actionLabel` will be the dynamic label that was explained in the summary.

### Solution

<details>

<summary> <code> app/swag/swap.component.js </code> </summary>

```js
angular.module('swagShop').component('swag', {
  templateUrl: 'app/swag/swag.template.html',
  controllerAs: 'swagCtrl',
  bindings: {
    item: '<',
    action: '&',
    actionLabel: '@'
  }
});
```

</details>

## Step 2

### Summary

In this step, we'll complete the template for the `swag.template.html` and link the swag component using a `script` tag in `index.html`.

### Instructions

* Open `app/services/swag.service.js` for a reference of what properties exist on a `swag object`.
* Open `app/swag/swag.template.html`.
* Update the commented out sections to use the correct property from a `swag object`.
  * Hint: remember we bound the swag object on the controller property called `item`.
* Update the button at the bottom of the template to use the `action` and `action label`.
  * Hint: remember we bound the `action` function and `action label` string in `action` and `actionLabel`.
* Open `index.html`.
* Add a new `script` tag for the `swag` component.

### Solution

<details>

<summary> <code> app/swag/swag.template.html </code> </summary>

```html
<div class="swag-list__container">
  <div class="swag-list__content">

    <div class="swag-list__content-top">
      <h4>{{ swagCtrl.item.title }}</h4>
      <span>{{ swagCtrl.item.size }}</span>
    </div>

    <div class="swag-list__content-bottom">
      <span>{{ swagCtrl.item.color }}</span>
      <span>${{ swagCtrl.item.price}}</span>
    </div>

    <button class="swag__btn" 
            ng-click="swagCtrl.action()" >
      {{swagCtrl.actionLabel}}
    </button>
  </div>
</div>
```

</details>

<details>

<summary> <code> index.html ( script section only ) </code> </summary>

```html
<!--Our Custom Script Files-->
<script src="app/app.js"></script>
<script src="app/services/swag.service.js"></script>
<script src="app/services/cart.service.js"></script>
<script src="app/swag/swag.component.js"></script>
```

</details>

## Step 3

### Summary

In this step, we'll build out the list component. The list component is responsible for displaying a list of swag that is available for purchase. In order to know which swag to list, we'll need to import the swag service into this component's controller.

### Instructions

* Open `app/app.js` for reference to the application's router configuration.
* Open `app/list/list.component.js`.
* Create a component skeleton:
  * Use `swagShop` as the application name.
  * Call the component `list`.
* Link the template into the component and set the component's controller as `listCtrl`.
* Create a component controller function:
  * This controller should have the swag service injected into it.
  * This controller should have `$state` injected into it.
  * Assign an array called `swag` that equals the `swag` array in the swag service.
  * Assign a method called `goToDetails`:
    * This method should have an `id` parameter.
    * This method should call `$state.go` for the `details` route and use `id` for the route's `id` parameter.

`goToDetails` will act as the dynamic action that will be passed into the `swag` component. We'll see this happen in the next step.

### Solution

<details>

<summary> <code> app/list/list.component.js </code> </summary>

```js
angular.module('swagShop').component('list', {
  templateUrl: 'app/list/list.template.html',
  controllerAs: 'listCtrl',

  controller: function( swagSrvc, $state ) {
    this.swag = swagSrvc.swag;

    this.goToDetails = function (id){
      $state.go('details', {id:id});
    };
  }
});
```

</details>

## Step 4

### Summary

In this step, we'll complete the template for the `list.template.html` and link the list component using a `script` tag in `index.html`.

### Instructions

* Open `app/list/list.template.html`.
* Locate the commented out section:
  * Render the swag component and be sure to include all its necessary bindings.
  * The swag component should use an `ng-repeat` for every swag object in `swag` on the controller.
  * The action label should equal `'details'` and remember to include the swag's `id` for the `action`.
* Open `index.html`.
* Add a new `script` tag for the list component.

### Solution

<details>

<summary> <code> app/list/list.template.html </code> </summary>

```html
<div class="list__parent">
  <div class="list__child">
    <span class="list__header">Browse Swag</span>
    
    <div class="list__swag-container">
      <swag ng-repeat="item in listCtrl.swag"
            item="item"
            action="listCtrl.goToDetails(item.id)"
            action-label="details">
      </swag>
    </div>
    
  </div>
</div>
```

</details>

<details>

<summary> <code> index.html ( script section only ) </code> </summary>

```html
<!--Our Custom Script Files-->
<script src="app/app.js"></script>
<script src="app/services/swag.service.js"></script>
<script src="app/services/cart.service.js"></script>
<script src="app/swag/swag.component.js"></script>
<script src="app/list/list.component.js"></script>
```

</details>

<br />

<img src="https://github.com/DevMountain/angular-3-afternoon/blob/solution/readme-assets/1g.gif" />

## Step 5

### Summary

In this step, we'll create the details component. The details component is responsible for displaying all information about one piece of swag and also providing an option to add the swag to the user's cart.

Based on the router's configuration the details route is loaded with an `id` in the URL. We can use this `id` to scan the `swag` array in the swag service and find the swag object we need. We can then bind that swag object onto the controller so we can display its properties in the template.

### Instructions

* Open `app/details/details.component.js`.
* Create a skeleton of an Angular component.
  * Use `swagShop` as the application name.
  * Use `detailsComponent` as the component name.
    * If you use `details` as the name, the component will render as a `details` element.
* Link the template into the component and set the component's controller as `detailsCtrl`.
* Create a controller function:
  * This function should have the swag service, the cart service, and `$stateParams` injected into it.
  * Assign an array called `swag` that equals the `swag` array in the swag service.
  * Assign an object called `item` that equals the `swag` object with the same `id` as the `id` in the URL.
  * Assign a method called `addToCart`:
    * This method should have an `item` parameter.
    * This method should call the `add` method on the cart service and pass in `item` as an argument.

### Solution

<details>

<summary> <code> app/details/details.component.js </code> </summary>

```js
angular.module('swagShop').component('detailsComponent', {
  templateUrl: 'app/details/details.template.html',
  controllerAs: 'detailsCtrl',
  
  controller: function( swagSrvc, $stateParams, cartSrvc ) {
    this.swag = swagSrvc.swag;

    if ( $stateParams.id ) {
      let itemIndex = this.swag.findIndex( item => item.id === $stateParams.id );
      this.item = this.swag[ itemIndex ];
    }

    this.addToCart = function( item ) {
      cartSrvc.add( item );
    };
  }
});
```

</details>

## Step 6

### Summary

In this step, we'll complete the template for the `details.template.html` and link the details component using a `script` tag in `index.html`.

We won't be able to visually test that `addToCart` is working correctly. However, if you want to test it by using the `console` you can add a `console.log( cartSrvc.currentCart() );` at the end of the method.

### Instructions

* Open `app/details/details.template.html`.
* Update the commented out sections to use the correct property from a `swag object`.
  * Hint: remember we bound the swag object on the controller property called `item`.
* Update the button at the bottom of the template to use the `addToCart` method.
  * Hint: What properties are on the `item` object?
* Open `index.html`.
* Add a new `script` tag for the `details` component.

### Solution

<details>

<summary> <code> app/details/details.template.html </code> </summary>

```html
<div class="detailed__parent">
  <div class="detailed__child">
    <h4 class="detailed__header">Details</h4>
    <div class="detailed__content">
      <div class="detailed__content-header">
        <h4>{{ detailsCtrl.item.title }}</h4>
        <span>${{ detailsCtrl.item.price }}</span>
      </div>

      <div class="detailed__content-middle">
        <span>{{ detailsCtrl.item.size }}, {{ detailsCtrl.item.color }}</span>
      </div>

      <div class="detailed__content-footer">
        <button ng-click="detailsCtrl.addToCart( detailsCtrl.item )">add to cart</button>
      </div>
    </div>
  </div>
</div>
```

</details>

<details>

<summary> <code> index.html ( script section only ) </code> </summary>

```html
<!--Our Custom Script Files-->
<script src="app/app.js"></script>
<script src="app/services/swag.service.js"></script>
<script src="app/services/cart.service.js"></script>
<script src="app/swag/swag.component.js"></script>
<script src="app/list/list.component.js"></script>
<script src="app/details/details.component.js"></script>
```

</details>

<br />

<img src="https://github.com/DevMountain/angular-3-afternoon/blob/solution/readme-assets/2g.gif" />

## Step 7

### Summary

In this step, we'll build out the cart component. The cart component is responsible for displaying all swag that is currently in the cart or displaying that the caert is empty. It will also provide a user with the option to checkout, which in this case should empty the user's cart. This component will make use of the swag component to display the swag that is in the cart.

Remember that the swag component's action and action label are dynamic. On the cart view, we want the action to remove the swag from the cart and the label to be `'remove'`.

### Instructions

* Open `app/cart/cart.component.js`.
* Create a skeleton of an Angular component.
  * Use `swagShop` as the application name.
  * Use `cart` as the component name.
* Link the template into the component and set the component's controller as `cartCtrl`.
* Create a controller function:
  * This function should have the cart service injected into it.
  * Assign an array called `cart` that equals the return of the `currentCart` method on the cart service.
  * Assign a method called `total`:
    * This method should calculate the total of all the swag in the cart and return the sum.
  * Assign a method called `checkout`:
    * This method should set the value of `cart` equal to the return of the `checkout` method on the cart service.
  * Assign a method called `removeItem`:
    * This method should have an `index` parameter ( the index of the swag in the cart array ).
    * This method should call the `remove` method on the cart service with `index` as an argument.

`removeItem` will act as the dynamic action that will be passed into the swag component. We'll see this happen in the next step.

### Solution

<details>

<summary> <code> app/cart/cart.component.js </code> </summary>

```js
angular.module('swagShop').component('cart', {
  templateUrl: 'app/cart/cart.template.html',
  controllerAs: 'cartCtrl',

  controller: function( cartSrvc ) {
    this.cart = cartSrvc.currentCart();

    this.total = function() {
      return this.cart.reduce((total, current ) => total + current.price, 0);
    };

    this.checkout = function() {
      this.cart = cartSrvc.checkout();
    };

    this.removeItem = function(index) {
      cartSrvc.remove(index);
    };
  }
});
```

</details>

## Step 8

### Summary

In this step, we'll complete the template for the `cart.template.html` and link the cart component using a `script` tag in `index.html`.

### Instructions

* Open `app/cart/cart.template.html`.
* Update the `Total Here` comment to be the return of the `total` method.
* Locate the two empty `ng-if` statements:
  * The first `ng-if` should display the `div` if there is something in the cart.
  * The second `ng-if` should display the `div` if there is nothing in the cart.
* Locate the `Swag Here` comment:
  * Render the swag component and be sure to include all its necessary bindings.
  * The swag component should use an `ng-repeat` for every swag object in the cart.
  * The action label should equal `'remove'` and remember to include the `$index` for the action.
* Open `index.html`.
* Add a new `script` tag for the cart component

### Solution

<details>

<summary> <code> app/cart/cart.template.html </code> </summary>

```js
<div class="cart__parent">
  <div class="cart__child">
    <div ng-if="cartCtrl.cart.length > 0" class="cart__with-items">
      <div class="cart__top">
        <h4 class="cart__header">Cart</h4>
        <div class="cart__top-right">
          <span class="cart__total">Total: ${{ cartCtrl.total() }}</span>
          <button class="cart__btn-checkout" ng-click="cartCtrl.checkout()">checkout</button>
        </div>
      </div>

      <div class="cart__bottom">
        <swag
          ng-repeat="item in cartCtrl.cart track by $index"
          item="item"
          action="cartCtrl.removeItem($index)"
          action-label="remove">
        </swag>
      </div>
    </div>

    <div ng-if="cartCtrl.cart.length === 0" class="cart__without-items">
      <span>Nothing in your cart</span>
    </div>
  </div>
</div>
```

</details>

<details>

<summary> <code> index.html ( script section only ) </code> </summary>

```html
<!--Our Custom Script Files-->
<script src="app/app.js"></script>
<script src="app/services/swag.service.js"></script>
<script src="app/services/cart.service.js"></script>
<script src="app/swag/swag.component.js"></script>
<script src="app/list/list.component.js"></script>
<script src="app/details/details.component.js"></script>
<script src="app/cart/cart.component.js"></script>
```

</details>

<br />

<img src="https://github.com/DevMountain/angular-3-afternoon/blob/solution/readme-assets/3g.gif" />

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>