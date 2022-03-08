class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;

    }
}


class Unit extends Card {
    constructor(name, cost, power, resilience) {
        super(name, cost);
        this.power = power;
        this.resilience = resilience;

    }
    attack(target) {
        console.log(this.name + ` has attacked ` + target.name);
        return this.power - target.resilience;
    }
}
const ninja1 = new Unit("Red Belt Ninja", "3", "3", "4");

const ninja2 = new Unit("Black Belt Ninja", "4", "5", "4");

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude

    }
    play(target) {
        if (target instanceof Unit) {
            console.log(this.text);
            if (this.magnitude >= 0) {
                target.resilience += this.magnitude
            }
            else {
                target.power += this.magnitude;
            }
        }
        else {
            if (this.stat == `resilience`) {
                target.resilience += this.magnitude
            }
            else {
                target.power += this.magnitude
            }
        }
    }
}
const effect1 = new Effect("Hard Algorithm", "2", "Increase target's resilience by 3", "resilience", "+3");

const effect2 = new Effect("Unhandled Promise Rejection", "1", "Reduce target's resilience by 2", "resilience", "-2");

const effect3 = new Effect("Pair Programming", "2", "Increase target's power by 2", "power", "+2");

effect1.play(ninja1);
effect2.play(ninja1);
effect3.play(ninja1);
ninja1.attack(ninja2);
