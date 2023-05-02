class Ninja{
    constructor(name, health = 10, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName(){
        console.log(`My name is ${this.name} and I will be #1!`)
    }
    showStats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }
    drinkSake(){
        this.health += 10;
        console.log(`Time for some sake!`)
    }
}

const ninja = new Ninja("David")

console.log(ninja)
ninja.sayName()
ninja.drinkSake()
ninja.showStats()

class Sensei extends Ninja{
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10){
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }
    speakWisdom(){
        super.drinkSake();
        console.log(`What one programmer can do in one month, two programmers can do in two months.`)
    }
}

const sensei = new Sensei("Master Kyle")
console.log(sensei)
sensei.sayName()
sensei.speakWisdom()
sensei.showStats()