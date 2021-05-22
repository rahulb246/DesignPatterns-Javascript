/*
The Observer pattern is a design pattern that offers a subscription model in which objects (known as 'observers') can subscribe to an event (known as a 'subject') and get notified when the event occurs (or when the subject sends a signal). 
This pattern is the cornerstone of event driven programming.

The observer pattern consists of three ingredients — the “subject”, the observer, and the objects.
The relationship between these three ingredients works like this: 
think of the subject as the central piece of code that ultimately controls the running of everything.
The observer acts as a holding list for all the relevant objects.
*/

function Subject() {
  // arr of observer functions
  this.observers = [];
}

Subject.prototype = {
  subscribe: function(fn) {
    this.observers.push(fn);
  },
  unSubscribe: function(fnToRemove) {
    this.observers = this.observers.filter( fn => {
      if (fn !== fnToRemove) return fn;
    })
  },
  fire: function() {
    this.observers.forEach( fn => fn.call())
  }
}

const subject = new Subject();

function Observer1() {
  console.log("observer1 firing")
}

function Observer2() {
  console.log("observer2 firing")
}

subject.subscribe(Observer1);
subject.subscribe(Observer2);
subject.fire()
// "observer1 firing"
// "observer2 firing"

subject.unSubscribe(Observer2);
subject.fire()
// "observer1 firing"
