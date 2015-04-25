'use strict'

Components.utils.import("resource://gre/modules/Services.jsm");

const name = 'browser.feeds.handlers.application';
const value = '/add_akregator_feed_firefox.sh';

// Add script to preferences
function integrateAkregator(path) {
    var url = path + value;
    Services.prefs.setCharPref(name, url);
}

// Remove custom setting
function reset() {
    Services.prefs.clearUserPref(name);
}

function startup(data, reason) {
    if (reason == ADDON_ENABLE || reason == ADDON_UPGRADE || reason == ADDON_DOWNGRADE) {
        var path = data.installPath.path;
        integrateAkregator(path);
    }
}

function shutdown(data, reason) {
    if (reason == ADDON_DISABLE || reason == ADDON_UNINSTALL) {
        reset();
    }
}

function install(data, reason) {
    var path = data.installPath.path;
    integrateAkregator(path);
}

function uninstall(data, reason) {}
