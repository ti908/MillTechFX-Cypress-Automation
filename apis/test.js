const expect = require('chai').expect;
const { countryData, invalidData } = require('../apis/data')
const { postCode } = require('../apis/apiRequests')

countryData.forEach(data => {
    describe('API testing', function () {
        it('Scenario 1:', async function () {
            const {results} = await postCode(data)
            expect(results.country).to.be.equal(data.country)
            expect(results.country).to.be.a('string')
            expect(results['post code']).to.be.equal(data.postalcode.toUpperCase())
            expect(results['post code']).to.be.a('string')
            expect(results['country abbreviation']).to.be.equal(data.code.toUpperCase())
            expect(results['country abbreviation']).to.be.a('string')
            expect(results.places.length).to.be.greaterThanOrEqual(1)
            expect(results.places).to.be.a('array')
        });
        it('Scenario 2:', async function () {
            const {results} = await postCode(data)
            expect(results['post code']).to.be.equal(data.postalcode.toUpperCase())
        });
        it('Scenario 3:', async function () {
            const {results, responseStatus} = await postCode(invalidData)
            expect(results).to.be.empty
            expect(responseStatus).to.be.equal(404)
        });
        it('Scenario 4:', async function () {
            const data = { code: "gb", postalcode: "GU22" }
            const {results} = await postCode(data)
            const places = results.places
            expect(results.places.length).to.be.equal(4)
            for (let place of places) {
                expect(place.state).to.be.equal('England')
                expect(place).to.have.property("latitude")
                expect(place).to.have.property("longitude")
                expect(place).to.have.property("state")
                expect(place).to.have.property('place name')
            }
        });

    });
})

