# Introduction
This is a private figma plugin to convert designs into one of [Neo's](https://design.avayacloud.com) supported themes (currently included light & dark mode).

# How to Use
1. Select the frame(s) you'd like to have the changes applied (it's recommended to make a copy of the original work).
2. From the menu, File -> Plugins -> Neo Themes.
    1. To Dark (flips from Light -> Dark mode)
    2. To Light (flips from Dark -> Light mode)
3. Once the plugin finishes running, you'll see a message letting you know how many layers were affected.

## Demo
![GIF of using the plugin](https://github.com/shantsis/Neo-Themes/blob/main/demo.gif)

## Prerequisites
This plugin will only work for Neo color styles and elevation tokens. Other libraries such as branding and unlinked colors will not be affected. To take advantage of the plugin, make sure the correct colors are applied before running.

**Note:** The plugin will not recognize if any layers selected should be excluded from the flip (e.g. Spaces left nav). It's recommended to either create a copy of that component to add manually, or re-run that plugin on that specific component to revert the colors.
