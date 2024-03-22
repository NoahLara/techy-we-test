import { Request, Response } from "express";
import { DefaultResponse } from "../interfaces/default-response";
import { Triangle, ValidTriangle } from "../interfaces/triangle";

const defaultResponse: DefaultResponse<boolean | ValidTriangle> = {
  success: false,
  message: "",
  data: null,
};

export const isValidTriangle = (req: Request, resp: Response) => {
  defaultResponse.success = false;
  defaultResponse.message = "";
  defaultResponse.data = null;

  const { ladoA, ladoB, ladoC }: Triangle = req.body;

  console.log("|> BODY REQUEST: ", req.body);

  if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
    const perimeter = ladoA + ladoB + ladoC;
    const semiperimeter = perimeter / 2;

    const area = Math.sqrt(
      semiperimeter *
        (semiperimeter - ladoA) *
        (semiperimeter - ladoB) *
        (semiperimeter - ladoC)
    );

    if (area <= Number.EPSILON) {
      defaultResponse.message =
        "The sides length are not enough to build a triangle";
      return resp.status(400).json(defaultResponse);
    }

    defaultResponse.success = true;
    defaultResponse.message = "Valid triangle";
    defaultResponse.data = {
      area,
      perimeter,
      semiperimeter,
    };

    return resp.status(200).json(defaultResponse);
  } else {
    console.log("error en loingiutd tringule");
    defaultResponse.message =
      "The sides length are not enough to build a triangle";
    return resp.status(400).json(defaultResponse);
  }
};
