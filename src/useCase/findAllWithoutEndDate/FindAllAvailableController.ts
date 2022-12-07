import { Request, Response } from "express";
import { FindAllAvailableUseCase } from "./FindAllAvailableUseCsase";

class FindAllAvailableController {
  async handle(request: Request, response: Response) {
    const findAllAvailable = new FindAllAvailableUseCase();

    const result = await findAllAvailable.execute();

    return response.status(200).json(result);
  }
}

export { FindAllAvailableController };
