# VueZip
 A Vue CLI 3 plugin to archive files in 'dist' or 'prod' folder to a zip file after building, but with a twist.
 
### You can use it like this: 
 yarn build (in package.json) "build": "vue-cli-service build && vue-cli-service zip:build" -> it builds dist-1594146412396.zip (dist folder with the timestamp)
 
###  As a standalone:
vue-cli-serve zip:build -> outputs: dist-1594146412396.zip
vue-cli-serve zip:build:prod  -> outputs: prod-1594146412396.zip
