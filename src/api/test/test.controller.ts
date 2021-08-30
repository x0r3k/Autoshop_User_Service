import { Request, Response } from 'express';
import db from '../../sequelize/models';

export async function testDBQuery(req: Request, res: Response) {
  try {
    const response = await db.aaRole.create({
      // roleId: 1,
      roleCd: `Test${new Date().valueOf()}`,
      roleName: `Test${new Date().valueOf()}`,
      // note: null,
    });
    console.log(response);
    res.json(response);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
}

export const test1 = 'tesy';
