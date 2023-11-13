'use client'
import Image from 'next/image'
import React, { PropsWithChildren } from 'react'
import Visible from '../Visible/Visible'
import DynamicBackground from '../DynamicBackground/DynamicBackground'
import { Stack } from '@mui/material';
import Link from 'next/link'
function GirlSection() {
    return (
        <Stack height={"100vh"}>
            <Visible>
                {(isVisible) => (
                    <>
                        {
                            <div className={`fade-in-out ${isVisible && 'fade-in-out-active'}`} style={{ textAlign: "center" }}>
                                <Stack width={"100%"} alignItems={"center"}>
                                    <Title margin={20}>I'm not gay, btw. But if you are a girl. Interested in me, are you ?</Title>
                                <Title margin={480}>If you are, <Link href={"https://www.facebook.com/profile.php?id=100010300356555"} style={{textDecoration : "underline"}}>contact me</Link> </Title>
                                </Stack>
                                <DynamicBackground />
                            </div>
                        }
                    </>
                )}
            </Visible>
        </Stack>
    )
}

export default GirlSection
interface TitleProps extends PropsWithChildren {
    margin: number;
}
function Title(props: TitleProps) {
    return (
        <h1 style={{
            marginTop: props.margin, color: 'rgba(242, 0, 68, 1)', position: "absolute", fontFamily: "pacifico", fontSize: 40, fontWeight: 100
        }}>{props.children}</h1>
    );
}
