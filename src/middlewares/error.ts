import { NextFunction, Request, Response } from 'express';

export class HttpExceptions extends Error {
  status: number;

  message: string;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

const errorMidleware = (err: HttpExceptions, _req:Request, res:Response, _next: NextFunction) => {
  const status = err.status || 500;
  const { message } = err;
  res.status(status).json({ message });
};

export default errorMidleware;