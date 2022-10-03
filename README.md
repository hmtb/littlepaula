# Sonos Tag Controller



## setup

- fork and config keys
- pull https://github.com/jishi/node-sonos-http-api and install
- add  node-sones-http to start on boot -> see sonos.service file ->  https://stackoverflow.com/questions/4018154/how-do-i-run-a-node-js-app-as-a-background-service
- add this two lines to user .bashrc  with `sudo nano /home/[USER]/.bashrc`\
-> `echo Running at boot`\
-> `sudo node /home/[PATH TO REPO]/index.js`

- start pi in consol modus with auto login ( `raspi-config` -> System Settings -> Boot Options)


