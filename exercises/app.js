//console.log("Hello World");
let num= -0; 

if(num > 0 ) {
    console.log("positive")
} else if(num < 0 ) {
    console.log("negative")
} else {
    console.log("not negative or positive");
}
//ACCESS GRANTED

const allowedAge = 20;

if(allowedAge >= 18 ) {
    console.log("access granted. welcome aboard!")
} else {
    console.log("You are too young to access this content")
}

let number;
if (number === 0){
    console.log("zero")
}else if (number >0){
    if (number > 100){
        console.log("possitive and greater than 100")
    }else if(number < 100){
        console.log("possiive and smaller than 100")
    } else {
        console.log("possitive number")
    }
} else if (number < 0){
    console.log("nagative number");
} else {
    console.log("please put in a number")
}