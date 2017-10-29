## **Week 3: The Model**
# Class 6: AJAX & JSON

[Schedule](#schedule) | [Announcements](#announcements) </br>
[Objectives](#learning-objectives) | [Yesterday vs Today](#yesterday-vs-today) </br>
[Lecture Notes](#notes) | [Readings](#readings)

<hr></hr>

## Schedule
1. Objectives and Stand Up
1. Code Review
1. WRRC
1. AJAX and JSON
1. Lab Prep

### Announcements
* Surveys?
* One on ones / walk and talks / check ins!
* Random useful resource: [techterms.com](https://techterms.com/)
* Questions? Resources to share?
<hr></hr>

## Learning Objectives
* Identify when apps need persistence, to improve the UX and isolate the model logic in the code base.
* Explain how the browser uses the request-response (WRRC) cycle to render an HTML file or AJAX call.
* Implement AJAX to get data to display.
* Declare variables using ES2015 `let` and `const`.

### Yesterday vs Today
| Yesterday we... | Today we will... |
| --------------- | ---------------- |
| Loaded our data from JS objects. | Load our data from a JSON file. |
| Didn't have persistent data. | Make our data persist using LocalStorage. |
| Declared variables using the keyword `var`. | Declare variables using the keywords `let` and `const`. |

<hr></hr>

## Notes

* Topic 1 - WRRC *(Web Request Response Cycle)*
    * How browsers turn a url into a rendered picture
    * The request-response cycle
    * Understanding the parts of a URL/URI.
    * Basic aspects of the request/response cycle.
    * 3 parts of an HTTP request
    * 3 parts of an HTTP response
    * Awareness of DNS

* Topic 2 - Using AJAX
    * What
    * Why
    * How
    * JSON with AJAX
    * Demo - How
        * Load data as JSON
        * convert to JSON
        * Load Async
        * caching data
        * conditionally reload based on eTag
        * Understanding why/how AJAX is used.
        * Understanding the asynchronous nature of callback functions.
        * Familiarity with jQuery deferred methods:** .done(), .fail(), .always().



## Readings
* JS & jQ, Ch 8: pp.367-408 (Context: 384-387; Essential: 367-383, 388-399; Reference:400-408)
* [MDN localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) (Essential)


## Lab
[Lab 6: AJAX & JSON](https://github.com/acl-301n-fall-2017/lab-06-ajax-json)
