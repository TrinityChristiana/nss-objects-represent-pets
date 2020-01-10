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
    },
    favoriteToys: [], // Give your pet a new key named favoriteToys whose value is an empty array.
    play: function (toy){
        if (toy.includes("fuzzy")){
            this.favoriteToys.push(toy);
        }
    } // Now define another new key named play whose value is a function with a single parameter named toy.

};

// Once you have define the properties, invoke each behavior.

pet.bark();
pet.eat();
pet.sleep();
pet.play("fuzzy watch");
console.log(pet.favoriteToys);

// The function should determine if your pet liked the toy, and if s/he does, then it should be added to the favoriteToys array using the this keyword (see example above).
// Here's an example. If your pet is a cat, then he likely only likes furry toys, so you could put an if..then condition in the play() method that checks if the word "fuzzy" is in the argument value. If it is, it gets added to the array.