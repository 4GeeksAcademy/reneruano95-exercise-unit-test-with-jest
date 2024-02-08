
// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = (valueInEuro) => {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYen = (valueInDollar) => {
    let valueInYen = (oneEuroIs.JPY / oneEuroIs.USD) * valueInDollar;

    return valueInYen;
}

const fromYenToPound = (valueInYen) => {
    let valueInPound = (oneEuroIs.GBP / oneEuroIs.JPY) * valueInYen;

    return valueInPound;
}


// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { oneEuroIs, fromEuroToDollar, fromDollarToYen, fromYenToPound }