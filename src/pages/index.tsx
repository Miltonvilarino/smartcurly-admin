import React, { useRef } from "react";
import { FormHandles } from "@unform/core";
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import logoImg from '../assets/logo.png'
import Button from '../components/Button'
import { AnimationContainer, Container, Content, Title } from '../styles/Home'
import Link from 'next/link'

const Home: NextPage = () => {

  return (
    <Container >
      <Head>
        <title>Smart Curly - Admin</title>

      </Head>

      <Content>
        <AnimationContainer>
          <Image src={logoImg} alt="logo" />
          <Title>Smart Curly</Title>
          <Link href="Createproduct">
            <Button >
              Entrar
            </Button>
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  )
}

export default Home
