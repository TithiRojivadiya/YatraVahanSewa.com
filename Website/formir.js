document.addEventListener('DOMContentLoaded', function(){
    // Function to get URL parameters
    function getUrlParams() {
        var params = {};
        var url = window.location.href;
        var query = url.split('?')[1];
        if (query) {
            query = query.split('&');
            for (var i = 0; i < query.length; i++) {
                var pair = query[i].split('=');
                params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
            }
        }
        return params;
    }

    // Get URL parameters
    var urlParams = getUrlParams();

    // Get existing key and value parameters
    var key = urlParams['key'];
    var valueString = urlParams['value'];

    // Check if valueString is defined
    if (valueString !== undefined) {
        console.log('Key: ', key);
        console.log('Value: ', valueString);

        // Get the submit button element
        var submitBtn = document.getElementById('submit-btn');

        // Add an event listener to the submit button
        submitBtn.addEventListener('click', function(event) {
            // Prevent the default form submission behavior
            event.preventDefault();

            // Construct the URL with key and value parameters
            var url = 't&c.html?key=' + encodeURIComponent(key) + '&value=' + encodeURIComponent(valueString);

            // Redirect to the constructed URL
            window.location.href = url;
        });
    } else {
        console.error('Value string is undefined');
    }
});