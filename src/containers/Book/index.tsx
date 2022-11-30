import Image from "next/image"
import { FC } from "react"
import styled from "styled-components"
import BookList from "../../components/BookList"
import Button from "../../components/elements/Button"
import { formatToCurrency } from "../../helpers/formatToCurrency"
import { TBook } from "../../types/book"

type TBookContainer = {
  data: TBook
}

const Book: FC<TBookContainer> = ({ data }) => {

  return (
    <Main>
      <div className="content">
        <BookInfo>
          <div className="cover">
            <div>
              <Image
                src={data.coverUrl}
                layout="fill"
                alt="cover"
              />
            </div>
          </div>
          <div className="info">
            <div className="section-1">
              <p className="title">{data.title}</p>
              <p className="author">{data.authorName}</p>
              <div className="additional">
                <div>{data.cetakan}</div>
              </div>
            </div>
            <div className="section-2">
              <p className="price">{`Rp ${formatToCurrency(data.price, 0)}`}</p>
              <Button label="Beli Sekarang" variant="contained" />
            </div>
          </div>
        </BookInfo>
        <Description>
          <p className="title">Deskripsi Buku</p>
          <p className="value">{data.description}</p>
        </Description>
      </div>
    </Main>
  )
}

export default Book

const Main = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 60px);
  padding: 100px 60px 0 60px;
  background: #eff3f7;
  >div.content {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    background: rgb(255,255,255);
    border-radius: 8px;
    padding: 30px;
  }
`

const BookInfo = styled.div`
  display: flex;
  gap: 30px;
  >div.cover {
    display: flex;
    padding: 20px;
    width: 240px;
    aspect-ratio: 1/1;
    background: #c3dbf3;
    justify-content: center;
    border-radius: 3px;
    >div{
      border-radius: 3px;
      overflow: hidden;
      aspect-ratio: 2/2.8;
      position: relative;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
    }
  }
  > div.info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > div.section-1 {
      > p.title {
        font-size: 25px;
        font-weight: 700;
        margin: 0;
        line-height: 1.3;
        color: #101316;
      }
      > p.author {
        font-size: 15px;
        font-weight: 600;
        margin: 0;
        line-height: 1.3;
        color: #6a7b8b;
      }
      
      > div.additional{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        margin: 0;
        margin-top: 3px;
        width: fit-content;
        font-size: 11px;
        padding: 3px 10px;
        border-radius: 20px;
        font-weight: 600;
        line-height: 1.3;
        background: #467ac1;
        color: #fff;
      }
    }
    > div.section-2{
      display: flex;
      flex-direction: column;
      gap: 10px;
      > p {
        font-size: 22px;
        font-weight: 700;
        margin: 0;
        line-height: 1.3;
        color: #ff06a4;
      }
      > button {
        border-radius: 3px;
      }
    }
  }
`
const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  > p.title {
    font-size: 17px;
    font-weight: 600;
    margin: 0;
    line-height: 1.3;
    color: #466899;
  }
  > p.value {
    font-size: 14px;
    font-weight: 500;
    margin: 0;
    padding: 0 10px;
    line-height: 1.6;
    color: #495569;
  }
`