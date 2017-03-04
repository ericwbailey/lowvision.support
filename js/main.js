var siteTitle = 'lowvision.support';

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
        if (theUrl.indexOf("http") === -1) {
            theUrl = 'http://' + theUrl;
        }

        // Loads the entered URL
        $('#c-website-viewer').attr('src', theUrl);
        document.title = siteTitle + ' - ' + theUrl.replace('http://', '');
        console.log('Viewing ' + theUrl + '.');

        // Removes initial disabled state of the low vision condition select menu
        $('#c-controls--condition').removeAttr('disabled');

        // Removes background image
        $('#section--website-preview').removeClass('o-page-section--background');

        // Removes error state if valid URL is entered
        $('[for="c-controls--url"]').removeClass('js-form-error--label');
        $('#c-controls--url').removeClass('js-form-error--field');
        $('[name="c-controls--submit"]').removeClass('js-form-error--button');
    }

    // Displays error state if the URL isn't valid
    else {
        $('[for="c-controls--url"]').addClass('js-form-error--label');
        $('#c-controls--url').addClass('js-form-error--field').focus().select();    // Focus and select the text for easier fixing
        $('[name="c-controls--submit"]').addClass('js-form-error--button');
        document.title = siteTitle + ' - Please use a valid URL';
        console.log(theUrl + ' is not a valid URL!');
    }
}


// Loads the URL when the submit button is pressed
$('[name="c-controls--submit"]').click(getUrl);


// Applies the selected condition
$('#c-controls--condition').change(function() {
    $('#c-website-viewer').attr('class', 'c-website-viewer' + ' ' + 'has-' + this.value.replace('option-', ''));
    console.log('Applying condition ' + this.value.replace('option-', '') + '.');
});
