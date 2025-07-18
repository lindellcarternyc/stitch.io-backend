import * as express from "express";
export {};

declare global {
  namespace Express {
    interface Request {
      currentUser: any;
      /*
          other variables (if needed)
        */
    }
  }
}
