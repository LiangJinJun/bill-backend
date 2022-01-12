class BaseResponse {
  public status: number;
  public message: string;
  public data: any;
}

export class SuccessResponse extends BaseResponse {
  constructor(data: any) {
    super();
    this.status = 200;
    if (typeof data === 'string') {
      this.message = data;
    } else {
      this.message = 'success';
      this.data = data;
    }
  }
}

export class ErrorResponse extends BaseResponse {
  constructor(message: string) {
    super();
    this.status = 400;
    this.message = message;
    this.data = null;
  }
}

export class AuthSuccessResponse extends BaseResponse {
  constructor(message: string, token: string) {
    super();
    this.status = 200;
    this.message = message;
    this.data = { token };
  }
}
