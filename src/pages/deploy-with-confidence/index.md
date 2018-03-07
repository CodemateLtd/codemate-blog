---
title: "Deploy with confidence"
date: 2015-05-14T00:00:00+00:00
draft: false
---

## Automation tools to the rescue!

Software releases and software configuration management have become increasingly important in software development. Our technology stacks are growing bigger and more complex, architecture is shifting from monolithic server setups to micro-service architecture with dynamic cloud instances. We at Codeamte face these challenges daily, especially due to being a polyglot software development company.

Luckily there are quality tools that help us face these challenges head on.

---

About the author: Aki Hänninen, ex-Project Manager at Codemate Ltd. Twitter: @hanninen

## Ansible

We use [Ansible](http://www.ansible.com/) to automate our infrastructure setup, whether it is the developer’s own computer running Vagrant or the production cloud setup with automatic scaling. Ansible allows us to describe all tasks needed to setup a new environment in human-readable format. This is Ansible’s greatest feature in my opinion. It lowers the adoption barrier and anyone can quickly grasp the idea of an Ansible playbook by reading it through.

Using Ansible enables us also to bring rapidly up new environments for different purposes, for example a brand new production scale environment for load testing. Without automation creating such environment would take too long and the risk of getting incomparable results between load test runs would be high.

## Just do git

Same reproducibility is important in building and deploying our software releases.

We use [Jenkins](https://jenkins-ci.org/) as well as [Gitlab-CI](https://about.gitlab.com/gitlab-ci/) for our Continuous Integration activities. These CI systems allow us to run the same exact build to the target environment and skip all manual interaction from deployment.

We have also started to test using [Docker](https://www.docker.com/) containers as our build environments. Docker provides full isolation between projects and allows us to have a PHP based web service, tools written in Go and Django based backends built on same servers without them ever noticing each other, all due to container isolation.

No more weird bugs in the build system due to system package updates or mismatching versions, each project can be built in it’s own custom made container.

![henkka](./images/henkka.png)

## The benefits

Usage of these tools increase our confidence in deploying changes, we do not have to worry remembering all the different steps that are needed. All of them are automated and run exactly the same way every single time. When confidence in deployment is high, the pace of deployments can be raised higher.

Instead of performing builds on a weekly basis, they can be done on every commit or multiple times per day, as needed. When the amount of changes in a deployment decreases, the traceability of bugs becomes clearer. Smaller changes, lesser risk.

## What next?

What’s next then? As we gain more experience in running fully automated infrastructure and deployment, perhaps we can move to [Immutable Infrastructure](http://chadfowler.com/blog/2013/06/23/immutable-deployments/) model, where servers are not updated anymore.

They are replaced directly with an updated version. Data persists in a dedicated location, everything else is replaceable.
