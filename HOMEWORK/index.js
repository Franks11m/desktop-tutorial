function exponentiate(x, n) {
    return Math.pow(x, n);
}

function it(msg, func) {
    try {
        func();
        console.log(msg + '; Test Passed');
    } catch (e) {
        console.log(msg + ': Test Failed');
    }
}

function assertEqual(a, b) {
    if (a !== b) {
        throw new Error();
    }
}

describe("exponentiate", function() {
    it("2 raised to the power of 3 is 8", function() {
        assertEqual(exponentiate(2, 3), 8);
    });

    it("5 raised to the power of 0 is 1", function() {
        assertEqual(exponentiate(5, 0), 1);
    });

    it("10 raised to the power of 1 is 10", function() {
        assertEqual(exponentiate(10, 1), 10);
    });

    it("-3 raised to the power of 3 is -27", function() {
        assertEqual(exponentiate(-3, 3), -27);
    });
});

function describe(description, tests) {
    console.log(description);
    tests();
}
function sumUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

function it(msg, func) {
    try {
        func();
        console.log(msg + '; Test Passed');
    } catch (e) {
        console.log(msg + ': Test Failed');
    }
}

function assertEqual(a, b) {
    if (a !== b) {
        throw new Error();
    }
}

describe("sumUpTo", function() {
    it("sums numbers up to 5", function() {
        assertEqual(sumUpTo(5), 15);
    });

    it("sums numbers up to 1 (edge case)", function() {
        assertEqual(sumUpTo(1), 1);
    });

    it("sums numbers up to 0 (edge case)", function() {
        assertEqual(sumUpTo(0), 0);
    });

    it("sums numbers up to 10", function() {
        assertEqual(sumUpTo(10), 55);
    });
});

function describe(description, tests) {
    console.log(description);
    tests();
}

function findMax(array) {
    if (array.length === 0) {
        throw new Error("Array is empty");
    }
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

function it(msg, func) {
    try {
        func();
        console.log(msg + '; Test Passed');
    } catch (e) {
        console.log(msg + ': Test Failed');
    }
}

function assertEqual(a, b) {
    if (a !== b) {
        throw new Error();
    }
}

describe("findMax", function() {
    it("finds the maximum in [1, 2, 3, 4, 5]", function() {
        assertEqual(findMax([1, 2, 3, 4, 5]), 5);
    });

    it("finds the maximum in [5, 4, 3, 2, 1]", function() {
        assertEqual(findMax([5, 4, 3, 2, 1]), 5);
    });

    it("finds the maximum in a single-element array", function() {
        assertEqual(findMax([7]), 7);
    });

    it("throws an error for an empty array", function() {
        try {
            findMax([]);
            console.log("finds the maximum in an empty array; Test Failed");
        } catch (e) {
            console.log("finds the maximum in an empty array; Test Passed");
        }
    });
});

function describe(description, tests) {
    console.log(description);
    tests();
}