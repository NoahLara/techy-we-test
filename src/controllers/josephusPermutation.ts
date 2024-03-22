import { Request, Response } from "express";

interface JosephusResponse {
  lastElement: number;
  eliminationHistory: number[][];
}

export const josephusPermutation = (req: Request, res: Response) => {
  const { n, k }: { n: Array<number>; k: number } = req.body;

  const peopleToDie = n;
  const eliminationHistory: number[][] = [peopleToDie.slice()];

  let currentPerson = 0;
  while (peopleToDie.length > 1) {
    currentPerson = (currentPerson + k - 1) % peopleToDie.length;
    peopleToDie.splice(currentPerson, 1)[0];
    eliminationHistory.push(peopleToDie.slice());
  }

  const response: JosephusResponse = {
    lastElement: peopleToDie[0],
    eliminationHistory,
  };

  return res.status(200).json(response);
};
