# Performance
[Debug mode](http://blog.thoughtram.io/angularjs/2014/12/22/exploring-angular-1.3-disabling-debug-info.html)


## DOM is way less performant than JS

[Chrome DevTools timeline](https://developer.chrome.com/devtools/docs/timeline)

## Keep the number of watchers in mind

[One-time bindings](http://blog.thoughtram.io/angularjs/2014/10/14/exploring-angular-1.3-one-time-bindings.html)

##$ Replace $watch with getters

[Code examples source](http://csharperimage.jeremylikness.com/2014/11/the-top-5-mistakes-angularjs-developers_28.html)

With `$scope.$watch`:
```javascript
(function (app) {

    var genders = ['Male', 'Female'],
        labels = ['boy', 'girl'];

    function BadController($scope) {
        $scope.genders = genders;
        $scope.selectedGender = genders[0];
        $scope.$watch('selectedGender', function () {
            $scope.genderText =
                $scope.selectedGender === genders[0]
                ? labels[0] : labels[1];
        });
    }


    app.controller('badCtrl', BadController);

})(angular.module('myApp', []));
```

With getters:
```javascript
(function (app) {

    var genders = ['Male', 'Female'],

        labels = ['boy', 'girl']

    function GoodController() {
        this.genders = genders;
        this._selectedGender = genders[0];
        this.genderText = labels[0];
    }

    Object.defineProperty(GoodController.prototype,
        "selectedGender", {
        enumerable: true,
        configurable: false,
        get: function () {
            return this._selectedGender;
        },
        set: function (val) {
            if (val !== this._selectedGender) {
                this._selectedGender = val;
                this.genderText =
                    val === this.genders[0]
                    ? labels[0] : labels[1];
            }
        }
    });

    /*
      angular.extend(GoodController.prototype, {
        get selectedGender: function() {
          return this._selectedGender;
        },
        set selectedGender: function(val) {
          if (val !== this._selectedGender) {
            this._selectedGender = val;
            this.genderText =
                val === this.genders[0]
                ? labels[0] : labels[1];
          }
        }
      });
    */

    app.controller('goodCtrl', GoodController);

})(angular.module('myApp', []));
```

## Don't be trigger happy with $apply
[$digest instead of $apply](http://www.bennadel.com/blog/2595-using-scope-digest-as-a-performance-optimization-in-angularjs.htm)
[$applyAsync](http://blog.thoughtram.io/angularjs/2015/01/14/exploring-angular-1.3-speed-up-with-applyAsync.html)

## Don't optimize to early

Write OK code. Find out what performance problem you have and where is the choke point. Optimizing anywhere else is a lie.
