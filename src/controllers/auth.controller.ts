import { NextFunction, Request, Response } from "express";

import * as authService from "../services/auth.service";

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await authService.login(req.body);
    res.status(200).send(data);
  } catch (err) {
    next(err);
  }
};

const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await authService.signup(req.body);
    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
};

const authController = Object.freeze({
  login,
  signup,
});

export default authController;
