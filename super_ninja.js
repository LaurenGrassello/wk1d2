class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 0;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(`Hi my name is ${this.name}`)
    }
    showStats(){
        console.log(`My stats are, health : ${this.health}, speed : ${this.speed}, strength: ${this.strength}`)
    }
    drinkSake(){
        this.health += 10;
    }
}
const ninja1 = new Ninja("Hyabusa", "100", "3", "3");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
console.log(ninja1)

class Sensei extends Ninja {
    constructor(name){
        super(name)
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10
    }
    speakWisdom(){
        superSensei.drinkSake();
        console.log(`Sometimes the best way to solve your own problems is to help someone else.`);
    }
}
// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();