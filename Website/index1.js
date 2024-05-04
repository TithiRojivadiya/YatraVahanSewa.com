document.addEventListener('DOMContentLoaded', function(){
    var rideButtons = document.querySelectorAll('.instantride .btn');
    for (var i = 0; i < rideButtons.length; i++) {
        rideButtons[i].addEventListener('click', function(event) {
            event.preventDefault();
            var box = this.closest('.box');
            var key = box.querySelector('h3').textContent.trim();
            var valueString = box.querySelector('h2').textContent.trim();

                var value = parseFloat(valueString.replace('₹', '').replace(',', ''));

            console.log(value);


            var url = 'form_ir.html?key=' + encodeURIComponent(key) + '&value=' + encodeURIComponent(value);
            window.location.href = url;
        });
    }
});