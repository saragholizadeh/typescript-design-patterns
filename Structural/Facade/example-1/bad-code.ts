class AuthController {
  async login(email: string, password: string) {
    const user = await this.findUserByEmail(email);
    if (!user || user.password !== password) {
      throw new Error('Invalid credentials');
    }

    if (!user.isActive) {
      throw new Error('User is blocked');
    }

    const token = this.generateJwt(user.id);

    console.log(`User ${user.id} logged in at ${new Date()}`);

    await this.saveSession(user.id, token);

    return {
      userId: user.id,
      token,
    };
  }

  private async findUserByEmail(email: string) {
    return { id: 1, email, password: '1234', isActive: true };
  }

  private generateJwt(userId: number) {
    return `jwt-token-for-${userId}`;
  }

  private async saveSession(userId: number, token: string) {
    console.log('Session saved', userId, token);
  }
}
