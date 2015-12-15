# Think in components
Everything should be a component. Even pages.

![Components](http://busypeoples.github.io/img/component_example.png)

[Thinking in components](http://busypeoples.github.io/post/thinking-in-components-angular-js/)
[Thinking in react](http://facebook.github.io/react/docs/thinking-in-react.html)
[Smart and dumb](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.42mahx8i0)

# $scope is only for events and watchers
Everything else should be passed to view via the `controller as` syntax.

# $rootScope never dies
So you need to remove listeners from it manually:
```javascript
var unbind = $rootScope.$on('customEvent', vm.callback);
$scope.$on('$destroy', unbind);
```

# Use a lot of getters
[angular.extend](http://moduscreate.com/angularjs-tricks-with-angular-extend/)

# File structure

[one](https://scotch.io/tutorials/angularjs-best-practices-directory-structure)
[two](http://www.johnpapa.net/angular-growth-structure/)

# Correct directive syntax

```javascript
app.directive('goodie', function () {
  return {
    // no accidental access to parent
    scope: {},

    // everything bound to the controller
    bindToController: {
      someObject: '=',
      someString: '@',
      someExpr: '&'
    },
    controller: GoodieCtrl,
    controllerAs: 'ctrl'
  };
});

function GoodieCtrl(deps) {
    // ...
}
// ...

```
[bindToController](http://blog.thoughtram.io/angularjs/2015/01/02/exploring-angular-1.3-bindToController.html)

# ...or use component syntax

The above becomes:
```javascript
app.component('goodie', {
  return {
    // everything bound to the controller
    bindings: {
      someObject: '=',
      someString: '@',
      someExpr: '&'
    },
    controller: GoodieCtrl,
    controllerAs: 'ctrl'
  };
});
// ...

```

[angular.component](http://toddmotto.com/exploring-the-angular-1-5-component-method/)

# .hint

Make sure you use linters and code quality tools.

[ng-hint](http://blog.thoughtram.io/angularjs/2014/11/06/exploring-angular-1.3-angular-hint.html)


# Stuff to read

* [Scalable angular](https://medium.com/@bluepnume/sane-scalable-angular-apps-are-tricky-but-not-impossible-lessons-learned-from-paypal-checkout-c5320558d4ef)
* [Best Practices](https://www.outlearn.com/learn/vkarpov15/ng-best-practices)
