import { Request, Response } from "express";
import User from "../models/User";
import jwt from "jsonwebtoken";
require("dotenv").config();

class UserController {
  public index(req: Request, res: Response): Response {
    return res.status(200).json({
      status: 1,
      response: "API Online",
    });
  }
  public async login(req: Request, res: Response): Promise<Response> {
    const { user, password } = req.body;

    if (user === undefined || user === "")
      return res.status(422).json({ response: "Usuário vazio" });
    if (password === undefined || password === "")
      return res.status(422).json({ response: "Senha vazia" });

    const response = await User.accessValidate(user, password);

    if (response.code != 1)
      return res.status(401).json({ response: response.message });

    let token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + 60 * 60, // 1 hour
        data: response.data,
      }, process.env.SECRET);

    return res.status(200).json({
      response: {
          message: response.message,
          token,
          data: {
              userId: response.data
          }
      }
    });
  }
}

export default new UserController();
