(function() {
    describe("directive: post-date", function() {
        beforeEach(module('seed'));
        beforeEach(inject(function($rootScope, $compile) {
            var el;

            this.scope = $rootScope.$new();
            this.scope.date = new Date(2015, 0, 25);
            el = "<post-date date='date'></post-date>";
            this.element = $compile(el)(this.scope);
            this.scope.$digest();

        }));
        it("creates isolate scope with the date", function() {
            expect(this.element.isolateScope().date).toBe(this.scope.date);
        });
        it("should display a weekday", function() {
            expect(/Sun/.test(this.element.html())).toBe(true);
        });
        it("should display a day no.", function() {
            expect(/25/.test(this.element.html())).toBe(true);
        });
        it("should display a month name", function() {
            expect(/Jan/.test(this.element.html())).toBe(true);
        });
        it("should display a year", function() {
            expect(/2015/.test(this.element.html())).toBe(true);
        });
    });

}).call(this);
