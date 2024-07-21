//the singleton pattern consists of an object that can't be
//copied or modified and as single source of truth can be used in whole application

//eg.1->db connection

//eg.2->whole application need a configuration that canot be changed.
const config = {
    start: () => {
        console.log('start')
    },
    update: () => {
        console.log('upadte')
    }
}

Object.freeze(config);

config.start()
config.update()

//after freezing we cant modify this object.

//eg.3

let counter = 0;

const counterObj = {
    getCount: () => counter,
    increment: () => ++counter,
    decrement: () => --counter
}

//freeze obj to ensure object is not modifiable
const singletonobj = Object.freeze(counterObj);

//make it globally accesable as single source of truth.
export default singletonobj;
