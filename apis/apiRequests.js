const postCode = async (data) => {
    const { code, postalcode } = data
    const response = await fetch(`http://api.zippopotam.us/${code}/${postalcode}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            'Connection': 'keep-alive',
            "Access-Control-Allow-Origin": "*"
        },
    })
    const results = await response.json();
    const responseStatus = await response.status
    return {results, responseStatus}
};
module.exports = { postCode }