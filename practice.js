var event = require('events')

var util = require('util');

var Person = function (name) {
    this.name = name
}

util.inherits(Person, event.EventEmitter);

var will = new Person('will')
var tom = new Person('tom')
var mariah = new Person('mariah')
var people = [will, tom, mariah]

people.forEach(function (person) {
    person.on('speak', function (mssg) {
        console.log(person.name + ' said: ' + mssg)
    })
})

will.emit('speak', 'where the party at?')