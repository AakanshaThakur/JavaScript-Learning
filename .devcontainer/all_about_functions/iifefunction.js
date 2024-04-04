// Immediately Invoked Function Expression (IIFE)


(function good(){
    // named IIEF
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB disconnected ${name}`);
}) ('from computer')