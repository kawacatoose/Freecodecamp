//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
//Iterate through the array
for (var i = 0; i < contacts.length; i++ ) {
    //check if name exist
    if (contacts[i].firstName === name) {
        //check if property exists
        if ( contacts[i].hasOwnProperty(prop)) {
            //return property
            return contacts[i][prop]
        }
        else {
            //if property doesn't exist
            return "No such property";
        }
    }
}
//if name doesn't exists
return "No such contact";
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Harry", "likes");
