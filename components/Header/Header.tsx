import { AppBar, Container, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'

function Header() {
    return (
        <Stack alignItems={"center"}>
            <AppBar position="sticky" style={{ width: "95%", top: -1, backgroundColor: 'white', borderRadius : 8, marginTop: '24px' }}>
                <Toolbar>
                    <Typography variant="h6">
                        Sticky Header
                    </Typography>
                </Toolbar>
            </AppBar>
        </Stack>
    )
}

export default Header