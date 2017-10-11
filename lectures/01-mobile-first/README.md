<s>## **Week 1: The View**
# Class 1: Mobile-First Design & SMACSS

[Schedule](#schedule) | [Announcements](#announcements) </br>
[Objectives](#learning-objectives) | [Yesterday vs Today](#yesterday-vs-today) </br>
[Lecture Notes](#notes) | [Readings](#readings)
[Lab](#Lab)


<hr></hr>

## Schedule
1. Objectives & Announcements
1. 301 Intro 
1. Responsive Web Design (RWD)
1. Lab Prep: Git Flow and TODO's

### Announcements
* Questions?

<hr></hr>

## Learning Objectives
- Discuss the differences between mobile first design, responsive web design, and adaptive web design.
- Create a flexible layout using the following: percentage based media, media queries, and fluid layout.
- Scale a website to its viewport using the meta tag.
- Streamline development using **live-server**.
- Organize CSS using SMACSS.
- Display icons on a website using icon fonts, and specifically IcoMoon.
- Display icons on a website using the psuedo elements `:before` and `:after`.

### Yesterday vs Today
| Yesterday we... | Today we will... |
| --------------- | ---------------- |
| <ul><li> Created websites from scratch, based off of a problem domain </li> <li> Opened our page from the terminal using `start` or `open`</li> <li> Organized our CSS all willy-nilly</li></ul> | <ul><li> Work on an existing code base!</li><li> "Serve" our page using live-server</li><li> Implement MFD and RWD techniques</li><li>Organize our CSS using SMACCS</li></ul>

<hr></hr>

## Notes

#### Topic 1 - KICKOFF
* Overview
  * Welcome to Code 301
  * Includes details about code of conduct, facilities, stacked learning overview
  * Student Introductions
    * What is your name? (and how can we remember it?)
    * Why are you here? (What is the why behind the why?)
    * Fun fact?
  * TA Introductions
    * What is your name? (and how can we remember it?)
    * Why are you here? (What is the why behind the why?)
    * Fun fact?
  * Instructor & Assistant Instructor Introductions
    * Previous experience.
    * Technologies you are passionate about.
    * Random fun facts.

#### Topic 2 - Responsive Web Design
* Overview
  * RWD
    * Responsive web design
    * Discuss flexible vs. adaptive layouts
    * Discuss importance of responsive development
      * Larger coverage area
      * Multiple device support
    * Discuss Chrome device emulation (and other emulation options - ie: x-code device simulator)
  * Viewports
    * Discuss the meta viewport tag and it’s width and scale options
  * Flexible Layouts
    * Discuss modern 960px grid systems
    * Discuss common responsive frameworks (Bootstrap, Foundation)
    * Discuss width based resizing and scalability of elements
  * Media Queries
    * Discuss min-width media query usage for mobile first design and development
    * High level overview of other media queries and options
  * Flexible Media
    * Discuss max-width based creation of scalable images
  * CSS Fundamentals
    * Discuss display types
      * Block vs Inline vs Inline-block
    * Discuss the box model
      * Overview (or whiteboard) the differences between margin, padding, content, border
    * Discuss positioning
      * Static, relative, absolute, fixed, inherit
      * Demonstrate the creation of an overlay by using a relative parent for the container and an absolutely positioned child for the overlay
* SMACSS
  * Discuss the importance of modular CSS
  * Discuss base, layout, module, state, and theme concepts
* Implementation and use of an icon font
  * [icomoon.io](https://icomoon.io/)
* Design basics and setting up a simple color palette
  * [Adobe Color CC](https://color.adobe.com/)
    * Other color combination tools are fine to show as well.

#### Topic 3 - Lab Prep & Git Flow
* Live-server
  * Install it with npm: `npm install -g live-server`
  * Or, install atom-live-server package and launch from Atom
  * What's it do?
  * How to use it?
* Git flow for Lab
  * Talk about "What is a remote?"
    * "What remotes do we have?" (`origin` is default; we'll have `upstream` in the labs, and when we do deployment on Class 13, we'll add `heroku`)
    * Review:
      * What does `git pull upstream master` do?
      * Example Git flow for pair assignments are located in the lab README.


## Readings

* [Shay Howe’s intro to RWD](http://learn.shayhowe.com/advanced-html-css/responsive-web-design/) (Essential)
* [Dale Sande's Intro to SMACSS](http://www.anotheruiguy.com/ux-design-dev/_book/smacss/README.html) (Essential)
* [SMACSS Official Documentation](https://smacss.com/) (Reference)
* In-Depth (optional) [Dale Sande’s intro](http://www.anotheruiguy.com/ux-design-dev/_book/rwd/README.html) to RWD (Reference)


## Lab

[Lab: Mobile First Design](https://github.com/acl-301n-fall-2017/lab-01-mobile)</s>
