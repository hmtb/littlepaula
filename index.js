#!/usr/bin/env node
const prompt = require('prompt');
const axios = require('axios');
const { has } = require('lodash')

// start the prompt
prompt.start();

// add nfc tags
const config = require('./config.json')

function waitForInput() {
  prompt.get(['key'], async (err, result) => {
    if (err) {
      throw err;
    }
    if (has(config.tags, result.key)) {
      console.log('play', result.key, config.tags[result.key]);


      try {
        const clearResponse = await axios.get(`http://localhost:5005/${config.speaker}/clearqueue`);
        console.log("clear queue", clearResponse.data.status);
        
        const response = await axios.get(`http://localhost:5005/${config.speaker}/spotify/now/` + config.tags[result.key].uri)
        console.log(`play ${config.tags[result.key].name}`,response.data.status);
      } catch (error) {
        // handle error
        console.log(error);
      }
    } else {
      console.log("tag not found");
    }
    // wait for next input
    waitForInput()
  });
}
// ask user for the input
waitForInput()