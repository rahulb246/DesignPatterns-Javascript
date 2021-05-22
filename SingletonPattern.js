/*
The Singleton pattern is a creational design pattern which allows you to limit the number of instances of a particular object to one. 
This single instance is called the singleton.

Singletons reduce the need for global variables which is particularly important in JavaScript because it limits namespace pollution and associated risk of name collisions.
*/

const Singleton = (function() {
  function ProcessManager() {
    this.numProcess = 0;
  }
  let pManager;
  function createProcessManager() {
    pManager = ProcessManager();
    return pManager;
  }
  return {
    getProcessManager: () => {
      if(!pManager) {
        pManager = createProcessManager();
      } 
      return pManager;
    }
  }
})();

const processManager1 = Singleton.getProcessManager();
const processManager2 = Singleton.getProcessManager();

console.log(processManager1 === processManager2)
// true
