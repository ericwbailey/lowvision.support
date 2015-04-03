// Gets the URL from the Website URL field
function getUrl(event) {
    var theUrl = $('#c-controls--url').val();
    var validUrl = is.url(theUrl);

    // Disables page refresh on submit
    event.preventDefault();

    // Change the iFrame's src to the entered URL
    if (validUrl === true) {

        // Hacky js nonsense that prepends http to the url if it's missing
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf#Description
        if (theUrl.indexOf("http") == -1) {
            theUrl = "http://" + theUrl;
        }
        $('#c-website-viewer--iframe').attr('src', theUrl);

    }
    // Displays error state if the URL isn't valid
    else {
        $('[for="c-controls--url"]').addClass('js-form-error--label');
        $('#c-controls--url').addClass('js-form-error--field').focus().select();
        $('[name="c-controls--submit"]').addClass('js-form-error--button');
    }
}


// Loads the url when the submit button is pressed
$('[name="c-controls--submit"]').click(getUrl);


