let letters = [];
let word = "racecar";
let rword = "";


// use push method
for(let i = 0; i < word.length; i++){
    letters.push(word[i]);
    // console.log(word);
}
// console.log(letters);
// console.log(word);


// use pop method

for(let i = 0; i < word.length; i++){
    rword += letters.pop();

}
// console.log(rword);

// console.log(letters);
letters.pop();
// console.log(letters);

if(word === rword){
    // console.log(word + " is a paldindrome");
}else{
    // console.log(word + " is not a palindrome");
}




// creates a stack 

var Stack  = function(){
    this.count = 0;
    this.storage = {};

    // adds a value onto the end of the stack 
    this.push = function(value){
        this.storage[this.count] = value;
        this.count++;
    }

    //removes and returns the value at the end of the stack 
    this.pop = function(){
        if(this.count === 0){
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }
    this.size = function(){
        return this.count;
    }

    //returns the value at the end of the stack 
    this.peek = function(){
        return this.storage[this.count - 1];
    }
}

var myStack = new Stack();


myStack.push(1);

myStack.push(2);
// console.log((myStack));
// console.log(JSON.stringify(myStack));

// console.log('---after----');


// console.log(myStack.peek());
// // console.log(myStack);
// console.log(myStack.pop());
// // console.log(myStack);
// console.log(myStack.peek());
// // console.log(myStack);

// myStack.push('freecodecamp'); 
// // myStack.push('Grigore');

// console.log(myStack.size());
// // console.log(myStack);
// console.log(myStack.peek());

// console.log(myStack.pop());
// // console.log(myStack);
// console.log(myStack.peek());
// // console.log(myStack);


function mySet(){
    
    var collection = [];
    
    this.has = function(element){
        return(collection.indexOf(element) !== -1);
    };

    this.values = function(){
        return collection;
    };

    this.add = function(element){
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };

    this.remove = function(element){
        if(this.has(element)){
            index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }
    }


}