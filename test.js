// Import the function from app.js
const { oneEuroIs, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

//test 1
test(`One euro should be ${oneEuroIs.USD} dollars`, function () {
    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * oneEuroIs.USD;

    // This is the comparison for the unit test
    expect(dollars).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

//test 2
test(`One dollar should be ${oneEuroIs.JPY / oneEuroIs.USD} yen`, function () {
    // Use the function like its supposed to be used
    const yen = fromDollarToYen(3.5);


    const expected = 3.5 * (oneEuroIs.JPY / oneEuroIs.USD);

    // This is the comparison for the unit test
    expect(yen).toBe(expected);
})

//test 3
test(`One yen should be ${oneEuroIs.GBP / oneEuroIs.JPY} pound`, function () {
    // Use the function like its supposed to be used
    const pound = fromYenToPound(3.5);


    const expected = 3.5 * (oneEuroIs.GBP / oneEuroIs.JPY);

    // This is the comparison for the unit test
    expect(pound).toBe(expected);
})