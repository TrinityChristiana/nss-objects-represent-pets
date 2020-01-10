// Create an object that represents your pet.
const pet = {
    name: "Luna", // Name property with a string value.
    species: "dog", // Species property with a string value.
    nickname: ["Skeeter", "Diego", "Scooner", "Moon"], // Nicknames property with an array value. Array contains strings.
    age: 2, // Age property with an integer value

    // Pick three behaviors that your pet has and add three keys to your pet object. Each key's value should be a function that logs to the console or displays a window alert. Your choice.
    bark: function(){
        console.log("Bark");
    },
    eat:function (){
        console.log("I'm Eating");

    },
    sleep:function(){
        console.log("Let me sleep!");
    }
};

// Once you have define the properties, invoke each behavior.

pet.bark();
pet.eat();
pet.sleep();