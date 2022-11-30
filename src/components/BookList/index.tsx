import { useRouter } from "next/router"
import { FC } from "react"
import styled from "styled-components"
import { TBook } from "../../types/book"
import BookCard from "../BookCard"

type TBookList = {
  data: TBook[]
}

const BookList: FC<TBookList> = ({ data }) => {
  const router = useRouter()

  const onClickBook = (slug: string) => {
    router.push({
      pathname: '/book/[slug]',
      query: { slug },
    })
  }

  return (
    <Main>
      <div className="search">
        <input />
      </div>
      <div className="books-wrapper">
        {data.map((book) => (
          <div key={book.id}>
            <BookCard data={book} onClick={() => onClickBook(book.slug)} />
          </div>
        ))}
      </div>
    </Main>
  )
}

export default BookList

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  > div.search {
    display: flex;
    align-items: center;
    justify-content: center;
    > input {
      outline: none;
      border: 1px solid #b5d9ff;
    }
  }
  padding: 60px;
  > div.books-wrapper {
    display: grid;
    width: 100%;
    gap: 20px;
    grid-template-columns: repeat( auto-fill, minmax(160px, 1fr) );
  }
`