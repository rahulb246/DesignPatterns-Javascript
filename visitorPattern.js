/*
The Visitor pattern allows you to add or define new functionality to an object without changing the code for that object. 
The new logic resides in a external object or function called the 'visitor'.

Visitors are useful when you are trying to extend the functionality of a library or framework. 
If the object you want to extend provides some kind of 'accept' method that accepts a visitor object/function, you can grant the visitor object access to the receiving object's internal properties. 
The visitor can then modify the behavior of the receiving object. 
This pattern allows you to provide an easy way for clients to implement future extensions to that object.
*/

function Employee(name, salary) {
  this.name = name;
  this.salary = salary;
}

Employee.prototype = {
  getSalary: function() {
    return this.salary;
  },
  setSalary: function(sal) {
    this.salary = sal;
  },
  accept: function(visitorFunc) {
    visitorFunc(this);
  }
}

const emp1 = new Employee("Emp1", 100000);
console.log(emp1.getSalary());
// 100000

// visitor function
function ExtraSalary(emp) {
  emp.setSalary(emp.getSalary() * 2);
}

emp1.accept(ExtraSalary);
console.log(emp1.getSalary());
// 200000
