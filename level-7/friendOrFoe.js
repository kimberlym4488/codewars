// function friend(friends){
//     //array of friends.
//     //find friends with 4 letters in their name
//     let newFriends = friends.filter(element => element.length === 4 && typeof(element === "string"))
//     //what if I am given a number? Add in the typeof(element) === "string"
//     //return array of friends with 4 letters in their name.
//     console.log(newFriends)

//     return newFriends

//   }

//   function friend(friends){
//     //array of friends.
//     //what if I am given a number?
//     //find friends with 4 letters in their name
//   return friends.filter(element => element.length === 4 && typeof(element === "string"))
//     //return array of friends with 4 letters in their name.

//   }

const friend = (friends) =>
  friends.filter(
    (element) => element.length === 4 && typeof (element === "string")
  );
//array of friends.
//what if I am given a number?
//find friends with 4 letters in their name
//return array of friends with 4 letters in their name.

module.exports = friend;
