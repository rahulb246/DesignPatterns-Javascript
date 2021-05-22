/*
(Behavioral Design Pattern)
The Mediator pattern provides central authority over a group of objects by controlling how these objects interact with each other. 
The "central" object is known as the 'mediator'. 
In the mediator design pattern, a mediator object encapsulates how other types of objects interact, without the need for those objects to be aware the implementation of other objects.
The mediator pattern is useful in scenarios where every object needs to be aware of any state change in any other object in the group.
*/

function Member(name) {
  this.name = name;
  this.chatRoom = null;
}

Member.prototype = {
  send: function(message, toMember) {
    this.chatRoom.send(message, this, toMember);
  },
  receive: function(message, fromMember) {
    console.log(`${fromMember.name} to ${this.name}: ${message}`);
  }
}

function ChatRoom() {
  this.members = [];
}

ChatRoom.prototype = {
  addMember: function(member) {
    this.members[member.name] = member;
    member.chatRoom = this;
  },
  send: function(message, fromMember, toMember) {
    // can have additional step of events before sending
    toMember.receive(message, fromMember);
  }
}

const chatRoom = new ChatRoom();

const messi = new Member("Messi");
const rahul = new Member("Rahul");
const iniesta = new Member("Iniesta");

chatRoom.addMember(messi);
chatRoom.addMember(rahul);
chatRoom.addMember(iniesta);

messi.send("hey rahul", rahul);
rahul.send("hey iniesta", iniesta);
// "Messi to Rahul: hey rahul"
// "Rahul to Iniesta: hey iniesta"
