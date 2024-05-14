// Create a Person constructor that has three properties: name, job, and age.
// Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
// Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a back-end developer".

class Person {
    constructor(name, job, age) {
      this.name = name;
      this.job = job;
      this.age = age;
    }

    exercise() {
      console.log("Running is fun! - said no one ever");
    }

    fetchJob() {
      console.log(`${this.name} is a ${this.job}`);
    }
  }
  const person1 = new Person("Yamilet",26,"back-end developer")
  person1.fetchJob();
  person1.exercise();
  



// Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.
// Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false.
// Also, give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.
// Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer is not, e.g.,
// should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.
// Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the programmer knows.


  class Programmer extends Person {
    constructor(name, job, age, languages) {
      super(name, job, age);
      this.languages = languages;
      this.busy = true;
    }

    completeTask() {
      this.busy = false;
    }

    acceptNewTask() {
      this.busy = true;
    }

    offerNewTask() {
      if (this.busy) {
        console.log(`${this.name} can't accept any new tasks right now.`);
      } else {
        console.log(`${this.name} would love to take on a new responsibility.`);
      }
    }

    learnLanguage(newLanguage) {
      this.languages.push(newLanguage);
    }

    listLanguages() {
      console.log(`${this.name} knows ${this.languages.join(', ')}`);
    }
  }


  // Testing
  const john = new Programmer("Nikki", "Front-end Developer", 19, ["JavaScript", "HTML", "CSS"]);

  john.fetchJob();
  john.exercise(); 
  john.completeTask();
  john.offerNewTask(); 

  const alice = new Programmer("Tommy", "Back-end Developer", 25, ["Java", "Python"]);

  alice.fetchJob(); 
  alice.learnLanguage("React");
  alice.listLanguages(); 
  alice.acceptNewTask();
  alice.offerNewTask(); 