document.getElementById('agree-checkbox').addEventListener('change', function() {
    if (this.checked) {
      document.getElementById('payment-options').style.display = 'block';
    } else {
      document.getElementById('payment-options').style.display = 'none';
    }
  });
  
  document.getElementById('submit-payment').addEventListener('click', function() {
    // You can add your payment processing logic here
    var selectedPaymentMethod = document.getElementById('payment-method').value;
    alert('Payment method selected: ' + selectedPaymentMethod);
  });