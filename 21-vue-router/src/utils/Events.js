/* 9. How to create create a global event bus

First we will create a map to keep track all of our events */

const events = new Map();

// Export an object that allows us to set up events and emit them

export default {
  $on(eventName, fn) {
    if (!events.has(eventName)) {
      events.set(eventName, []);
    }
    events.get(eventName).push(fn);
  },
  $off(eventName, fn) {
    throw { message: 'Not implemented' };
  },
  $emit(eventName, data) {
    if (events.has(eventName)) {
      events.get(eventName).forEach(fn => fn(data));
    }
  },
};

/* 10. So how do we add this object to our application? One thing we can do is add it to
all of the components where we want to use it and import it and. . . NO


too much work lol

instead we make it part of our application and use it from inside our component wherever we want
and import it anywhere else except main.js


*/
