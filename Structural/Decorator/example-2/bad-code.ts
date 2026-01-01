interface User {
  name: string;
  isPremium?: boolean;
  isAdmin?: boolean;
  isPlus?: boolean;
}

function getUserRole(user: User): string {
  let role = "User";

  if (user.isPremium) {
    role += " + Premium";
  }

  if (user.isAdmin) {
    role += " + Admin";
  }

  if (user.isPlus) {
    role += " + Plus";
  }

  return role;
}

// Usage
const user1 = { name: "Alice", isPremium: true, isAdmin: true };
const user2 = { name: "Bob", isPlus: true };

console.log(getUserRole(user1)); // "User + Premium + Admin"
console.log(getUserRole(user2)); // "User + Plus"

// Problem 
// This becomes hard to maintain over time and must be edited every time a new role is added — violating Open/Closed Principle.