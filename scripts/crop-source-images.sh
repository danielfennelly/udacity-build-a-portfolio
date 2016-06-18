#!/bin/sh
# Simple script using GraphicsMagick to crop source images to correct aspect ratios

# Splash image has an 8:3 aspect ratio
gm convert images/cliffs-of-moher.jpg -crop 1600x600 images/cliffs-of-moher-cropped.jpg

# Tile images have 5:3 aspect ratios
gm convert images/north-coyote-buttes.jpg -crop 2500x1500 images/north-coyote-buttes-cropped.jpg
gm convert images/proxy-falls.jpg -crop 2000x1200 images/proxy-falls-cropped.jpg
gm convert images/ice-cave-iceland.png -crop 1750x1050 images/ice-cave-iceland-cropped.jpg