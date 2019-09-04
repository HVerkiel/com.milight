# Mi•Light app for Homey
Connect your Mi•Light devices with Homey.

Homey connects with your Mi•Light WiFi bridge to control the lights.

Supported bridges:
- First generation WiFi box
- Second generation WiFi iBox1
- Third generation WiFi iBox2

Mi•Light devices are also known as:
- EasyBulb
- AppLight
- AppLamp
- LEDme
- Dekolight
- Rocket LED
- s.LUCE
- iLight
- iBulb
- Kreuzer

### Changelog
v3.2.3
- Added missing Flow cards
>- Enable white mode for iBox and 8-Zone Controller
>- Enable effect mode and enable specific effect mode for 8-Zone Controller
>- Enable night mode for White Zone and 8-Zone Controller

v3.2.2
- Minor crash preventive fixes

v3.2.1
- Added support for 8-Zone Controller (Bèta)
- Added driver for iBox light device
- Added button capabilities for night-, white- and effectmode (re-pair needed, not all devices support this)
- Added device and bridge information in device settings
- Added nested pairing wizard (bridges > devices)
- Improved speed and reliability of pairing wizard
- Fixed a bug where bridges would become unreachable after changing IP address
- Added retry functionality to all ‘retryable’ commands, improving reliability

v3.1.10
- Fixes updating capability values when changed

v3.1.7
- Minor fixes to device settings
- Fix migration from SDKv1 to SDKv2

v3.1.1
- Rewrite app for SDKv2
- Add effect mode speed up/down Flow Cards

v3.1.0
- Add support for iBox V6
- Add support for RGBWW (i.c.w. iBox V6)
- Added night mode functionality