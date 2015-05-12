function Animal(name, speed, focus) {
  this.name = name;
  // below values are scale: 0 - 9
  this.speed = speed;
  this.focus = focus;
  this.position = 0;
  this.isFocused = function() {
    // return TRUE if random number is less than Animal's focus
    return (Math.floor(Math.random() * 10) < this.focus);
  }
  this.advance = function() {
    if (this.isFocused()) {
      this.position += this.speed;
    }
  }
  this.progressReport = function() {
    return (this.name + " is at: " + this.position);
  }
}

var rabbit = new Animal("Rocky", 8, 3);
var turtle = new Animal("Myrtle", 3, 7);
var meters = 100;

while (rabbit.position < meters && turtle.position < meters) {
  rabbit.advance();
  turtle.advance();
  console.log(rabbit.progressReport() + " -- " + turtle.progressReport());
}
