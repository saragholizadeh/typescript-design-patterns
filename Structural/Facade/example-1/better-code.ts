class UserService {
  async validateCredentials(email: string, password: string) {
    if (password !== '1234') return null;
    return { id: 1, email, isActive: true };
  }
}

class TokenService {
  generate(userId: number): string {
    return `jwt-token-for-${userId}`;
  }
}

class SessionService {
  async store(userId: number, token: string) {
    console.log('Session stored', userId, token);
  }
}

class SecurityLogger {
  logLogin(userId: number) {
    console.log(`User ${userId} logged in at ${new Date()}`);
  }
}

class AuthFacade {
  constructor(
    private userService: UserService,
    private tokenService: TokenService,
    private sessionService: SessionService,
    private logger: SecurityLogger,
  ) {}

  async login(email: string, password: string) {
    const user = await this.userService.validateCredentials(email, password);
    if (!user) {
      throw new Error('Invalid credentials');
    }

    if (!user.isActive) {
      throw new Error('User is blocked');
    }

    const token = this.tokenService.generate(user.id);
    this.logger.logLogin(user.id);
    await this.sessionService.store(user.id, token);

    return {
      userId: user.id,
      token,
    };
  }
}

// usage

const authFacade = new AuthFacade(
  new UserService(),
  new TokenService(),
  new SessionService(),
  new SecurityLogger(),
);

authFacade.login('test@mail.com', '1234');
