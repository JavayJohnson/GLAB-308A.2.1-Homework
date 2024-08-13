
// Part 1: Humble Beginnings
// Let’s model a simple adventurer with basic properties such as health and an inventory. 
// We will call the adventurer “Robin.”

const adventurer = {
name: "Robin",
health: 10,
inventory: ["sword", "potion", "artifact"]
}

// Nested arrays are useful, but so are nested objects. Let’s give Robin a companion to travel with – a furry friend they call “Leo.”

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat"
    }
    }

    // Now we have created an array within an object within an object within an object, but that is not all we can do! Objects can also have their own functions, called methods, which define specific actions that object can take.
    // Give Robin the following method:

    const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: ...
    roll (mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`)
    }
    }
    

    // Part 2: Class Fantasy
    // Let’s take a moment to analyze the data above. What are the common features of each object?
    // When creating classes, begin by searching for the simplest form your data takes. Remember, you can add specificity later by extending the classes.
    // Start with a Character class, which will define generic character entities. Robin and their companions all have a name, so the Character class should definitely include name as one of its properties. At this stage, we will also make the decision that every character should have health (which we will standardize to a maximum of 100, and an inventory (even if the inventory is empty).
    // Here is what the basic Character class looks like so far, including a constructor function that allows us to create new characters with whatever name we would like:
    
    class Character {
      constructor (name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
      }
    }


    
    //  Every character should also be able to make rolls. Add the roll method to the Character class.
    // Now, we can re-create Robin using the Character class!

    const robin = new Character("Robin");
    robin.inventory = ["sword", "potion", "artifact"];
    robin.companion = new Character("Leo");
    robin.companion.type = "Cat";
    robin.companion.companion = new Character("Frank");
    robin.companion.companion.type = "Flea";
    robin.companion.companion.inventory = ["small hat", "sunglasses"]






    // Part 3: Class Features
    // When extending a class, the “child” class inherits all properties of its parents. This means that we do not need to account for the name, health, inventory, or roll method of Character children classes.
    // Let’s begin by creating an Adventurer class. What attributes might be specific to an adventure, but that not all characters have? Take a look at our example below, and expand upon it with your own properties and methods.
    
    class Adventurer extends Character {
      constructor (name, role) {
        super(name);
        // Adventurers have specialized roles.
        this.role = role;
        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins");
      }
      // Adventurers have the ability to scout ahead of them.
      scout () {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
      }
    }


class Companion extends Companion Adventurer {
    constructor(name,type){
        super(name);
    }

}

cheer() {
    console.log('You are AWESOME ${super.name}');
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






















