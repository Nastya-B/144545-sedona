
  var button = document.querySelector(".search-button");
  var popup = document.querySelector(".search-form");

  button.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.toggle("show");
  })
