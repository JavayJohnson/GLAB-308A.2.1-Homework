
// Part 1: Humble Beginnings

const adventurer = {
name: "Robin",
health: 10,
inventory: ["sword", "potion", "artifact"]
}

function inventoryLog() {
    adventurer.inventory.forEach((item) => {
        console.log(item)
    })
}

inventoryLog()


const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat"
    }
    }

    adventurer.companion = {
        name: 'Frank',
        type: 'Flea',
        belongings: ['small hat', 'sunglasses']

    }

    const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: ...,
    roll (mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`)
    }
    }
    

    // Part 2: Class Fantasy
    
    class Character {
      constructor (name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
      }
    }

    const robin = new Character("Robin");
    robin.inventory = ["sword", "potion", "artifact"];
    robin.companion = new Character("Leo");
    robin.companion.type = "Cat";
    robin.companion.companion = new Character("Frank");
    robin.companion.companion.type = "Flea";
    robin.companion.companion.inventory = ["small hat", "sunglasses"];



    // Part 3: Class Features

    
    class Adventurer extends Character {
      constructor (name, role) {
        super(name);
        this.inventory.push("bedroll", "50 gold coins");
      }
      scout () {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
        }
 }

class Companion extends Companion Adventurer {
    constructor(companionName,type) {
        super();
        this.companionName = companionName
        this.type =type;

    }
}

cheer() {
    console.log(`You are AWESOME ${super.name}`);
}

const Leo = new Companion ("Leo","Cat");
Leo.cheer()



// Part 4: Class Uniforms
// Using static properties and methods, you can create uniform attributes for the class itself rather than instances of the class. Static properties are typically constant values that can be used elsewhere for reference, or utility methods that do not rely on the values of a specific class instance.
// Using the static keyword:
// Add a static MAX_HEALTH property to the Character class, equal to 100.
// Add a static ROLES array to the Adventurer class, with the values “Fighter,” “Healer,” and “Wizard.” Feel free to add other roles, if you desire!
// Add a check to the constructor of the Adventurer class that ensures the given role matches one of these values.
// Are there other static properties or methods that make sense to add to these classes?


static = ROLES + ["Fighter","Healer","Wizard", "Fire thrower"];
contructor (name, role){
    super(name)

    if (role +++ "Fighter" || role +++ "Healer" || role ==="Wizard" || role ==="Fire thrower")
        this.role =role;

}

const MAX_HEALTH = {
    health: 100,
}
class Character{
    static overallHealth(health) {
        console.log(health);
    }
}

class Character {
    static MAX_HEALTH = {
        health: 100,
    };

    static overallHealth() {
        console.log(this.MAX_HEALTH.health);
    }
}

















