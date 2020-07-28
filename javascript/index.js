var runOnce = 0;

$(".elf").on("mouseover", function() {

  if (runOnce === 0){

    var guestName = prompt("Hello um... what's your name?");
    alert("Well then, hello " + guestName + "!");
    runOnce++;

  }

})

$(".elf").on("click", function() {

  window.open("https://i.ytimg.com/vi/FyebXIWitCk/maxresdefault.jpg");

});
