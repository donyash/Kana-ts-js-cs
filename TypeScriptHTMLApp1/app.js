var HelloWorld = (function () {
    function HelloWorld(message) {
        this.message = message;
    }
    return HelloWorld;
})();
var ShoeViewModel = (function () {
    function ShoeViewModel(model) {
        console.log('Constructor for ShoeViewModel fired.');
        this.Name = model.Name;
        this.Mileage = model.Mileage;
        this.AlertMileage = model.AlertMileage;
        this.IsActive = model.IsActive;
        this.DatePurchased = model.DatePurchased;
    }
    return ShoeViewModel;
})();
window.onload = function () {
    // var el = document.getElementById('content');
    // var greeter = new Greeter(el);
    // greeter.start();
};
//# sourceMappingURL=app.js.map