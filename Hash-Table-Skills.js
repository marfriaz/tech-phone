///////// Hash Table //////////
/* 
 This question is about JSON transformation in JavaScript. 
 Given JSON data that represents a list of endorsement objects, 
 we want to transform it into a list of skill objects sorted by count, descending.

An endorsement object contains two fields:

skill – string
user – string
A skill object contains three fields:

skill – string
user – list of user names
count – the size of user list

*/
// Given
const endorsements = [
  { skill: "css", user: "Bill" },
  { skill: "javascript", user: "Chad" },
  { skill: "javascript", user: "Bill" },
  { skill: "css", user: "Sue" },
  { skill: "javascript", user: "Sue" },
  { skill: "html", user: "Sue" },
];
const skills = [];
const hash = {}; // Maps skill name --> list of users who endorsed the skill

// Loop through the endorsements
endorsements.forEach((endorsement) => {
  // Get the skill and user
  const { skill, user } = endorsement;
  const skillObj = { skill };

  // Check if the skill is in the hash
  if (!hash[skill]) {
    skills.push(skillObj); // Push the skill object into the array
    hash[skill] = [user]; // Set the initial users array
  } else {
    hash[skill].push(user); // Add the user as an endorser for the skill
  }
});

// Sort the array using the hash to determine endorsement count
skills.sort((a, b) => {
  // Add the user lists to the endorsement objects
  a.users = hash[a.skill];
  b.users = hash[b.skill];

  // Add the endorsement count the count value while we’re sorting
  a.count = a.users.length;
  b.count = b.users.length;

  return b.count - a.count;
});

// Result
console.log(skills);
// [
//   { skill: 'javascript', users: ['Chad', 'Bill', 'Sue'], count: 3 },
//   { skill: 'css', users: ['Bill', 'Sue'], count: 2 },
//   { skill: 'html', users: ['Sue'], count: 1 },
// ]
