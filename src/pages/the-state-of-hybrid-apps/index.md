---
title: "The state of hybrid apps"
date: 2016-06-21T00:00:00+00:00
draft: false
---

Web technologies have matured well. The combination of HTML for structural layout, CSS for visual styling and JS for functionality serves well for creating a simple app. The combination has proven to serve even for complex enterprise-scale programs. All browsers interpret the stuff almost identically and have gotten rid of most inconsistencies. In 2005 the situation was horrible and nobody would have betted on either compiling to JavaScript or using HTML for layouts when coding in C++.

---
The author: Juho Rautioaho, Creative Technologist at Codemate Ltd.
Photo not related.

{{<figure src="/the-state-of-hybrid-apps/developing-hybrid.png">}}

## A normal use-case

Hybrid technology has proven to best strongest for apps that rather present than create data. The data is ready to be presented and an application rarely needs to do any heavy processing. The data for a “top ten” application is typically fetched from a server. The everyday user may create some content using an application but most of the time the user consumes data rather than creating it. This is especially true for mobile devices which do not yet have very effective interfaces for creating and manipulating content – with the exception of short messages and the camera.

## Access to features

Simple hybrid applications are built as web pages which then get rewrapped into applications. There are benefits. On top of creating an installable and monetizable application in addition to your browser version, you get a varying amount of technical extra features which depend on the level of implementation in the framework. Main capabilities:

1) Native styling of certain items and limited widgets: form inputs (text areas and buttons), dialogs (alert, prompt and confirmation popups), different keyboard layouts (numpad, email address, text)

2) Access to certain device capabilities (finger-print reader, nfc, gyroscope)

3) Application-to-application communication and push notifications

## The caveats and drawbacks

Making a hybrid application is not a one-solution-fits-all. The output is not identical on all devices and support for each feature needs testing. Some features need tedious tweaking and fixes. Most “new” features (GPS, camera, 3D-rendering etc) become available in browsers sooner or later. There isn’t necessarily much gain in performance. Javascript may run even faster on browsers interpreter than on the wrapped hybrid environment. It certainly does so if it is run in a WebView inside a hybrid application. In worst cases even simple element transitions lag consistently on a high end phone.

---

{{<figure src="/the-state-of-hybrid-apps/mismaihmettelee.png">}}

## The future

There are many promising concepts coming up. Hybrid development is continuously taking steps towards more solid and streamlined delivery. With [Ionic 2](http://ionic.io/2) just released and [Cordova](https://cordova.apache.org/news/2016/01/28/tools-release.html) getting to the version 6 there is certainly a promising buzz going on. Not to mention [React Native](https://facebook.github.io/react-native/).

On the other hand, HTML5 keeps implementing features to access devices and peripherals on the phone directly from browser. Then there is [WebCL](https://www.khronos.org/webcl/) which will blur the line between a webpage and a native program. It will give developers a low level access to parallel computing capabilities on both CPU and GPU which grant levels of performance efficiency similar to native binary code.

Lastly, Google has been active in promoting [Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/) that essentially mean to make native apps less common.

Prophets have been evangelizing about web tech replacing native for years now. Let’s see when that really happens.

---

[Codemate](https://www.codemate.com/) is a software development company that creates web and mobile apps for our clients.

[Sign up to our newsletter](http://eepurl.com/bSndMf) for more quality content.