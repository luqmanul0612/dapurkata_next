import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

const extractToken = (headerValue: string): string => {
  const tokenPrefix = "Bearer ";
  if (headerValue.startsWith(tokenPrefix)) {
    return headerValue.slice(tokenPrefix.length);
  }
  return "";
};

export const auth = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const token = req.headers["authorization"];
    if (!token) throw new Error("Token not found");
    const decoded = jwt.verify(
      extractToken((token as string) ?? ""),
      process.env.JWT_SECRET as string
    );
    if (!decoded) throw new Error("Invalid token");
  } catch (error: any) {
    res.status(401).send({
      statusCode: "401",
      message: error?.message,
    });
  }
};
