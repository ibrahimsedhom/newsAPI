import { Request, Response } from "express";
import axios from "axios";

import config from "../config/config";
class UserController {
  // Create New User
  static fetchAllNews = async (req: Request, res: Response) => {
    try {
      let URL = `https://newsapi.org/v2/top-headlines?country=eg&sortBy=publishedAt&apiKey=${config.apiKey}`;
      const resNews: object = await callAxios(URL);

      return res.status(200).json(resNews);
    } catch (error) {
      return res.status(500).send(error);
    }
  };

  // Login
  static searchInNews = async (req: Request, res: Response) => {
    try {
    } catch (error) {
      return res.status(500);
    }
  };
}

const callAxios = async (url: string): Promise<object> => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default UserController;
