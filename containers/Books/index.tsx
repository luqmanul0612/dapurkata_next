import styled from "styled-components"
import BookCard from "../../components/BookCard"
import { bookData } from "../../data/books"

const Books = () => {
  return (
    <Main>
      <BooksWrapper>
        {bookData.map((val) => (
          <BookCard />
        ))}
      </BooksWrapper>
    </Main>
  )
}

export default Books

const Main = styled.div`
  display: flex;
  padding: 60px;
  min-height: calc(100vh - 230px);
`

const BooksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(50px, 1fr) );
`