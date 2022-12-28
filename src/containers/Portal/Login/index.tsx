import React, { useState } from "react"
import styled from "styled-components"
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from "react-hook-form";
import Button from "../../../components/elements/Button"
import InputText from "../../../components/elements/InputText"
import { useQuery } from "../../../hooks/useQuery"
import { defaultValues, validationSchema } from "./validationSchema";
import crypto from "crypto"


const Login: React.FC = () => {
  const [startFetch, setStartFetch] = useState(false)
  const [body, setBody] = useState({})

  const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY as string

  const encryptRSA = (text: string) => {
    const encrypted = crypto.publicEncrypt(
      {
        key: PUBLIC_KEY,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      },
      Buffer.from(text, "utf8")
    );
    return encrypted.toString("base64");
  }


  const { data, error, loading } = useQuery({
    method: "POST",
    url: "/api/user/login",
    skip: !startFetch,
    body
  })


  const { handleSubmit, watch, control, formState, setValue } = useForm({
    mode: "all",
    reValidateMode: "onChange",
    resolver: yupResolver(validationSchema),
    defaultValues
  });

  const { isValid } = formState;

  const onSubmit = (values: any) => {
    setBody({
      username: values.username,
      password: encryptRSA(values.password)
    })
    setStartFetch(true)
  }

  return (
    <Main>
      <p className="title">LOGIN PORTAL</p>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-wrapper">
          <Controller
            name="username"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <InputText
                type="text"
                width="100%"
                label="Username"
                placeholder="Masukan username anda"
                value={value}
                onChange={(e) => onChange(e.target.value)}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <InputText
                type="password"
                width="100%"
                label="Password"
                placeholder="Masukan password anda"
                value={value}
                onChange={(e) => onChange(e.target.value)}
              />
            )}
          />
        </div>
        <div className="button-wrapper">
          <Button label="Masuk" variant="contained" type="submit" />
        </div>
      </Form>
    </Main>
  )
}

export default Login

const Main = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 220px);
  align-items: center;
  justify-content: center;
  >p.title {
    font-size: 30px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors?.text?.dark};
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 10px;
  gap: 20px;
  > div.input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  > div.button-wrapper {
    display: flex;
    justify-content: flex-end;
  }
`