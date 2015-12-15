(function() {
    describe("service", function() {
        beforeEach(module('seed'));
        beforeEach(inject(function($httpBackend, Products) {
            this.$httpBackend = $httpBackend;
            this.Products = Products;

            this.responseHandler = this.$httpBackend.when('GET', '/obviouslyfake').respond([1, 2, 3])
        }));

        afterEach(function() {
            this.$httpBackend.verifyNoOutstandingExpectation();
            this.$httpBackend.verifyNoOutstandingRequest();
        });

        it("calls remote", function () {
            this.$httpBackend.expectGET('/obviouslyfake');
            this.Products.getAll();
            this.$httpBackend.flush();
        })
    });



}).call(this);
