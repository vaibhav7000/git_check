// console.log(this);


// function log() {
//     console.log(this);
// }

// log();

const thor = {
    firstName: "Thor",

    // normal functions when called through the objects, the property / method binds function this to the object
    greet() {
        console.log('Inner', this.firstName);

        const newGreet = () => {
            console.log('Outer', this.firstName); // gets "this" from the surrounding environment
        }

        const finalGreet = function() {
            console.log('vc', this); // global object
        }
        return newGreet;
    },

    greetFinal: () => {
        console.log(this, 'greet final'); // we should not use arrow functions if we will be using "this" inside it because since it does not has its own this it will pick from the surroundings
    }, // when using the arrow fn as the object method, it ( calling that fn using object ) does not directly binds the "this" keyword with that object, whereas this happens when we are using normal fn ( the direct method of object ), since the arrow fn does not gets the bind "this" it picks up the value from the surroundings

    getNewOb: function() {

        return this;
    }
}

// const newGreet = thor.greet();
// newGreet();

thor.greetFinal();

const newGreet = thor.greet;

// newGreet()();

// const newData = new thor.getNewOb();
// console.log(newData);


const alex = {
    name: 'alex',
    friend: {
        greet: function() {
            console.log('Hello');
            console.log(this.name);
        }
    },
    friends: {
        greet: () => {
            console.log('vcvc', this); // global object {}
        }
    }
}

alex.friend.greet();
alex.friends.greet();

/**
 * When a node js process is started, it creates its own Global Execution Context where its has all the environment Variables and this keyword setsup to the global object in the Call Stack


 * this keyword value depends on where we are using it
 * When we invoke normal functions, it have its own this keyword inside its functional execution context
 * 
 * But when executing the arrow function, there is no this keyword inside its functional execution context and hence gets this keyword from the outer environment ( parent context ) from where it is created
 * 
 * When we create a normal fn, if it is not present inside the fn than its this will be points to the Global Object, but if that fn is like factory fn or constructor fn than than inside the fn will point to the empty object
 * 
 * this keyboard value depends on functional execution context
 * 
 * Arrow fns should not to be used with "this" keyword because when they are executed they does not have their own "this" in the functinal execution context and hence they get the "this" value from the surroundings
 * 
 * When creating or using the normal function, inside that fn its this keyword will point to the Global object
 * 
 * 
 * 
 * 
 */


/**
 * When we set's a github repository locally on the system then git setups up the "remote" to the url of that repository. That remote points to the url, and is also called "origin".
 *
 * 
 * => To see the url of the github repository we git remote -v -> this gives the url,
 * 
 * but when we do git remote -> it provides us origin 
 * 
 * git push origin main -> this means the git is asked to push the local code from the main branch to the origin ( url ) on branch "main",
 * 
 * setting upstream is making the git to remember to always push / pull the code on / from the origin ( url ) on the main branch
 * git --set-upstream origin main / git -u origin main
 * 
 * 
 * Suppose when we clone a git repository, then inside the repo we make remote = url of the repo, and origin is set to the url, origin is equivalent to the url
 * 
 * Local Change
 * 
 * dev-vaibhav
 * 
 * dev-vaibav-2
 * 
 * main feature
 * 
 * Never use rebase command on the main branch
 * 
 * Git rebase 2 
 * 
 * 
 * Main Branch Code
 * 
 * NewFeatureMin code
 */