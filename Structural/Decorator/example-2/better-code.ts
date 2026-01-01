interface UserRole {
  getRole(): string;
}

class BasicUser implements UserRole {
  getRole(): string {
    return "User";
  }
}

class RoleDecorator implements UserRole {
  constructor(protected user: UserRole) {}

  getRole(): string {
    return this.user.getRole();
  }
}

class PremiumDecorator extends RoleDecorator {
  getRole(): string {
    return `${super.getRole()} + Premium`;
  }
}

class AdminDecorator extends RoleDecorator {
  getRole(): string {
    return `${super.getRole()} + Admin`;
  }
}

class PlusDecorator extends RoleDecorator {
  getRole(): string {
    return `${super.getRole()} + Plus`;
  }
}

// Usage
let userOne: UserRole = new BasicUser();
userOne = new PremiumDecorator(userOne);
userOne = new AdminDecorator(userOne);

let userTwo: UserRole = new BasicUser();
userTwo = new PlusDecorator(userTwo);

console.log(userOne.getRole()); // "User + Premium + Admin"
console.log(userTwo.getRole()); // "User + Plus"
