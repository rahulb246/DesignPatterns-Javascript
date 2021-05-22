/*
A proxy object is an object that acts as an interface (or placeholder) for something else. 
The proxy could be an interface to anything: an API, a network connection, a large object in memory, or some other resource that is expensive or impossible to duplicate.

A proxy is a 'stand-in' object that is used to access the 'real' object behind the scenes. 
In the proxy, extra functionality can be provided, for example caching when operations on the real object are resource intensive, or checking preconditions before operations on the real object are invoked.
*/

function CryptoCurrencyAPI() {
  this.getValue = function(coin) {
    console.log("calling external API..");
    switch(coin) {
      case "Bitcoin":
        return "50,000$";
      case "Litecoin":
        return "5000$";
      case "Dogecoin":
        return "2$";
    }
  }
}

// const api = CryptoCurrencyAPI();

// console.log(api.getValue("Bitcoin"));
// console.log(api.getValue("Litecoin"));
// console.log(api.getValue("Dogecoin"));
// instead of doing the above way which will make network call everytime, have a proxy which maintains cache

// helps caching api call results which will reduce network calls
function CryptoCurrencyProxy() {
  this.api = new CryptoCurrencyAPI();
  this.cache = {};
  
  this.getValue = function (coin) {
    if (this.cache[coin] == null) {
      this.cache[coin] = this.api.getValue(coin);
    }
    return this.cache[coin];
  }
}

const proxy = new CryptoCurrencyProxy();

console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Dogecoin"));
console.log(proxy.getValue("Bitcoin"));

// "calling external API.."
// "50,000$"
// "calling external API.."
// "5000$"
// "calling external API.."
// "2$"
// "50,000$"
