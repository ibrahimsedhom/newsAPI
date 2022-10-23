import { Request, Response } from "express";
import axios from "axios";

import config from "../config/config";
class UserController {
  // Create Fetch All News
  static fetchAllNews = async (req: Request, res: Response) => {
    try {
      // URl third party
      let URL = `https://newsapi.org/v2/top-headlines?country=eg&sortBy=publishedAt&apiKey=${config.apiKey}`;

      // response third party
      const resNews: object = await callAxios(URL);

      return res.status(200).json(resNews);
    } catch (error) {
      return res.status(500).send(error);
    }
  };

  // Search by in news
  static searchInNews = async (req: Request, res: Response) => {
    try {
      const { search } = req.body;
      if (!search) {
        return res.status(400).json("The Search input is required");
      }

      // // URl third party
      // let URL = `https://newsapi.org/v2/everything?q=${search}&sortBy=publishedAt&apiKey=${config.apiKey}`;

      // // response third party
      // const resNews: object = await callAxios(URL);

      // Use Debounced
      const debounceSearch = debounce(async (e) => {
        try {
          console.log(e);
          // URl third party
          let URL = `https://newsapi.org/v2/everything?q=${e}&sortBy=publishedAt&apiKey=${config.apiKey}`;

          // response third party
          const resNews: object = await callAxios(URL);
          return res.status(200).json(resNews);
        } catch (error) {
          return res.status(500).send(error);
        }
      }, 1000);

      // call debounce
      debounceSearch(search);
    } catch (error) {
      return res.status(500).send(error);
    }
  };
}
// Call Axios
const callAxios = async (url: string): Promise<object> => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// DECLARE DEBOUNCE FUNCTION
const debounce = <T extends (...args: any[]) => ReturnType<T>>(
  callback: T,
  timeout: number
): ((...args: Parameters<T>) => void) => {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, timeout);
  };
};

export default UserController;
