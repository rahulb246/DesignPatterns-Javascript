/*
The factory pattern is a creational design pattern that uses factory methods to create objects — rather than by calling a constructor.

*/
function Attacker(name)
{
  this.name = name;
  this.position = "Forward";
}

function Midfielder(name)
{
  this.name = name;
  this.position = "Midfield";
}

function Defender(name)
{
  this.name = name;
  this.position = "Defence";
}

function FootballPlayerFactory()
{
  this.create = (name, type) => {
    switch(type)
    {
      case 1:
        return new Attacker(name);
      case 2:
        return new Midfielder(name);
      case 3:
        return new Defender(name);
    }
  }
}

function say()
{
  console.log("Hi, I am " + this.name + " and I play in " + this.position)
}

const footballPlayerFactory = new FootballPlayerFactory()
const footballPlayers = []

footballPlayers.push(footballPlayerFactory.create("Messi", 1))
footballPlayers.push(footballPlayerFactory.create("Inesta", 2))
footballPlayers.push(footballPlayerFactory.create("Xavi", 2))
footballPlayers.push(footballPlayerFactory.create("Maldini", 3))

footballPlayers.forEach( emp => {
  say.call(emp)
})
