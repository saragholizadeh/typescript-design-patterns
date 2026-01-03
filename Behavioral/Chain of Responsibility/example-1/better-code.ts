interface Handler {
  setNext(handler: Handler): Handler;
  handle(request: any): string | null;
}

abstract class AbstractHandler implements Handler {
  private nextHandler: Handler | null = null;

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  handle(request: any): string | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return null;
  }
}

class AuthHandler extends AbstractHandler {
  handle(request: any) {
    if (!request.user) {
      throw new Error('Unauthenticated');
    }
    return super.handle(request);
  }
}

class RateLimitHandler extends AbstractHandler {
  handle(request: any) {
    if (request.ip === 'blocked') {
      throw new Error('Too many requests');
    }
    return super.handle(request);
  }
}

class ValidationHandler extends AbstractHandler {
  handle(request: any) {
    if (!request.body) {
      throw new Error('Invalid data');
    }
    return super.handle(request);
  }
}

class PermissionHandler extends AbstractHandler {
  handle(request: any) {
    if (request.user.role !== 'admin') {
      throw new Error('Forbidden');
    }
    return 'Request handled successfully';
  }
}

const auth = new AuthHandler();
const rateLimit = new RateLimitHandler();
const validate = new ValidationHandler();
const permission = new PermissionHandler();

auth
  .setNext(rateLimit)
  .setNext(validate)
  .setNext(permission);

auth.handle({
  user: { role: 'admin' },
  body: { data: 'test' },
  ip: 'ok',
});
