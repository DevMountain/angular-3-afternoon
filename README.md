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

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by opening `app/swag/swag.component.js` and create the skeleton of Angular component. The syntax for a component follows: `angular.module('APP_NAME_HERE').component('COMPONENT_NAME_HERE', {});`.

```js
angular.module('swagShop').component('swag', {

});
```

Inside the second argument's object we can specify the component's template HTML, controller name, and bindings. We can define a controller's template by using the `templateUrl` property. This should equal an absolute path to an HTML file. The template file for the swag component is kept in the same directory under the file name of `swag.template.html`.

```js
angular.module('swagShop').component('swag', {
  templateUrl: 'app/swag/swag.template.html'
});
```

We can then specify the component's controller name by using the `controllerAs` property. This will change how we communicate with the controller in the template HTML. By default the controller is defined as `$ctrl`, but it is good practice to give your controllers more specific names. In this case, we should call it `swagCtrl`.

```js
angular.module('swagShop').component('swag', {
  templateUrl: 'app/swag/swag.template.html',
  controllerAs: 'swagCtrl'
});
```

Lastly, we'll need to add some bindings so our template can make use of dynamic data. The swag component will recieve a swag object, an action ( this is just a function ), and an action label ( this is just a string ). Using the explanation of bindings in this step's summary, we'll end up with:

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

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by opening `app/swag/swag.template.html`. In this template, we'll want to update the commented out sections to use the dynamic data on `item`, `action`, and `actionLabel`. We can take a look inside `app/services/swag.service.js` to be certain what properties will be on `item`. `item` will always have the following properties:

```js
{
  id: string,
  title: string,
  color: string,
  size: string,
  price: number
}
```

Now that we know what properties are on `item`, the next thing to figure out is how we reference `item` inside the template HTML. Remember, in the previous step we set the controller name as `swagCtrl`. Therefore we can access any bindings on the controller by using `swagCtrl`. 

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
            ng-click="">
      {{ swagCtrl.actionLabel }}
    </button>
  </div>
</div>
```

The last thing we'll need to update is the `ng-click` of the button to use our dynamic action:

```html
<button class="swag__btn" 
        ng-click="swagCtrl.action()">
  {{ swagCtrl.actionLabel }}
</button>
```

Now that our template and component are ready to go, it's time to add a new `script tag` in the `index.html` file:

```html
<!--Our Custom Script Files-->
<script src="app/app.js"></script>
<script src="app/services/swag.service.js"></script>
<script src="app/services/cart.service.js"></script>
<script src="app/swag/swag.component.js"></script>
```

</details>

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

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by opening `app/list/list.component.js` and create an Angular component skeleton.

```js
angular.module('swagShop').component('list', {

});
```

Just like we did earlier, we'll need to link the template file and set the controller name as `listCtrl`.

```js
angular.module('swagShop').component('list', {
  templateUrl: 'app/list/list.template.html',
  controllerAs: 'listCtrl'
});
```

Unlike the swag component, this list component will need a controller function. We can create a controller function by using the `controller` property. Since this component will need to list out all the swag available, we'll need to inject the swag service into this controller. We will also need to inject `$state` into this controller so that we can create a method that routes to `details`.

```js
angular.module('swagShop').component('list', {
  templateUrl: 'app/list/list.template.html',
  controllerAs: 'listCtrl',

  controller: function( swagSrvc, $state ) {

  }
});
```

When dealing with components you can assign values to the controller that the template will then be able to make use of. We do this with the `this` keyword. Let's assign `swag` to the controller. `swag` should equal the swag array in the swag service.

```js
angular.module('swagShop').component('list', {
  templateUrl: 'app/list/list.template.html',
  controllerAs: 'listCtrl',

  controller: function( swagSrvc, $state ) {
    // Our template can now access the swag by using {{ listCtrl.swag }}
    this.swag = swagSrvc.swag;
  }
});
```

Next, let's assign a method called `goToDetails` that takes in an `id` parameter. This method should then call `$state.go` to send the user to the details route. If we take a look inside `app/app.js` we can see that the details route is expecting an `id`. When we build the details component, it will use this `id` to determine which swag object to display.

```js
angular.module('swagShop').component('list', {
  templateUrl: 'app/list/list.template.html',
  controllerAs: 'listCtrl',

  controller: function( swagSrvc, $state ) {
    this.swag = swagSrvc.swag;

    this.goToDetails = function (id){
      $state.go('details', { id: id });
    };
  }
});
```

</details>

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

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by opening `app/list/list.template.html`. The only thing we need to add to this template is the swag component. We'll also want to `ng-repeat` the component so that we can see all the swag available. Remember in step 1, we configured the component to have three bindings: `item` ( a swag object ), `action` ( a function ), and `actionLabel` ( a string ). Let's start by creating a skeleton of the `ng-repeat`.

```html
<swag ng-repeat=""
      item=""
      action=""
      action-label="">
</swag>
```

In the last step, we assigned the swag array from the swag service onto `swag`. Therefore our `ng-repeat` would look like:

```html
<swag ng-repeat="item in listCtrl.swag"
      item=""
      action=""
      action-label="">
</swag>
```

We can then simply put `item` into `item`.

```html
<swag ng-repeat="item in listCtrl.swag"
      item="item"
      action=""
      action-label="">
</swag>
```

In the last step, we assigned a method called `goToDetails`. This is our custom action for the swag component. We'll also want the `action-label` to be `details`.

```html
<swag ng-repeat="item in listCtrl.swag"
      item="item"
      action="listCtrl.goToDetails(item.id)"
      action-label="details">
</swag>
```

Now that our template is setup, all we need to do is add a new `script tag` in `index.html` for the list component.

```html
<!--Our Custom Script Files-->
<script src="app/app.js"></script>
<script src="app/services/swag.service.js"></script>
<script src="app/services/cart.service.js"></script>
<script src="app/swag/swag.component.js"></script>
<script src="app/list/list.component.js"></script>
```

</details>

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

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by opening `app/details/details.component.js` and create a skeleton of an Angular component.

```js
angular.module('swagShop').component('detailsComponent', {

});
```

Just like we've done in the previous steps, let's link the template file, set the controller name as `detailsCtrl`, and also create a controller function. This controller function should have the swag service, `$stateParams`, and the cart service injected into it. 

```js
angular.module('swagShop').component('detailsComponent', {
  templateUrl: 'app/details/details.template.html',
  controllerAs: 'detailsCtrl',
  
  controller: function( swagSrvc, $stateParams, cartSrvc ) {

  }
});
```

We need the swag service and `$stateParams` to determine which swag object to display. If we take a look at the router configuration ( app/app.js ) we can see that the details route has an `id` parameter. We can access this by using `$stateParams.id`. Using the `id`, we can find the `index` of the swag object and then assign the swag object onto `this.item`. 

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
  }
});
```

The last thing we'll need to add is a method that can add the swag object to the cart. This is why we injected the cart service. If we take a look inside the cart service we can see it has an `add` method. Let's assign our own method called `addToCart` to the controller. This method should have an `item` parameter and then call the `add` method on the cart service with `item` as an argument.

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

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by opening `app/details/details.template.html`. Remember that in the previous step, we assigned the swag object we need onto `this.item`. This means we can access that object by using `detailsCtrl.item`. We already know what properties are on a swag object so this part becomes pretty easy. We also need to update the `ng-click` to call our method `addToCart` with the `item` as an argument.

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

Then, just like we've done in the previous steps, we need to add a new `script tag` in `index.html`.

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

In this step, we'll build out the cart component. The cart component is responsible for displaying all swag that is currently in the cart or displaying that the cart is empty. It will also provide a user with the option to checkout, which in this case should empty the user's cart. This component will make use of the swag component to display the swag that is in the cart.

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

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by opening `app/cart/cart.component.js` and create a component skeleton.

```js
angular.module('swagShop').component('cart', {

});
```

Just like we've done in the previous steps, let's link the template file, set the controller name as `cartCtrl`, and also create a controller function. This controller function should have the cart service injected into it.

```js
angular.module('swagShop').component('cart', {
  templateUrl: 'app/cart/cart.template.html',
  controllerAs: 'cartCtrl',

  controller: function( cartSrvc ) {

  }
});
```

This component will be responbile for displaying and updating the cart. We'll want to provide our template access to the cart, the cart's total, and all of the available methods in the cart service. It might help if you have the cart service open ( `app/services/cart.service.js` ) to see the methods. Let's start by assigning `cart` to the controller. `cart` should equal the current cart array. We can get that value by calling the `currentCart` method in the cart service.

```js
angular.module('swagShop').component('cart', {
  templateUrl: 'app/cart/cart.template.html',
  controllerAs: 'cartCtrl',

  controller: function( cartSrvc ) {
    this.cart = cartSrvc.currentCart();
  }
});
```

The next thing we'll need is a way to calculate the total. Let's assign a method called `total` that returns the sum of the prices of the swag in the cart.

```js
angular.module('swagShop').component('cart', {
  templateUrl: 'app/cart/cart.template.html',
  controllerAs: 'cartCtrl',

  controller: function( cartSrvc ) {
    this.cart = cartSrvc.currentCart();

    this.total = function() {
      return this.cart.reduce((total, current ) => total + current.price, 0);
    };
  }
});
```

We'll then need a way for a user to checkout. When the `checkout` method is called on the service, it returns an empty cart. Knowing this we can create method on the controller that calls this method and sets its return value `cart`.

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
  }
});
```

The last thing we'll need is the dynamic action for when we `ng-repeat` over the swag component in the next step. We'll need a method that can remove the swag from the cart. If we take a look inside the cart service, the `remove` method is expecting an `index`. So we'll need to have a parameter to capture the `index`.

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

    this.removeItem = function(index){
      cartSrvc.remove(index);
    };
  }
});
```

</details>

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
    * This `ng-repeat` should also `track by` `$index`.
  * The action label should equal `'remove'` and remember to include the `$index` for the action's argument.
* Open `index.html`.
* Add a new `script` tag for the cart component.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by opening `app/cart/cart.template.html`. There are two empty `ng-if` statements in this template. The first `ng-if` is responsible for showing the `div` when there is at least one item in the cart. The second `ng-if` is responsible for showing the `div` when there is nothing in the cart. Remember that in the last step we assigned the cart to `cart`.

```html
<div ng-if="cartCtrl.cart.length > 0" class="cart__with-items">

</div>

<div ng-if="cartCtrl.cart.length === 0" class="cart__without-items">
  <span>Nothing in your cart</span>
</div>
```

The next thing we'll want to update is the total. Remember that the total is a function, so we'll need to invoke it to get the value.

```html
<div class="cart__top-right">
  <span class="cart__total">Total: ${{ cartCtrl.total() }}</span>
  <button class="cart__btn-checkout" ng-click="">checkout</button>
</div>
```

The last thing we'll want to add is an `ng-repeat` over the swag component. This will be just like how we've done it in the previous steps except we'll want to track the `ng-repeat` by `$index`. This will allow us to use `$index` as the argument for the `removeItem` method.

```html
<div class="cart__bottom">
  <swag
    ng-repeat="item in cartCtrl.cart track by $index"
    item="item"
    action="cartCtrl.removeItem($index)"
    action-label="remove">
  </swag>
</div>
```

Then, just like in the previous steps, we'll need to add the component as a new `script tag` in `index.html`.

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