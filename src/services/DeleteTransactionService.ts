import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transaction = getRepository(Transaction);
    const findId = await transaction.findOne({ where: { id } });

    if (!findId) {
      throw new AppError("There's no transaction with that id");
    }

    await transaction.remove(findId);
  }
}

export default DeleteTransactionService;
