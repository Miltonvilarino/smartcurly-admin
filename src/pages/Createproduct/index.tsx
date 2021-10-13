import React, { useCallback, useRef } from "react";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import { Form } from '@unform/web'
import type { NextPage } from 'next'
import Head from 'next/head'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { AnimationContainer, Container, Content } from './styles'
import Link from 'next/link'
import { FaImage } from 'react-icons/fa'


import getValidationErrors from "../../utils/getValidationErrors";


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
                    brand: Yup.string().required("Marca Obrigatória"),
                    imgUrl: Yup.string().required("Imagem Obrigatória"),
                    type: Yup.string().required("tipo Obrigatório"),
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
            </Head>
            <Content>
                <AnimationContainer>
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
                        <Input
                            name="type"
                            placeholder="Tipo do produto"
                        />
                        <Input
                            name="imgUrl"
                            placeholder="Url da Imagem"
                            icon={FaImage}
                        />
                        <Button type="submit" loading={false}>
                            Cadastrar
                        </Button>
                    </Form>
                    <Link href="/" >
                        <Button >
                            Voltar
                        </Button>
                    </Link>
                </AnimationContainer>
            </Content>
        </Container>
    )
}

export default Home
