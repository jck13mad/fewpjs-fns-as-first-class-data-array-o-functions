const wakeDog = (dogName, dogBreed) => {
    const str = `Wake ${dogName} the ${dogBreed}`;
    console.log(str);
    return str; 
}

const leashDog = (dogName, dogBreed) => {
    const str = `Leash ${dogName} the ${dogBreed}`;
    console.log(str);
    return str; 
}

const walkToPark = (dogName, dogBreed) => {
    const str = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(str);
    return str; 
}

const throwFrisbee = (dogName, dogBreed) => {
    const str = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(str);
    return str; 
}

const walkHome = (dogName, dogBreed) => {
    const str = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(str);
    return str; 
}

const unleashDog = (dogName, dogBreed) => {
    const str = `Unleash ${dogName} the ${dogBreed}`;
    console.log(str);
    return str; 
}


var routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dog, breed) {
    return routine.map(fn => fn(dog, breed));
}