const checkBox = document.querySelector('.form-check-input');

checkBox.addEventListener('change', function() {

  const prices = document.querySelectorAll('.card-title span');
  
  if(checkBox.checked) {
    
    const annually = [199.99, 249.99, 399.99];
    
    prices.forEach(function(price, index) {
      
      price.textContent = annually[index];

    })
  } else {

    const monthly = [19.99, 24.99, 39.99];
    
    prices.forEach(function(price, index) {
      
      price.textContent = monthly[index];

    })
  }
})