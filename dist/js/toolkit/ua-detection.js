// Tonkatsu User-agent Detection

// Tonkatsu runs quickly on page load to detect features;
// it then creates a JavaScript object with the results, and adds classes
// to the html element

// Require JavaScript-based User-Agent string parser
// https://github.com/faisalman/ua-parser-js
// -----------------------------------------------------------------------------
// Configuration
var parser = new UAParser(),
    agent  = parser.getResult(),
    html  = document.getElementsByTagName('html')[0];

// -----------------------------------------------------------------------------
// OS
if(agent.os.name == 'Mac OS') {
  html.className += 'OS-Mac';
}

if(agent.os.name == 'Windows') {
  html.className += 'OS-Windows';
}

if(agent.os.name == 'iOS') {
  html.className += 'OS-iOS';
}

if(agent.os.name == 'Android') {
  html.className += 'OS-Android';
}

html.className += ' OS-' + agent.os.version;

// -----------------------------------------------------------------------------
// Browser
if(agent.browser.name == 'Chrome') {
  html.className += ' Browser-Chrome';
}

if(agent.browser.name == 'Safari' || agent.browser.name == 'Mobile Safari') {
  html.className += ' Browser-Safari';
}

if(agent.browser.name == 'Firefox') {
  html.className += ' Browser-Firefox';
}

if(agent.browser.name == 'IE') {
  html.className += ' Browser-IE';
  html.className += ' Browser-IE' + agent.browser.major;
  if(agent.browser.major < 9) {
    html.className += ' Browser-Legacy';
  }
}

html.className += ' Browser-' + agent.browser.major;

// Native Android Browser
var navU = navigator.userAgent;
var isAndroidMobile = navU.indexOf('Android') > -1 && navU.indexOf('Mozilla/5.0') > -1 && navU.indexOf('AppleWebKit') > -1;
var regExAppleWebKit = new RegExp(/AppleWebKit\/([\d.]+)/);
var resultAppleWebKitRegEx = regExAppleWebKit.exec(navU);
var appleWebKitVersion = (resultAppleWebKitRegEx === null ? null : parseFloat(regExAppleWebKit.exec(navU)[1]));
var regExChrome = new RegExp(/Chrome\/([\d.]+)/);
var resultChromeRegEx = regExChrome.exec(navU);
var chromeVersion = (resultChromeRegEx === null ? null : parseFloat(regExChrome.exec(navU)[1]));
var isAndroidBrowser = isAndroidMobile && (appleWebKitVersion !== null && appleWebKitVersion >= 537) && (chromeVersion !== null && chromeVersion <= 35);

if(isAndroidBrowser) {
  html.className += ' Browser-Android';
}

// -----------------------------------------------------------------------------
// Device
if(agent.device.model == 'iPad') {
  html.className += ' Device-iPad';
}

if(agent.device.model == 'iPhone') {
  html.className += ' Device-iPhone';
}

if(agent.device.model == 'iPod') {
  html.className += ' Device-iPod';
}

if(agent.device.model == 'GT-I9505') {
  html.className += ' Device-S4';
}

if(agent.device.model == 'SM-G900F') {
  html.className += ' Device-S5';
}

if(agent.device.type == 'tablet') {
  html.className += ' Device-Tablet';
}

if(agent.device.type == 'mobile') {
  html.className += ' Device-Mobile';
}
