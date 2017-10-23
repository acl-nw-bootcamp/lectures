var pets = [];

function Pet ( petData ) {
    this.name = petData.name;
    this.type = petData.type;
    this.description = petData.description;
}

Pet.prototype.toHtml = function () {
    // console.log( 'we are giving Handlebars.compile:', $( '#pet-template' ).html() );
    var templateFiller = Handlebars.compile( $( '#pet-template' ).html() );
    // console.log( 'Handlebars.compile gives us a function:', template );
    
    this.face = "cute";
    var filledTemplate = templateFiller( this );
    // console.log( 'template returns: ', filledTemplate );

    return filledTemplate;
}

// loops through array of pet DATA and creates pet OBJECTS
petObjects.forEach( pet => {
    pets.push( new Pet( pet ) );
});

// loops through array of pet OBJECTS and runs .toHTML()
pets.forEach( pet => {

    $( '#pets' ).append( pet.toHtml() );
});