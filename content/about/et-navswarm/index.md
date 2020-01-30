---
title: ET-NavSwarm
description: A project to enable autonomous robots to communicate in a swarm.
date: "2015-02-02T00:00:00.000Z"
---

## What is it?

My senior project at UNH was Extraterrestrial Navigational Swarm. The goal of the project was to create a swarm of robots that would be able to implement any swarming algorithm thrown at it - specifically the Partical Swarm Optimization algorithm. This algorithm would allow the robots to cooperatively search an area to find the lowest altitude.

![A rendering of an ET-NavSwarm robot.](./et-navswarm.jpg)

To achieve the goal, I was tasked with getting all of the devices on the robot to communicate with one another. The Arduino Mega was used to drive the motors and collect locational data. This data needed to be passed to the Raspberry Pi Model B+ for the swarming algorithm. Then a subset of the data needed to be broadcast to the rest of the swarm in mesh networking mode via Zigbee devices.

## What did I learn?

The ET-NavSwarm project was an invaluable experience - we were given the opportunity to visit NASA's Goddard Space Flight Center and present our research to NASA engineers. We were also given a tour including the Hubble Space Telescope Operations Control Center and the assembly of the James Webb Space Telescope in the world's largest clean room.

### Technologies

_Java, C, Google Protocol Buffers_