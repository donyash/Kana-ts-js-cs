window.onload = function wrapper () {

    //fizzbuz1();
    fizzbuz2();







    function fizzbuz1() {
        console.log('fixzzbuzz');
        for (i = 1; i <= 100; i++) {

            if (i % 15 === 0) {
                console.log('FizzBuzz');
            }
            else if (i % 3 === 0) {
                console.log('Fizz');
            }
            else if (i % 5 === 0) {
                console.log('Buzz');
            }
            else {
                console.log(i);
            }
        }
    }
    function fizzbuz2() {
        console.log('fizzbuzz2');

        var theArray = [];
        for (var i = 1; i <= 100; i++) { theArray.push(i);}
        console.log(theArray);

        for (var j in theArray)
        {
            if (j % 15 === 0) { console.log('FizzBuzz'); }
            else if (j % 5 === 0) { console.log('Fizz'); }
            else if (j % 3 === 0) { console.log('Buzz'); }
            else { console.log(j);}
        }

    }
};


