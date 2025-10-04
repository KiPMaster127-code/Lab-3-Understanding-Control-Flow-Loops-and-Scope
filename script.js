//Step 2

let number = 0;

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}


let day = 3; 

// Step 3

switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
}

// Step 4
for (let i = 1; i <= 5; i++) {
    console.log("For loop:", i);
}


let i = 1;
while (i <= 5) {
    console.log("While loop:", i);
    i++;
}


let j = 1;
do {
    console.log("Do While loop:", j);
    j++;
} while (j <= 5);

// Step 5
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Breaking at", i);
        break;
    }
    console.log("Break loop:", i);
}


for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Skipping", i);
        continue;
    }
    console.log("Continue loop:", i);
}

// Step 6

let globalVar = "I'm global!";

function scopeExample() {
    let localVar = "I'm local!";
    console.log(globalVar); 
    console.log(localVar);  
}

scopeExample();

console.log(globalVar); 