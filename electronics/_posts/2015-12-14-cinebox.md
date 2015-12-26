---
layout:     project
title:      Cinebox
summary:    A small device that displays local movie listings.
category:   electronics
tags:       electronics arduino esp8266
gallery-images:
 - file: cinebox1.jpg
   alt: Cinebox
 - file: cinebox2.jpg
   alt: Cinebox screen
 - file: cinebox3.jpg
   alt: Cinebox first layer
 - file: cinebox4.jpg
   alt: Cinebox second layer
 - file: cinebox5.jpg
   alt: Cinebox third layer
 - file: cinebox6.jpg
   alt: Cinebox internals
---

# What is that?
Cinebox is a small device that shows local movie theatre listings. It's microcontroller is an Arduino Pro Mini that connects to the internet via an ESP8266 (ESP-01) gathering data from webserver scripts that access the Cineworld (nearby cinema company) API.
<!--readmore-->



## Ingredients
* Tiny 3.7v LiPo battery and charger circuit
* Arduino Pro Mini to control
* ESP8266 to provide WIFI access for Arduino
* 2.2" SPI TFT Display (ILI9341)



## Method




## Conclusions
If I were to build this again, I wouldn't use an Arduino at all. I realised during the course of the project that it is actually much slower than the ESP8266 and has less memory, which was actually a big deal when coding intro graphic arrays.
If I were to use a different ESP8266 model such as the ESP-03 which has a whole bunch of inputs and outputs, I reckon it could run the whole program and update the screen pretty much instantly and with high quality images rather than the god-knows-how-many seconds it currently takes.



## Pass or Fail?
I *would* say fail for two reasons - it runs super slow and the movie graphics are borderline worthless (by design - the arduino just can't hack anything better).
However! Aesthetically, it's great and we do actually use it every week to check what movies are playing. I learned a lot and might even one day rebuild a vamped up pure ESP8266 version, so for those reasons it's a **pass**.
