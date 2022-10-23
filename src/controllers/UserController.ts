import { Request, Response } from "express";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import config from "../config/config";
class UserController {
  // Create New User
  static newUser = async (req: Request, res: Response) => {
    try {
      //Get parameters from the body
      let { username, password } = req.body;

      //Validade if the parameters are ok
      if (!(username && password)) {
        return res.status(400).json("All input is required");
      }

      // Create token
      const token = jwt.sign({ user_id: username }, config.TOKEN_KEY, {
        expiresIn: "1h",
      });

      //Here implement Database
      // 1- find the user in DB
      // 2- check that user doesnt exists
      // 3- Encrypt user password
      // const encryptedPassword = await bcrypt.hash(password, 10);
      // 4- save in db

      // return new user
      return res.status(200).json({ token: token });
    } catch (error) {
      return res.status(500);
    }
  };

  // Login
  static login = async (req: Request, res: Response) => {
    try {
      //Get parameters from the body
      let { username, password } = req.body;

      //Validade if the parameters are ok
      if (!(username && password)) {
        return res.status(400).json("All input is required");
      }

      //Here implement cycle login
      // check that user exists in DB
      // check that the password matches
      // bcrypt.compare(password, db.password)

      // Create token
      const token = jwt.sign({ user_id: username }, config.TOKEN_KEY);
      return res.status(200).json({ token: token });
    } catch (error) {
      return res.status(500);
    }
  };
}

export default UserController;
