'use strict';

// use AJAX to load part of another HTML page
// $('#result').load( './toppings.html #batter' );


// use AJAX to load data from a JSON file
// .load()
// $.get()
// $.post()
// $.getScript()

// $.getJSON()
// $.ajax()

// $.getJSON('./data.json').then( runWhenDone, runWhenFails );

function runWhenDone (data) {
    appendToDOM( data );
    
    // store our data in localStorage
    localStorage.setItem( 'donuts', JSON.stringify( data ) );
}

function runWhenFails ( err ) {
    console.error( 'error', err);
}

// check if our data needs to be fetched
if ( !localStorage.donuts ) {
    $.ajax({
        type: 'GET',
        url: './data.json',
        success: runWhenDone,
        error: runWhenFails
    });
} else {
    appendToDOM( JSON.parse( localStorage.donuts ) );
}

function appendToDOM ( data ) {
    data.forEach(function (ele) {
        ele.topping.forEach(function (topping) {
            $('#result').append('<h3>' + topping.type + '</h3>')
        })
    });
}