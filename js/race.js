$(document).ready(function() {


  $('button').on('click', function() {


    function Animal(name, speed, focus) {
      this.name = name;
      this.speed = speed;
      this.focus = focus;
      this.position = 0;
      this.isFocused = function() {
        return Math.floor(Math.random() *10) < this.focus;
      }

      this.advance = function () {
        if (this.isFocused()) {
        this.position += this.speed;

        $(this.name).css("left", this.position)
        console.log(this.position);
        }
      }
    }

  var rabbit1 = new Animal("Rocky", 10, 1);
  var rabbit2 = new Animal("Speedy", 9, 2);
  var rabbit3 = new Animal("The Flash", 9, 3);

  var userRabbitName = $('#name').val();


  var rabbitUser = new Animal(
                              userRabbitName,
                              parseInt($('#speed').val()),
                              parseInt($('#focus').val())
                              )

  var turtle1 = new Animal("Myrtle", 2, 10);
  var turtle2 = new Animal("Phillip", 3,8);
  var turtle3 = new Animal("Albert", 1, 9);

  var meters = 100;

  $(userRabbit).html(userRabbitName);

  var theRace = setInterval(function() {runRace()}, 150);

  function runRace() {

  if ((rabbit1.position < meters) &&
        (rabbit2.position < meters) &&
        (rabbit3.position < meters) &&
        (rabbitUser.position < meters) &&
        (turtle1.position < meters) &&
        (turtle2.position < meters) &&
        (turtle3.position < meters))
   {
    rabbit1.advance();
    rabbit2.advance();
    rabbit3.advance();
    rabbitUser.advance();
    turtle1.advance();
    turtle2.advance();
    turtle3.advance();

    $('#a1').css('left', rabbit1.position + '2px');
    $('#a2').css('left', rabbit2.position + '2px');
    $('#a3').css('left', rabbit3.position + '2px');
    $('#userRabbit').css('left', rabbitUser.position + '2px');
    $('#a4').css('left', turtle1.position + '2px');
    $('#a5').css('left', turtle2.position + '2px');
    $('#a6').css('left', turtle3.position + '2px');
  } else {
    clearInterval(theRace);
  }


if ((rabbit1.position >= meters) ||
    (rabbit2.position >= meters) ||
    (rabbit3.position >= meters) ||
    (rabbitUser.position >= meters) ||
    (turtle1.position >= meters) ||
    (turtle2.position >= meters) ||
    (turtle3.position >= meters)) {



if (rabbitUser.position >= meters) {

  $(".results1").html('<br>Your rabbit racer won the race! </br> Congratulations!');
} else {
  $(".results1").html("<br>Your rabbit racer put up a valiant effort, <br> but you didn't win this time.");
}


$(".results2").html("<br>Here are the standings from todays's race: <br><br> The Rabbit Racers:<br>" +
      rabbit1.name + " finished at " + rabbit1.position + "<br>" +
      rabbit2.name + " finished at " + rabbit2.position + "<br>" +
      rabbit3.name + " finished at " + rabbit3.position + "<br>" +
      rabbitUser.name + " finished at " + rabbitUser.position + "<br><br>" +
      "The Turtle Racers:<br>" +
      turtle1.name + " finished at " + turtle1.position + "<br>" +
      turtle2.name + " finished at " + turtle2.position + "<br>" +
      turtle3.name + " finished at " + turtle3.position
      );
    };
  };
      $("#results1").show();
      $("#results2").show();
  });



  });


