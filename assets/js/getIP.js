$.getJSON("https://api.ipify.org?format=json", function(data) {
      $("#my-ip").html(data.ip);
  })