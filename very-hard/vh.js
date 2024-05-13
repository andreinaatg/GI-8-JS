// Create a Person constructor that has three properties: name, job, and age.
// Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
// Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a back-end developer".

class Person {
    constructor(name,age,job){
        this.name = name;
        this.age = age;
        this.job = job;
    }
exercise(){
    console.log("Running is fun! - said no one ever")
}
fetchJob(){
    console.log(`${this.name} is a ${this.job}`)
}
}

const person1 = new Person("Justin",26,"Singer")
person1.fetchJob();
person1.exercise();


// Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.
// Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false.
// Also, give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.
// Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer is not, e.g.,
// should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.
// Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the programmer knows.

class Programmer extends Person {
    constructor(name,age,job,languages){
        super(name,age,job);
        this.languages = languages;
        this.busy = true

    }

    completeTask(){
        this.busy = false;
    }
    acceptNewTask(){
        this.busy = true;
    }
    offerNewTask(){
        if(this.busy){
            console.log(`${this.name} can't accept any new tasks right now.`)
        } else {
            console.log(`${this.name} would love tou take on a new responsibility`)
        }
    }
    //adding an array because they;re asking for a list of langueages 
    learnLanguage(){
        this.languages = ["JavaScript", "HTML","CSS","React"]
    }
    listLanguages(){
        this.languages;
    }
}


//   Test it out - can you create different programmers and run all the methods on them?
//  Does each programmer maintain their own properties properly and independently of the other programmers?
//   Bonus - ES6 Syntax: Use ES6 Syntax in your answer. Feel free to add new methods or properties to incorporate the syntax.
const programmer1 = new Programmer("Niki", 20, "Front End Developer",["HTML","CSS","React"])
const programmer2 = new Programmer("Bob", 35, "Front-end Developer", ["HTML", "CSS"]);


programmer1.fetchJob(); // Output: Alice is a Full-stack Developer
programmer1.offerNewTask(); // Output: Alice would love to take on a new responsibility.
programmer1.acceptNewTask(); // Changing busy status
programmer1.offerNewTask(); // Output: Alice can't accept any new tasks right now.
programmer1.learnLanguage(); // Adding a new language

// Testing methods on programmer2
programmer2.fetchJob(); // Output: Bob is a Front-end Developer
programmer2.completeTask(); // Changing busy status
programmer2.offerNewTask(); // Output: Bob would love to take on a new responsibility.
console.log(programmer2.listLanguages()); // Output: ["HTML", "CSS"]
