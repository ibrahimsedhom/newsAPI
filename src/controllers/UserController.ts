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

      //Encrypt user password
      //const encryptedPassword = await bcrypt.hash(password, 10);

      // Create token
      const access_token = jwt.sign({ username }, config.TOKEN_KEY, {
        expiresIn: "1h",
      });

      // return new user
      return res.status(200).json({ access_token: access_token });
    } catch (error) {
      return res.status(500);
    }
  };
}

export default UserController;
