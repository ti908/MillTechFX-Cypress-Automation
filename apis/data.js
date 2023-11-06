const countryData = [
    {
        country: "Great Britain",
        code: "gb",
        postalcode: "ze3"
    }, {
        country: "United States",
        code: "us",
        postalcode: "99950"
    }
    , {
        country: "France",
        code: "fr",
        postalcode: "98799"
    }
]
const invalidData = [
    {
        country: "Great Britain",
        code: "gb",
        postalcode: "ze36"
    }, {
        country: "United States",
        code: "us",
        postalcode: "999500"
    }
    , {
        country: "France",
        code: "fr",
        postalcode: "987996"
    }
]

module.exports = { countryData, invalidData }