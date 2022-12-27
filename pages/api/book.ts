import { NextApiRequest, NextApiResponse } from "next"
import { httpCatchError } from "../../lib/httpCatchError";
import prisma from "../../lib/prisma";
import { saveFile } from "../../lib/saveFile";
import { stringPath } from "../../lib/util";
import { addBookSchema, deleteBookSchema, updateBookSchema } from "../../lib/validationSchemas";
import fs from "fs";
import { auth } from "../../lib/auth";


export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET": {
      const { bookId, slug } = req.body
      if (bookId || slug) {
        const book = await prisma.book.findUnique({ where: { id: bookId, slug } })
        if (book) res.status(200).json({ statusCode: "200", data: book })
        else res.status(404).json({ statusCode: "404", message: "Book not found" })
      } else {
        const books = await prisma.book.findMany()
        res.status(200).json({ statusCode: "200", data: books })
      }
      break;
    }
    case "POST": {
      auth(req, res)
      try {
        await addBookSchema.validate(req.body);
        const { pathFile } = await saveFile({ dir: "/public/uploads/books", file: req.body.cover, name: `${new Date().getTime()}-${req.body?.title}`, limit: 1048576 })
        const addBook = await prisma.book.create({
          data: {
            title: req.body.title || undefined,
            authorName: req.body.authorName || undefined,
            price: req.body.price || undefined,
            stock: req.body.stock || undefined,
            publisher: req.body.publisher || undefined,
            description: req.body.description || undefined,
            coverUrl: pathFile || undefined,
            printType: req.body.status || undefined,
            numberOfPages: req.body.numberOfPages || undefined,
            isbn: req.body.isbn || undefined,
            slug: stringPath(`${req.body.publisher}-${req.body.title}`)
          }
        })
        res.json({ status: "200", data: addBook })
      } catch (error) {
        httpCatchError({ error, res })
      }
      break;
    }
    case "PUT": {
      auth(req, res)
      try {
        await updateBookSchema.validate(req.body);
        const findBook = await prisma.book.findUnique({ where: { id: req.body.bookId } })
        let pathFile = undefined;
        if (req.body.cover) {
          saveFile({ dir: "/public/uploads/books", file: req.body.cover, name: `${new Date().getTime()}-${findBook?.title}` as string, limit: 1048576 })
            .then(({ pathFile: path }) => pathFile = path)
        }
        const updateBook = await prisma.book.update({
          where: { id: req.body?.bookId },
          data: {
            title: req.body.title || undefined,
            authorName: req.body.authorName || undefined,
            price: req.body.price || undefined,
            stock: req.body.stock || undefined,
            publisher: req.body.publisher || undefined,
            description: req.body.description || undefined,
            coverUrl: pathFile || undefined,
            printType: req.body.status || undefined,
            numberOfPages: req.body.numberOfPages || undefined,
            isbn: req.body.isbn || undefined,
            slug: stringPath(`${req.body.publisher || findBook.publisher}-${req.body.title || findBook.title}`)
          }
        })
        res.json({ status: "200", data: updateBook })
      } catch (error) {
        httpCatchError({ error, res })
      }
      break;
    }
    case "DELETE": {
      auth(req, res)
      try {
        await deleteBookSchema.validate(req.body);
        const deleteBook = await prisma.book.delete({ where: { id: req.body?.bookId } })
        if (deleteBook?.coverUrl) fs.unlinkSync(`${process.cwd()}/public${deleteBook?.coverUrl}`);
        res.json({ status: "200", data: deleteBook })
      } catch (error) {
        httpCatchError({ error, res })
      }
      break;
    }
    default:
      throw new Error(
        `The HTTP ${req.method} method is not supported at this route.`
      )
  }
}
