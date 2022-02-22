import { NextFunction, Request, Response } from 'express';

const validatLevel = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;
  if (level === undefined) {
    return res.status(400).json({ error: 'Level is required' });
  } 
  if (typeof level !== 'number') {
    return res.status(422).json({ error: 'Level must be a number' }); 
  }
  if (level <= 0) {
    return res.status(422).json({ error: 'Level must be greater than 0' }); 
  }
  next();
};

export default validatLevel;