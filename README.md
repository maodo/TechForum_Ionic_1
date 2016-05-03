TechForum eXplore Ionic - Worldline
==========================

_A Mobile Application for Worldline TechForum eXplore

**Service :** SDCO - Software Engineering - Web & Mobile Framework

**Technology :** Cordova - HTML5 - CSS3 - JavaScript - AngularJS

**FrameWork :** Ionic 1



> **It's a mobile app for TechForum eXplore in WorldLine. TechForum eXplore is an internal conference dedicated to topics related to technology, through 2 main lines: technical breakthroughs & achievements, and exploratory works on various topics.**

## To install development and production environments

Install a follow components

Use "**sudo**" to build with Mac and Linux

**Node.js**

[http://nodejs.org/](http://nodejs.org/)

_Configure NPM proxy_
```bash
npm config set proxy http://[proxy]:[PORT]
npm config set https-proxy http://[proxy]:[PORT]
```

**Cordova**
```bash
npm install -g cordova
```
**Bower**
```bash
npm install -g bower
```
_Configure Bower proxy_

Add in .bowerrc
```bash
cd dev/
nano .bowerrc
Add this =>
"proxy":"http://[proxy]:[PORT]",
"https-proxy":"http://[proxy]:[PORT]"
```

**Grunt**
```bash
npm install -g grunt-cli
```

Then run:

```bash
$ cd dev
$ npm install
$ bower install
$ cd ..
```

The development environment is now installed

***

**To install prod environnement**

If you use mac or linux
```bash
chmod u+x script.sh
perl -i -pe 'y|\r||d' script.sh
```

```bash
$ sh script
```

**Add cordova plugin**
```bash
For Android, IOS and wp8
$ cordova plugin add cordova-plugin-geolocation
$ cordova plugin add uk.co.workingedge.phonegap.plugin.launchnavigator
Only for Android
$ cordova plugin add cordova-plugin-network-information
$ cordova plugin add cordova-plugin-splashscreen
$ cordova plugin add https://github.com/worldline/cordova-plugin-wifiverify.git
```

### To build for Android
```bash
$ cordova platform add android
Add Splascreen and Icon
$  cp -r dev/res/android/res/* platforms/android/res
create a file in /platforms/android named gradle.proprieties and insert 
    systemProp.http.proxyHost=10.24.219.17
    systemProp.http.proxyPort=3128
    systemProp.https.proxyHost=10.24.219.17
    systemProp.https.proxyPort=3128
   
$ cordova build android
To launch a emulator (you must have Android ADB and a AVD (Android virtual Device)
$ cordova emulate android
or to launch in your phone
$ cordova run android
```

### To build for IOS
You should run on Mac OX
```bash
$ cordova platform add ios
$ cordova build ios
Add Splascreen and Icon
$  cp -r dev/res/ios/* platforms/ios/TechForum\ 2015/Resources
To launch a emulator (update xcode before)
$ cordova emulate ios
```

### To build for Windows Phone 8+
You should run on Windows 8.1
```bash
$ cordova platform add wp8
$ cordova build wp8
Add Splascreen and Icon
$  cp -r dev/res/wp8/* platforms/wp8/
To launch a emulator (install windows phones 8.1 sdk)
$ cordova emulate wp8
to launch in your phone
$ cordova run wp8
```


_If you have a problem to install Cordova plugin_

Download the git of the plugin using the zip download of git site
* [https://github.com/apache/cordova-plugin-splashscreen](https://github.com/apache/cordova-plugin-splashscreen)
* [https://github.com/apache/cordova-plugin-geolocation](https://github.com/apache/cordova-plugin-geolocation)
* [https://github.com/apache/cordova-plugin-network-information](https://github.com/apache/cordova-plugin-network-information)

Extract the zip to some path
```bash
cordova plugin add [pathtotheextractedplugingit]cordova-plugin-geolocation-master
cordova plugin add [pathtotheextractedplugingit]cordova-plugin-splashscreen-master
cordova plugin add [pathtotheextractedplugingit]cordova-plugin-network-information-master
```

## To test in Development Environments

**Execute Unit Tests**

Install Karma
```bash
npm install -g karma-cli
```

launch tests
 ```bash
cd dev/test
karma start karma.conf.js
 ```
 
 **Execute Interface Test**
 You must have a adb in your computer
 ```bash
cd dev/test
For fast test
sh test_interface_android_fast
For a complet interface test
sh test_interface_android_complet
```
 

**Emulate Application on browser**

Install Ripple emulator for Google Chrome

[https://chrome.google.com/webstore/detail/ripple-emulator-beta/geelfhphabnejjhdalkjhgipohgpdnoc](https://chrome.google.com/webstore/detail/ripple-emulator-beta/geelfhphabnejjhdalkjhgipohgpdnoc)

Launch server
```bash
$ cd www
$ node server.js
```

Application is now running in :

[localhost:3000](localhost:3000)

## Development workflow for Android 

```bash
work in dev folder when it is done, update the www folder with the script file 
$ sh script
update the plateform folder with    
$ cordova platform update android
```
