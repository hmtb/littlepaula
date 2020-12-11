const prompt = require('prompt');
const axios = require('axios');
const { has} = require('lodash')

// start the prompt
prompt.start();

// add nfc tags
const config = require('./config.json')

function waitForInput() {
  prompt.get(['key'], (err, result) => {
    if (err) {
        throw err;
    }
    if(has(config,result.key)) {
        console.log('send', result.key);
        axios.get('http://localhost:5005/Wohnzimmer/spotify/now/' + config[result.key].uri).then(function (response) {
        // handle success
        console.log(response.data.status);
      }).catch(function (error) {
        // handle error
        console.log(error);
      })
    }
    // wait for next input
    waitForInput()
});
}
// ask user for the input
waitForInput()