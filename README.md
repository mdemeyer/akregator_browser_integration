# Open Firefox web feeds with Akregator
## Requirements
* posix shell (bash, ksh, ...)
* Akregator
* Firefox
* qdbus (optional)

## Installation
### Auto install
This is the easiest and recommended installation method.  
Go to [Firefox Addons](https://addons.mozilla.org/nl/firefox/addon/akregator-integration/) and click *Add to Firefox*

### Manually install the extension
Use this option when developing on the extension.
Create an extension package.

```
zip akregator_browser_integration.xpi *
```

Go to _about:addons_ and choose _install from file_.

### Manual without extension
Use this if you don't want the extension.  
Clone this repository and save the Akregator file where you can find it.  
*Preferences -> Applications -> Webfeed -> location of Akregator script*

