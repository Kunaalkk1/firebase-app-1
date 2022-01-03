// Writes the user's public IP to a hidden field on the webpage, but it is recorded only when user clicks download
$.getJSON("https://api.ipify.org?format=json", function(data) {
      $("#my-ip").html(data.ip);
  })