/// <reference path="../../app.ts" />
/// <reference path="../typings/jasmine/jasmine.d.ts" />
describe("another test", function () {
    beforeEach(function () {
        this.helloworld = new HelloWorld("hello");
        var theDate = new Date();
        var shoe = {
            Name: 'Pegasus',
            Mileage: 2,
            AlertMileage: 150,
            IsActive: true,
            Id: 1,
            DatePurchased: theDate
        };
        this.shoeviewmodel = new ShoeViewModel(shoe);
        //console.log(this.shoeviewmodel.Name);
    });
    //   afterEach(function() {
    //     $('#calculator').remove();
    //   });
    it("should say hello", function () {
        var hi = new HelloWorld("hi");
        console.log(hi);
        console.log(this.helloworld);
        expect(this.helloworld.message).toBe("hello");
    });
    it("should get a shoe named pegasus", function () {
        console.log(this.shoeviewmodel.Name);
        expect(this.shoeviewmodel.Name).toContain("Pegasus");
    });
});
//# sourceMappingURL=appSpecTest.js.map