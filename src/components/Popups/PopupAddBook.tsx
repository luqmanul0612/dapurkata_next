import { yupResolver } from '@hookform/resolvers/yup'
import { Backdrop, Button, Fade, Modal } from '@mui/material'
import React, { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import styled from 'styled-components'
import ButtonComp from '../elements/Button'
import * as yup from "yup"
import InputText from '../elements/Input/Input'
import FileUploader from '../elements/FileUploader/FileUploader'

type TFormAdd = {
  title: string;
  authorName: string;
  price: number;
  stock: number;
  publisher: string;
  description: string;
  printType: string;
  numberOfPages: number
  isbn: string;
}

type TPopupDelete = {
  open: boolean;
  onClickClose: () => void;
  data: { title: string; id: string; }
}

const PopupAddBook: FC<TPopupDelete> = ({ open, onClickClose, data }) => {

  React.useEffect(() => {
    if (open) {
      reset()
    }
  }, [open])


  const { handleSubmit, watch, control, formState, setValue, reset } = useForm<TFormAdd>({
    mode: "all",
    reValidateMode: "onChange",
    resolver: yupResolver(validationSchema),
    defaultValues
  });
  const { isValid } = formState;

  return (
    <StyledModal
      open={open}
    >
      <Fade in={open} unmountOnExit>
        <ContentWrapper>
          <div className="head"><p>Add Data</p><Button color="error" onClick={onClickClose}><CloseIcon /></Button></div>
          <div className="content">
            <Form>
              <div className="section">
                <Controller
                  name="title"
                  control={control}
                  render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <InputText
                      type="text"
                      placeholder="Enter Title here.."
                      value={value}
                      error={!!error}
                      helperText={error?.message!}
                      label="Title"
                      width="100%"
                      onChange={onChange}
                      id="title"
                    />
                  )}
                />
                <Controller
                  name="authorName"
                  control={control}
                  render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <InputText
                      type="text"
                      placeholder="Enter Author Name here.."
                      value={value}
                      error={!!error}
                      helperText={error?.message!}
                      label="Author Name"
                      width="100%"
                      onChange={onChange}
                      id="authorName"
                    />
                  )}
                />
                <Controller
                  name="description"
                  control={control}
                  render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <InputText
                      type="textArea"
                      placeholder="Enter Description here.."
                      value={value}
                      error={!!error}
                      helperText={error?.message!}
                      label="Description"
                      width="100%"
                      onChange={onChange}
                      id="description"
                    />
                  )}
                />
                <InputGroup>
                  <Controller
                    name="price"
                    control={control}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                      <InputText
                        type="currency"
                        placeholder="Enter Price here.."
                        value={value}
                        error={!!error}
                        helperText={error?.message!}
                        label="Price"
                        width="100%"
                        onChange={(value) => onChange(value?.floatValue)}
                        id="price"
                      />
                    )}
                  />
                  <Controller
                    name="stock"
                    control={control}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                      <InputText
                        type="numeric"
                        placeholder="Enter Number of Pages here.."
                        value={value}
                        error={!!error}
                        helperText={error?.message!}
                        label="Stock"
                        width="100%"
                        onChange={(value) => onChange(value?.floatValue)}
                        id="stock"
                      />
                    )}
                  />
                </InputGroup>
                <Controller
                  name="isbn"
                  control={control}
                  render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <InputText
                      type="text"
                      placeholder="Enter ISBN here.."
                      value={value}
                      error={!!error}
                      helperText={error?.message!}
                      label="ISBN"
                      width="100%"
                      onChange={onChange}
                      id="ISBN"
                    />
                  )}
                />
              </div>
              <div className="section">
                <Controller
                  name="publisher"
                  control={control}
                  render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <InputText
                      type="text"
                      placeholder="Enter Publisher here.."
                      value={value}
                      error={!!error}
                      helperText={error?.message!}
                      label="Publisher"
                      width="100%"
                      onChange={onChange}
                      id="publisher"
                    />
                  )}
                />
                <InputGroup>
                  <Controller
                    name="printType"
                    control={control}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                      <InputText
                        type="text"
                        placeholder="Enter Print Type here.."
                        value={value}
                        error={!!error}
                        helperText={error?.message!}
                        label="Print Type"
                        width="100%"
                        onChange={(e) => onChange(e.target.value)}
                        id="Print Type"
                      />
                    )}
                  />
                  <Controller
                    name="numberOfPages"
                    control={control}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                      <InputText
                        type="numeric"
                        placeholder="Enter Number of Pages here.."
                        value={value}
                        error={!!error}
                        helperText={error?.message!}
                        label="Number Of Pages"
                        width="100%"
                        onChange={(value) => onChange(value?.floatValue)}
                        id="numberOfPages"
                      />
                    )}
                  />
                </InputGroup>
                <CoverInput>
                  <p>Cover File</p>
                  <Controller
                    name="numberOfPages"
                    control={control}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                      <FileUploader
                        width="99.9%"
                        onChange={(e) => onChange(e)}
                      />
                    )}
                  />
                </CoverInput>
              </div>
            </Form>
          </div>
          <div className="footer">
            <ButtonComp label="ADD" variant="contained" color="error" onClick={onClickClose} />
            <ButtonComp label="Cancel" variant="outlined" onClick={onClickClose} />
          </div>
        </ContentWrapper>
      </Fade>
    </StyledModal>
  );
};

export default PopupAddBook;

const validationSchema =
  yup.object({
    title: yup.string().required("Required"),
    authorName: yup.string().required("Required"),
    price: yup.number().required("Required"),
    stock: yup.number().required("Required"),
    publisher: yup.string().required("Required"),
    description: yup.string().required("Required"),
    printType: yup.string().required("Required"),
    numberOfPages: yup.number().required("Required"),
    isbn: yup.string().required("Required")
  });

const defaultValues = {
  title: "",
  authorName: "",
  price: "",
  stock: "",
  publisher: "",
  description: "",
  printType: "",
  numberOfPages: "",
  isbn: ""
};

const CloseIcon = () => (<svg viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368" /></svg>)

const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    outline: none;
  }
  .MuiBackdrop-root  {
    background: #070814ba;
  } 
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  background: #FFFFFF;
  border: 1px solid #BCC8E7;
  box-sizing: border-box;
  border-radius: 15px;
  padding: 10px;
  gap: 10px;
  >div.head{
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    > p {
      padding-left: 10px;
      line-height: 1;
      font-size: 16px;
      font-weight: 500;
      margin: 0;
    }
    .MuiButton-root{
      padding: 2px;
      border-radius: 100%;
      min-width: fit-content;
      color: ${({ theme }) => theme?.colors?.red?.["07"]};
      > svg {
        height: 30px;
        color: ${({ theme }) => theme?.colors?.red?.["07"]};
        path {
          stroke-width: 30px;
        }
      }
    }
  }
  >div.content {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 20px;
    border-radius: 5px;
    padding: 10px 20px;
    margin: 0 10px;
    > div {
      display: flex;
      align-items: center;
      gap: 10px;
      >p:nth-child(1) {
        margin: 0;
        font-weight: 600;
        font-size: 15px;
        color: #2B2F3C;
        line-height: 1.2;
      }
      >p:nth-child(2) {
        margin: 0;
        font-size: 14px;
        font-weight: 400;
        color: #2B2F3C;
        line-height: 1.2;
      }
    }
  }
  >div.footer {
    display: flex;
    width: 100%;
    padding: 15px;
    gap: 10px;
    & .MuiButton-root:nth-child(1) {
      width: fit-content;
    }
    & .MuiButton-root:nth-child(2) {
      width: fit-content;
    }
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  > div.section {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`

const InputGroup = styled.div`
  display: flex;
  gap: 15px;
`

const CoverInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  > p {
    font-size: 13px;
    font-weight: 500;
    margin: 0;
    line-height: 1;
    color: ${({ theme }) => theme?.colors?.text?.darkGrey}
  }
`