const prompt = require('prompt');
const axios = require('axios');

// start the prompt
prompt.start();

function waitForInput() {
  prompt.get(['key'], (err, result) => {
    if (err) {
        throw err;
    }
 
    if(result.key == '0015154948')
      axios.get('http://localhost:5005/Wohnzimmer/spotify/now/spotify:track:3NIDOSThELMihLSOMZcL4k').then(function (response) {
      // handle success
      console.log(response.data.status);
    })

    if(result.key == '0015192722')
      axios.get('http://localhost:5005/Wohnzimmer/spotify/now/spotify:track:1hkC9kHG980jEfkTmQYB7t').then(function (response) {
        console.log(response.data.status);
    })

    waitForInput()
});
}
// ask user for the input
waitForInput()