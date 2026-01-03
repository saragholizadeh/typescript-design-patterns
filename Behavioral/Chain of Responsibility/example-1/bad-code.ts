class ApiController {
  handleRequest(request: any) {
    if (!this.isAuthenticated(request)) {
      throw new Error('Unauthenticated');
    }

    if (this.isRateLimited(request)) {
      throw new Error('Too many requests');
    }

    if (!this.isValid(request)) {
      throw new Error('Invalid data');
    }

    if (!this.hasPermission(request)) {
      throw new Error('Forbidden');
    }

    return 'Request handled successfully';
  }

  private isAuthenticated(req: any) {
    return !!req.user;
  }

  private isRateLimited(req: any) {
    return false;
  }

  private isValid(req: any) {
    return !!req.body;
  }

  private hasPermission(req: any) {
    return req.user?.role === 'admin';
  }
}
