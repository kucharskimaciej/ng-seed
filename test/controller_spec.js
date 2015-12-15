(function() {

    describe("controller: someController", function() {
        // load the module to be tested
        beforeEach(module('seed'));

        // prepare controller
        // inject(fn) : the arguments will be automatically injected
        beforeEach(inject(setupController));


        it('calls #getAll on Products service', function () {
           expect(this.ProductServiceMock.getAll).toHaveBeenCalled();
        });

        it('assigns result of Products#getAll to a scope variable', function (done) {
            var val = [1,2,3], self = this;

            this.deferred.promise.then(function (res) {
                expect(self.controller.products).toBe(val);
                return res;
            }).then(done);

            this.deferred.resolve(val);
            this.scope.$digest();
        });

        describe("#setActiveUser", function () {
            beforeEach(inject(setupController));

            it("sets active user", function () {
                var user = {
                    name: 'Maciej'
                };

                this.controller.setActiveUser(user);
                expect(this.controller.activeUser).toBe(user);
            });
        })
    });

    function setupController ($rootScope, $controller, $q) {
        var self;
        self = this;

        this.deferred = $q.defer();
        this.scope = $rootScope.$new();
        this.ProductServiceMock = {
            getAll: jasmine.createSpy().and.returnValue(self.deferred.promise)
        };

        this.controller = $controller("WelcomeCtrl", {
            $scope: this.scope,
            Products: this.ProductServiceMock
        });

        this.scope.$digest();
    }

}).call(this);
