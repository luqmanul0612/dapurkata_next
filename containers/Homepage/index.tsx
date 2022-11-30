import Image from "next/image"
import styled from "styled-components"
import BookCard from "../../components/BookCard"
import Button from "../../components/elements/Button"
import { bookData } from "../../data/books"

const Homepage = () => {
  return (
    <Main>
      <div className="content">
        <div className="title">
          <p>Penerbit DapurKata</p>
          <p>"Di sini, naskahmu diracik dengan sempurna."</p>
        </div>
        <Image src="/img/banner.svg" width={400} height={300} alt="pic"/>
        <div className="button-wrapper">
          <Button variant="contained" label="Pesan Sekarang"/>
          <Button variant="outline" label="Dafter Buku"/>
        </div>
      </div>
    </Main>
  )
}

export default Homepage

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 50px);
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(231,241,255,1) 54%, rgba(181,212,255,1) 100%);
  >div.content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    >div.title{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      >p:nth-child(1){
        font-size: 23px;
        font-weight: 700;
        margin: 0;  
        line-height: 1.4;
        color: #23252c;
      }
      >p:nth-child(2){
        font-size: 17px;
        font-weight: 500;
        margin: 0;  
        line-height: 1.4;
        color: #3c404a;
      }
    }
    > div.button-wrapper {
      display: flex;
      gap: 50px;
    }
  }
`