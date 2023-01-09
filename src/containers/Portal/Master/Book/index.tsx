import { Button } from "@mui/material"
import React, { useMemo, useState } from "react"
import styled from "styled-components"
import PopupDelete from "../../../../components/Popups/PopupDelete"
import TableComponent from "../../../../components/Tables/TableComponent"
import useQuery from "../../../../hooks/useQuery"
import { TBook } from "../../../../types/book"

const Book: React.FC = () => {
  const [popupDelete, setPopupDelete] = useState(false)
  const [deleteData, setDeleteData] = useState<{ id: string; title: string; }>({ id: "", title: "" })
  type TResBook = {
    statusCode: string;
    data: TBook[]
  }

  const { data, error, loading } = useQuery<TResBook>({
    method: "POST",
    url: "/api/book"
  })

  const onClickDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, data: { id: string; title: string; }) => {
    e.stopPropagation()
    setPopupDelete(true)
    setDeleteData(data)
  }

  const createData = (id: string, no: string, title: string, authorName: string, action: any) => ({ id, no, title, authorName, action });

  const dataTable = useMemo(() => {
    const columns = [
      { id: "id", label: "id", width: "auto", align: "left", display: "hidden" },
      { id: "no", label: "No", width: "auto", align: "left" },
      { id: "title", label: "Title", width: "auto", align: "left" },
      { id: "authorName", label: "Author Name", width: "auto", align: "left" },
      { id: "action", label: "Action", width: "0", align: "center" },
    ];
    const rows = data?.data?.map((val, idx) => {
      return createData(
        val?.id,
        String(idx + 1),
        val?.title,
        val?.authorName,
        <Action>
          <Button onClick={(e) => onClickDelete(e, { id: val?.id, title: val?.title })}><DeleteIcon /></Button>
        </Action>
      );
    }, []);
    return { columns, rows };
  }, [data]);

  return (
    <Main>
      <PopupDelete open={popupDelete} onClickClose={() => setPopupDelete(false)} data={deleteData} />
      <p className="title">Portal - Book</p>
      <div className="content">
        <TableComponent dataTable={dataTable} loading={loading} checkbox maxHeight="600px" />
      </div>
    </Main>
  )
}

export default Book

const DeleteIcon = () => (<svg viewBox="0 0 512 512"><rect x="32" y="48" width="448" height="80" rx="32" ry="32" /><path d="M74.45 160a8 8 0 00-8 8.83l26.31 252.56a1.5 1.5 0 000 .22A48 48 0 00140.45 464h231.09a48 48 0 0047.67-42.39v-.21l26.27-252.57a8 8 0 00-8-8.83zm248.86 180.69a16 16 0 11-22.63 22.62L256 318.63l-44.69 44.68a16 16 0 01-22.63-22.62L233.37 296l-44.69-44.69a16 16 0 0122.63-22.62L256 273.37l44.68-44.68a16 16 0 0122.63 22.62L278.62 296z" /></svg>)

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  >p.title {
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors?.text?.dark};
  }
  > div.content {
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 30px 20px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
    border-radius: 15px;
  }
`

const Action = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0;
  .MuiButton-root {
    min-width: auto;
    min-height: auto;
    height: fit-content;
    padding: 7px;
    border-radius: 100%;
    margin: 0;
    background: ${({ theme }) => theme?.colors?.red?.["07"]};
    :hover {
      background: ${({ theme }) => theme?.colors?.red?.["09"]};
    }
    > svg {
      height: 18px;
      rect, path {
        fill: ${({ theme }) => theme?.colors?.text?.ultraSoft};
      }
    }
  }
`;