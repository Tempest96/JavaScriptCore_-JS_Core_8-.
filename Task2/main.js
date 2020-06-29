function helm(radius) {
  this.radius = radius;

  this.setRadius = function (radius1) {
    radius = radius1;
  };
  this.getRadius = function (radius1) {
    return radius;
  };
  this.calcDiametr = function () {
    return this.radius * 2;
  };
}

function wheel(width, radius1) {
  this.width = width;
  this.radius1 = radius1;
  this.setWidth = function (width1) {
    width = width1;
  };
  this.getWidth = function (width1) {
    return width;
  };
  this.calcDiametr = function () {
    return this.radius1 * 2;
  };
}

function body(lenght, height) {
  this.lenght = lenght;
  this.height = height;

  this.setLenght = function (lenght1) {
    lenght = lenght1;
  };
  this.getLenght = function (lenght1) {
    return lenght;
  };
  this.setHeight = function (height1) {
    height = height1;
  };
  this.getLHeight = function (height1) {
    return height;
  };
}

function car(year, color, model, helmSize, wheelSize, bodyLength,bodyHeight) {
  this.year = year;
  this.color = color;
  this.model = model;
  var fHelm = new helm(helmSize);
  this.sizeHelm = function () {
    return fHelm.calcDiametr();
  };
  var fWheel = new wheel("", wheelSize);
  this.sizeWheel = function () {
    return fWheel.calcDiametr();
  };
  var fLenght = new body(bodyLength, "");
  this.carLenght = function () {
    return fLenght.setLenght();
  };
  this.carLenght = function () {
    return fLenght.getLenght();
  };
  var fHeight = new body('',bodyHeight);
  this.carHeight = function(){
      return fHeight.setHeight();
  };
  this.carHeight = function(){
      return fHeight.getLHeight();
  }
  this.showAll = function () {
    return (
      "Ваша машина - " +
      this.model +
      ". Рік випуску - " +
      this.year +
      ". Колір машини : " +
      this.color +
      ". Діаметр руля : " +
      this.sizeHelm() +
      "см. Діаметр колес : " +
      this.sizeWheel() +
      " дюйми. Довжина кузова : " +
      this.carLenght() +
      "mm , Висота кузова : " +
      this.carHeight() +
      'mm'
    );
  };
}

var Helm = new helm(5);
var Wheel = new wheel("", 6);
var Body = new body();
var newCar = new car(2010, "Чорний", "BMW", 19, 11, 4700,1707);

console.log(newCar.showAll());
