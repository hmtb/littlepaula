#!/usr/bin/env node
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
    if(has(config.tags,result.key)) {
        console.log('send', result.key, config.tags[result.key]);
        axios.get(`http://localhost:5005/${config.speaker}/spotify/now/` + config.tags[result.key].uri).then(function (response) {
        // handle success
        console.log(response.data.status);
      }).catch(function (error) {
        // handle error
        console.log(error);
      })
    } else {
      console.log("tag not found");
    }
    // wait for next input
    waitForInput()
});
}
// ask user for the input
waitForInput()