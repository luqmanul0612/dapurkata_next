import Image from "next/image"
import styled from "styled-components"

const Navbar = () => {
  return (
    <Main>
      <div className="logo-wrapper">
        <Image src="/icons/dklogo.svg" height={40} width={40} alt="logo" />
        <div>
          <p>Penerbit</p>
          <p>Dapurkata</p>
        </div>
      </div>
    </Main>
  )
}

export default Navbar

const Main = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 50px;
  background: #fff;
  min-height: 60px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  > div.logo-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
    > div {
      display: flex;
      flex-direction: column;
      > p:nth-child(1){
        font-size: 14px;
        font-weight: 500;
        margin: 0;
        line-height: 1;
        color: #23252b;
      }
      > p:nth-child(2){
        font-size: 16px;
        font-weight: 700;
        margin: 0;
        line-height: 1;
        color: #101114;
      }
    }
  }
`