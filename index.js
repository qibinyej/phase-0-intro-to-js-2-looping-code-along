const name = ['Guadalupe', 'Ollie', 'Aki'];
const event = 'surprise';

function writeCards(name, event) {
    let message = [];
    for (let i=0; i < name.length; i++) {
         message.push (`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    };
    return message;
}

console.log(writeCards(name, event));

function countDown(){
    let i = 10;
    while (i >= 0) {
        console.log(i)
        i--;
    };
}
console.log(countDown());









