import { Request, Response } from 'express';
import db from '../../sequelize/models';

export async function testDBQuery(req: Request, res: Response) {
  try {
    const response = await db.Test.findAll();
    console.log(123);
    res.json(response);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
}

export const test1 = 'tesy';
