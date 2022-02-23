import { NextFunction, Request, Response } from 'express';

const checkOrder = (req: Request, res: Response, next: NextFunction) => {
  const { products } = req.body;
  const checkIsArray = Array.isArray(products);

  if (products === undefined) {
    return res.status(400).json({ error: 'Products is required' });
  }

  if (!checkIsArray) {
    return res.status(422).json({ error: 'Products must be an array of numbers' });
  }

  if (!products.length) {
    return res.status(422).json({ error: 'Products can\'t be empty' });
  }

  next();
};

export default checkOrder;