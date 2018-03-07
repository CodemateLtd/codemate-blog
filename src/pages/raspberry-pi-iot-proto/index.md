---
title: "Raspberry Pi in IoT Prototyping"
date: 2016-05-03T00:00:00+00:00
draft: false
---

## Introduction to RPI

Raspberry Pi (RPI) is a well known device for most people in the IT industry. In most applications, RPI might be a little bit an overkill as it is more of a full-fledged computer than an embedded device. Still it is a good choice for an **IoT prototype development** as it offers a lot of different choices for input and output devices, for example GPIO pins and USB, as well as different ways to program it.

*Author: Juhana Paavola, Software Architect at Codemate Ltd.*

---

## Software to get started

The Raspberry Pi hardware, essentially being a small and cheap circuit board, has been covered in different articles quite extensively, so I will focus here on the board from software developers perspective when creating IoT prototypes.

As RPI is not an ordinary embedded device, SDK can be a misleading term for it. To be functional it needs an operating system. The most common OS is Raspbian which is derived from Debian/Linux. As Raspbian is a full Linux distribution, it contains the same tools that can be found from the original Debian. For development needs, additional libraries need to be installed. For example GPIO pin controlling has its own libraries.

While RPI itself is a final product, there is not any cloud service for it like some other embedded devices may have. But on the other hand, we can connect it to any cloud service of our choice or to other external services, such as own custom backend. The lack of a proprietary back-end or cloud service is an approach for some other embedded device manufacturers as well, but other vendors have decided to provide some kind of a cloud for the devices, sometimes even without any possibilities to change it. We prefer to have open possibilities for the back-end even with the cost of a slower deployment of the IoT prototype setup. This way the prototype back-end service can be better utilised for the final system as well, where the hardware may be a different one.

## Connectivity and examples

Hardware itself has a video output so it is easy to connect a display of any size as long as it is using standard HDMI. Same applies for the other connectable devices; if the device follows standards and it is has support for Linux, it should work out of the box. In any other cases, some custom software development is needed.

RPI comes with much more than plain standard connectors. The GPIO pins allow a different type of an approach. In one of my tests, RPI was used as a flashing device for other embedded hardware. In this case the JTAG pins of an external module were connected to the GPIO pins of an RPI and by that way, it was possible to rewrite the whole memory of the module back to factory stage.

Another prototype we built with RPI was a proof-of-concept in proximity based identification. An RPI was set up to work as the heart of a kiosk which had a big touchscreen display. Along with an RPI, there was also an iBeacon, the users mobile phone and a custom back-end service involved in the demo setup. When the phone detected an iBeacon signal, the associated RPI communicated with the back-end service, identified the user and executed the wanted actions in the kiosk.

## Conclusions

RPI is an excellent choice for kiosk style prototyping and can give real insights for building the final product. After all RPI is good for prototyping an application of any size or complexity. But as a platform for a final large-scale solution we should think do we really need all of the RPI features to do the job.

*You can get the fresh posts by Codemate to your e-mail (max once per month) when you [subscribe to our list](http://eepurl.com/bSndMf).*