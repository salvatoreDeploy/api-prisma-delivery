import { Request, Response } from "express";
import { UpdateEndDateUseCase } from "./UpdateEndDateUseCase";
import { messages } from "../../utils/messages";

class UpdateEndDateController {
  async handle(request: Request, response: Response) {
    const updateEndDateUseCase = new UpdateEndDateUseCase();

    const { id } = request.params;
    const { id_delivery } = request;

    const result = await updateEndDateUseCase.execute({ id, id_delivery });

    if (result.count > 0) {
      return response.status(201).json({ message: messages.update.success });
    }

    return response.status(404).json({ message: messages.update.error });
  }
}

export { UpdateEndDateController };
