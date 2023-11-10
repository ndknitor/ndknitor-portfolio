'use client'
import { Box, Stack, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'


function RecruiterSection() {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <>
            <h1>If you are a recruiter, here is something about me</h1>

            <Stack width={"50%"} boxShadow={16} borderRadius={4}>
                <Box sx={{ width: '100%' }}>
                    <Tabs value={value} onChange={handleChange}
                        textColor="secondary"
                        indicatorColor="secondary"
                    >
                        <Tab label="About me" {...a11yProps(0)} />
                        <Tab label="Skills" {...a11yProps(1)} />
                        <Tab label="Projects" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Typography variant='h6'>
                        I'm a Full-stack Deveploper Mobile Developer DevOps-er
                    </Typography>

                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
            </Stack>
        </>
    )
}

export default RecruiterSection



function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}