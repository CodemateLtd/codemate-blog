---
title: "Wunderbar IoT platform evaluated"
date: 2016-05-03T00:00:00+00:00
draft: false
---

## Wunderbar review

Wunderbar is a rapid IoT prototyping hardware platform that is built for software developers. The product is developed by [Relayr](https://relayr.io/wunderbar/).

> Sounds like an ideal tool for us. I tested the platform and wrote my first experiences here.

Author: Juhana Paavola, Software Architect at Codemate Ltd.

---

## Getting started

Onboarding video by Relayr:

<iframe width="560" height="315" src="https://www.youtube.com/embed/YwNnMjVMMqQ" frameborder="0" allowfullscreen></iframe>

Getting started in building a prototype application using Wunderbar hardware is made really easy. The ideology behind the concept is that **software developers with no hardware expertise can create IoT prototypes**, or even products with it.

Actually there is no development needed for any of the Wunderbar modules. Instead, custom software development is done for the other devices which use these sensors. For example an Android application can be made to show the sensor data. Wunderbar comes with a wide range of SDK’s for different platforms.

## General overview

The sensors work nicely just out of the box. The Sensors themselves do not have too much to configure since most of the configurations are for sensor reading update rates. Sensor data can be read from the cloud service or directly from the module with a phone by using BLE connection. Unfortunately only Android SDK supports BLE connection. And secondly, BLE connection in Wunderbar sensors does not seem to be reliable.

Cloud service works much better in this case. In addition, the cloud service provides external access so there is possibility to draw data from Relayr cloud to your own backend service.

The only thing to pay attention to is that **the master module must have a good WIFI connection**. Unfortunately there is no GSM module, so the master module must remain connected to WIFI in order to have a connection to the cloud service. The Lack of GSM narrows down use cases for Wunderbar platform. Even though the master module can be used with battery power, there isn’t actual need for it because the module needs to be within a WiFi network and in most cases it means that there are power outlets available.

## Connectivity problems

In a test run, all the modules work nicely just out of the box. The master module was easy to configure with a phone app. **Problems started when the sensor modules were separated from the board**. This use case is relevant and one of the key selling points of Wunderbar, since many IoT solutions require that the sensors can be far away from the master module and work semi-independently. The pre-requisite is to have a signal connection to the master.

## Conclusions

Wunderbar has its own limitations. There is **no memory** in the modules, so sensor values are not stored. Since the whole concept relies on the cloud service which is also the memory and data storage for the sensors, they must have a connection to the Internet all the time. And with only WIFI connection, use cases are stationary rather than mobile. While this could be evaded with additional mobile WIFI AP, Wunderbar starts to lose its meaning.

For fast and primitive prototyping, Wunderbar may sound as a a good choice, since it offers an easy way to gather sensor information from various spots with a single board.  But problems with connection from sensor to phone and from sensor to master module, **will rule out this device for us** in most cases. The platform may function better in spaces with a good single WiFi network.

You can get the fresh posts by Codemate to your e-mail (max once per month) when you [subscribe to our list](http://eepurl.com/bSndMf).