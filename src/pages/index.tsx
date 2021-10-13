import React, { useCallback, useRef } from "react";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import { Form } from '@unform/web'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import logoImg from '../assets/logo.png'
import Button from '../components/Button'
import Input from '../components/Input'
import { AnimationContainer, Container, Content, Title } from '../styles/Home'


import getValidationErrors from "../utils/getValidationErrors";


interface FormData {
  name: string;
  description: string;
  brand: string;
}

const Home: NextPage = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string()
            .required("Nome Obrigatório"),
          description: Yup.string().required("Descrição obrigatória"),
          brand: Yup.string().required("Marca Obrigatória")
        });

        await schema.validate(data, {
          abortEarly: false,
        });

      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          return;
        }
      }
    },
    []
  );

  return (
    <Container >
      <Head>
        <title>Smart Curly - Admin</title>
        <meta name="description" content="Smart Curly Admin" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>

      <Content>
        <AnimationContainer>
          <Image src={logoImg} alt="logo" />
          <Title>Smart Curly</Title>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Cadastre seu produto</h1>
            <Input name="name" placeholder="Nome" />
            <Input
              name="description"
              placeholder="Descrição"
            />
            <Input
              name="brand"
              placeholder="Marca"
            />
            <Button type="submit" loading={false}>
              Entrar
            </Button>
            {/* <Link to="forgot">Esqueci minha senha</Link> */}
          </Form>
          {/* <Link to="signup">
            <FiLogIn />
            Criar conta
          </Link> */}
        </AnimationContainer>
      </Content>
    </Container>
  )
}

export default Home
