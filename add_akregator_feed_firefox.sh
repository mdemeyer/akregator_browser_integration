#!/bin/bash
#
# Subscribe feeds in akregator from firefox
#
# Script by bcooksley
# https://forum.kde.org/viewtopic.php?f=18&t=111965
#

if [[ -z `pidof akregator` ]]; then
   akregator
fi

for url in "$@"; do
   actualUrl=${url/feed/http}
   actualUrl=${actualUrl/http:https/https}
   qdbus org.kde.akregator /Akregator org.kde.akregator.part.addFeedsToGroup "$actualUrl" "Imported Feeds"
done
