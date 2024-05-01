document.getElementById('agree-checkbox').addEventListener('change', function() {
    if (this.checked) {
      document.getElementById('payment-options').style.display = 'block';
    } else {
      document.getElementById('payment-options').style.display = 'none';
    }
  });
  
  


  document.addEventListener('DOMContentLoaded', function(){
    
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

    
    var urlParams = getUrlParams();

    
    var key = urlParams['key'];
    var valueString = urlParams['value'];
    var value = parseFloat(valueString);
   
    console.log('Key:', key);
    console.log('Value:', value);
    value = value + (value*0.02);
    document.getElementById('submit-payment').addEventListener('click', function() {

      var selectedPaymentMethod = document.getElementById('payment-method').value;
      alert('Payment method selected: ' + selectedPaymentMethod);
      var b = document.getElementById('bill1');
      b.innerText = `Bill`;
      var a = document.getElementById('bill2');
      a.innerText = `Total : ${value}`;
    });
});
