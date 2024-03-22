import { Request, Response } from "express";
import { DefaultResponse } from "../interfaces/default-response";

const defaultResponse: DefaultResponse<string> = {
  success: false,
  message: "",
  data: null,
};

export const longestConcatenatedString = (req: Request, resp: Response) => {
  defaultResponse.success = false;
  defaultResponse.message = "";
  defaultResponse.data = null;

  const { variable, R }: { variable: string[]; R: number } = req.body;

  if (
    !variable ||
    !Array.isArray(variable) ||
    variable.length === 0 ||
    !R ||
    R <= 0
  ) {
    defaultResponse.message = "Invalid input data";
    return resp.status(400).json(defaultResponse);
  }

  let longestString = "";
  for (let i = 0; i <= variable.length - R; i++) {
    const concatenatedString = variable.slice(i, i + R).join("");
    if (concatenatedString.length > longestString.length) {
      longestString = concatenatedString;
    }
  }

  if (longestString.length === 0) {
    defaultResponse.message = "No concatenated string found";
    return resp.status(404).json(defaultResponse);
  }

  defaultResponse.success = true;
  defaultResponse.message = "Longest concatenated string found";
  defaultResponse.data = longestString;

  return resp.status(200).json(defaultResponse);
};
