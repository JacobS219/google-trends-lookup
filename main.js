const googleTrends = require('google-trends-api');

const findTrends = () => {
    googleTrends.interestOverTime({ keyword: 'dogecoin' })
        .then(function (results) {
            console.log(results);
        })
        .catch(function (err) {
            console.error(err);
        });
}

findTrends();