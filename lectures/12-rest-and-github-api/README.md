## **Week 6: The Controller**
# Class 12: RESTful endpoints and External APIs

[Schedule](#schedule) | [Announcements](#announcements) </br>
[Objectives](#learning-objectives) | [Yesterday vs Today](#yesterday-vs-today) </br>
[Lecture Notes](#notes) | [Readings](#readings)


<hr></hr>

## Schedule
1. Objectives and Stand Up
1. Code Review
1. REST
1. API's
1. Lab Prep

### Announcements
* Questions? Resources to share?

<hr></hr>

## Learning Objectives
* Understand HTTP and the central role that REST plays.
* Use RESTful routes for a web service, to retrieve their own github repos
* Design RESTful endpoints for their own blogging app


### Yesterday vs Today
| Yesterday we... | Today we will... |
| --------------- | ---------------- |
| Used data from our database or file system. | Use data from a third-party API! |

<hr></hr>

## Notes

Topic 1 - REST & APIs

    * REST
        * Constraints - what makes something RESTful?
            * client - server relationship
            * stateless server
            * uses HTTP methods
            * URLs are easy to understand
            * Data is sent as JSON or XML
            
    * API's
        * What is an API?
        * What is a RESTful API?
            * an API that follows the following guidelines:
                * has a base url
                * uses HTTP methods: GET, PUT, POST, DELETE 
                * sends an internet media type (like JSON or XML)
        * [programmableweb.com directory](https://www.programmableweb.com/category/all/apis)
        * Examples:
            * [the cat api (note: returns XML!)](http://thecatapi.com/)
            * [marvel api (needs a key)](http://developer.marvel.com/docs)

    * Demo - How
        * Head to GitHub and see how to request a token to be able to access the API appropriately.
           * Login at GitHub.com
           * In the upper right, click on your face, and head to settings
           * Scroll to the Developer Settings section on the left side.
           * Click on Personal access tokens
           * Now click Generate new token, towards the upper right
           * Confirm login.
           * Enter token description as ‘repos’ or something simple.
           * Check the single ‘repo’ check box for repo scope (this will automatically check the sub boxes).
           * Now scroll to the bottom and select Generate token
           * Save this token! GitHub will only display it to you **one time**

## Readings
- ["How I Explained REST to My Brother*"](https://gist.github.com/brookr/5977550)
- [https://developer.github.com/guides/getting-started](https://developer.github.com/guides/getting-started/)
- [What is OAuth? (watch videos at the bottom*)](http://searchsoa.techtarget.com/definition/OAuth)


## Lab
[Lab 12: RESTful endpoints and External APIs](https://github.com/acl-301n-fall-2017/lab-12-REST-and-APIs)
