function walkDog(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const walkedDog = true;

            if(walkedDog){
                resolve("You walk the dog 🐕");
            } 
            else{
                reject("You didn't walk the DOG");
            }

        }, 1500);
    });
}

function cleanKitchen(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const kitchenCleaned = true;

            if(kitchenCleaned){
                resolve("You clean the Kitchen 🧹");
            } 
            else{
                reject("You didn't clean the kitchen");
            }

        }, 2500);
    });
}

function takeOutTrash(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const trashOut = true;

            if(trashOut){
                resolve("You take out the trash 🚮");
            }
            else {
                reject("You didn't take out the trash");
            }
            
        }, 500);
    });
}

async function doChores(){

    try{
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);

    console.log("You finish all the chores")
    }
    catch(error){
        console.log(error)
    }
}
doChores()