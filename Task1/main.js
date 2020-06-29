        /* Task 1 */

function person1(salary1){
    this.salary1 = salary1;
    this.moneyCount =  function (){
        return (salary1 * 24) * 365;
    }
}

function person2(salary2){
    this.salary2 = salary2;
    this.moneyCount = function(){
        return (salary2 * 12);
    }
}
person2.prototype = new person1();

person1.prototype.getInfo = function(){
    return ('Ця людина отримує ' + this.salary1 + ' $ в годину , і заробляє ' + this.moneyCount() + ' $ на рік.')
}

person2.prototype.getInfo = function(){
    return ('Ця людина отримує ' + this.salary2 + ' $ в місяць і заробляє ' + this.moneyCount() + ' $ на рік.')
}

var Person1 = new person1(4.5);
var Person2 = new person2(3000);

console.log(Person1.moneyCount())
console.log(Person2.moneyCount())
console.log(Person1.getInfo())
console.log(Person2.getInfo())

