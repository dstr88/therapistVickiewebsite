//parent info for minors toggle.

window.onload = function() {
    document.getElementById('ifYes').style.display = 'block';
    document.getElementById('ifNo').style.display = 'none';
  
}
  
  function yesnoCheck() {
    if (document.getElementById('yesCheck').checked) {
      document.getElementById('ifYes').style.display = 'block';
      document.getElementById('ifNo').style.display = 'none';
    } else if (document.getElementById('noCheck').checked) {
      document.getElementById('ifNo').style.display = 'block';
      document.getElementById('ifYes').style.display = 'none';
  
    }
  }

  //phone validation

  let formatPhoneNumber = (str) => {
    //Filter only numbers from the input
    let cleaned = ('' + str).replace(/\D/g, '');
   
    //Check if the input is of correct length
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    };
  
    return null
  };

