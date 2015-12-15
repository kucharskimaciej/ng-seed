describe("Date filters", function() {
    var $filter;
    $filter = null;

    beforeEach(module('seed'));

    beforeEach(inject(function(_$filter_) {
         $filter = _$filter_;
    }));

    describe("weekday filter", function() {

        beforeEach(function() {
             this.weekday = $filter('weekday');
        });

        it("returns empty string when passed no date", function() {
             expect(this.weekday()).toBe("");
        });

         it("returnss correct day name for all weekdays", function() {
            var date, dates, days, idx, _i, _len, _results;
            days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            dates = [new Date(2015, 0, 25), new Date(2015, 0, 26), new Date(2015, 0, 27), new Date(2015, 0, 28), new Date(2015, 0, 29), new Date(2015, 0, 30), new Date(2015, 0, 31)];
            _results = [];
            for (idx = _i = 0, _len = dates.length; _i < _len; idx = ++_i) {
                date = dates[idx];
                _results.push(expect(this.weekday(date)).toBe(days[idx]));
            }
        });
    });


    describe("dayInMonth filter", function() {

        beforeEach(function() {
             this.dayInMonth = $filter('dayInMonth');
        });

        it("returns empty string when passed no date", function() {
             expect(this.dayInMonth()).toBe("");
        });

         it("returns a day in month", function() {
            var date, dates, days, idx, _i, _len, _results;
            days = [25, 26, 27, 28, 29, 30, 31];
            dates = [new Date(2015, 0, 25), new Date(2015, 0, 26), new Date(2015, 0, 27), new Date(2015, 0, 28), new Date(2015, 0, 29), new Date(2015, 0, 30), new Date(2015, 0, 31)];
            _results = [];
            for (idx = _i = 0, _len = dates.length; _i < _len; idx = ++_i) {
                date = dates[idx];
                _results.push(expect(this.dayInMonth(date)).toBe(days[idx]));
            }
        });
    });


    describe("monthName filter", function() {
        beforeEach(function() {
             this.monthName = $filter('monthName');
        });
        it("returns empty string when passed no date", function() {
             expect(this.monthName()).toBe("");
        });
         it("returns correct monthname for all months", function() {
            var date, dates, idx, mnth, months, _i, _len;

             months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            dates = (function() {
                var _i, _results;
                _results = [];
                for (mnth = _i = 0; _i <= 11; mnth = ++_i) {
                    _results.push(new Date(2015, mnth, 15));
                }
                 return _results;
            })();

            for (idx = _i = 0, _len = dates.length; _i < _len; idx = ++_i) {
                date = dates[idx];
                expect(this.monthName(date)).toBe(months[idx]);
            }
        });
    });

     describe("year filter", function() {
        beforeEach(function() {
             this.year = $filter('year');
        });

        it("returns empty string when passed no date", function() {
             expect(this.year()).toBe("");
        });
         it("returns correct year", function() {
            var date, dates, idx, year, years, _i, _len, _results;
            years = [1999, 2000, 2001, 2003, 2015, 2035];
            dates = (function() {
                var _i, _len, _results;
                _results = [];
                for (_i = 0, _len = years.length; _i < _len; _i++) {
                    year = years[_i];
                    _results.push(new Date(year, 0, 12));
                }

                return _results;
            })();


            for (idx = _i = 0, _len = dates.length; _i < _len; idx = ++_i) {
                date = dates[idx];
                expect(this.year(date)).toBe(years[idx]);
            }
        });
    });
});
