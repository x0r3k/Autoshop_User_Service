import express from 'express';

import { testDBQuery } from './test.controller';

// eslint-disable-next-line import/prefer-default-export
export const router = express.Router();

router.get('/test/query', testDBQuery);
