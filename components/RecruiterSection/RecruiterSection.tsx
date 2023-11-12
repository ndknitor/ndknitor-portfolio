'use client'
import { Box, Chip, Stack, Tab, Tabs, ThemeProvider, Tooltip, Typography, createTheme } from '@mui/material'
import React, { useState } from 'react'
import BarChart from '../BarChart/BarChart';
import Image from 'next/image';
import Link from 'next/link';

const theme = createTheme({
    palette: {
        primary: {
            main: '#2196f3', // Set your primary color
        },
        secondary: {
            main: '#ff4081', // Set your secondary color
        },
    },
});


function RecruiterSection() {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const chartData = [
        {
            label: "C#",
            value: 4
        },
        {
            label: "Typescript",
            value: 3
        },
        {
            label: "Python",
            value: 2
        },
        {
            label: "MSSQL",
            value: 4
        },
        {
            label: "MySql",
            value: 3
        },
        {
            label: "Postgres",
            value: 2
        },
        {
            label: "Linux",
            value: 7
        },
        {
            label: "Docker",
            value: 5
        },
        {
            label: "Kubernates",
            value: 4
        },
        {
            label: "Jenkins",
            value: 2
        },
        {
            label: "AWS",
            value: 3
        },
        {
            label: "Azure",
            value: 3
        },
        {
            label: "Oracle",
            value: 3
        }
    ];
    const toolData = [
        {
            title: "Visual Studio Code",
            src: "vscode.svg",
            alt: "Visual Studio Code"
        },
        {
            title: "Burp Suite",
            src: "burp.svg",
            alt: "Burp Suite"
        },
        {
            title: "Azure Data Studio",
            src: "azuredatastudio.svg",
            alt: "Azure Data Studio"
        },
        {
            title: "Postman",
            src: "postman.svg",
            alt: "Postman"
        },
        {
            title: "Virtual Box",
            src: "virtualbox.svg",
            alt: "Virtual Box"
        },
        {
            title: "Android Studio",
            src: "androidstudio.svg",
            alt: "Android Studio"
        },
        {
            title: "Docker",
            src: "docker.svg",
            alt: "Docker"
        },
        {
            title: "Debian",
            src: "debian.svg",
            alt: "Debian"
        }
    ];

    return (
        <ThemeProvider theme={theme}>
            <h1 style={{ marginBottom: 20 }}>If you are a recruiter, here is something about me</h1>
            <Stack width={"50%"} boxShadow={16} borderRadius={4}>
                <Box sx={{ width: '100%' }}>
                    <Tabs value={value} onChange={handleChange}
                        textColor="inherit"
                        indicatorColor="secondary">
                        <Tab label="About me" {...a11yProps(0)} />
                        <Tab label="Skills" {...a11yProps(1)} />
                        <Tab label="Projects" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel
                    value={value} index={0}>
                    <Typography variant='h4'>Basic Information:</Typography>
                    <Stack flexDirection={"row"}>
                        <Stack width={"70%"}>
                            <ul>
                                <li>
                                    <Typography>My name is Ngo Dinh Khoi Nguyen ("Ngô Đình Khôi Nguyên" in Vietnamese).</Typography>
                                </li>
                                <li>
                                    <Typography>I graduated from <Link href={"https://daihoc.fpt.edu.vn/"}>FPT university</Link> in 2023.</Typography>
                                </li>
                                <li>
                                    <Typography>My major is <Link href={"https://en.wikipedia.org/wiki/Software_engineering"}>Software engineering</Link>.</Typography>
                                </li>
                            </ul>
                        </Stack>
                        <Stack width={"30%"} alignItems={"center"} justifyContent={"center"}>
                            <Stack borderRadius={999} overflow={"hidden"} border={2} borderColor={"pink"}>
                                <Image src={"/avatar.jpg"} width={120} height={120} alt='avatar' />
                            </Stack>
                        </Stack>
                    </Stack>

                    <Stack flexDirection={'row'} columnGap={1}>
                        <Typography variant='h4'>I'm a</Typography>
                        <Chip
                            style={{ fontSize: 16 }}
                            size='medium'
                            color='secondary'
                            label="Full-stack deveploper"
                        />
                        <Chip
                            style={{ fontSize: 16 }}
                            size='medium'
                            color='secondary'
                            label="Mobile developer"
                        />
                        <Chip
                            style={{ fontSize: 16 }}
                            size='medium'
                            color='secondary'
                            label="DevOps Engineer"
                        />
                    </Stack>
                    <ul>
                        <li>
                            <Typography style={{ fontSize: 20 }}>
                                Full-stack Developer since 2019, using C# with ASP.NET as a back-end technology. Previously worked with React and currently using Next.js combined with TypeScript for the front end.
                            </Typography>
                        </li>
                        <li>
                            <Typography style={{ fontSize: 20 }}>
                                Mobile Developer since 2020, specializing in React Native.
                            </Typography>
                        </li>
                        <li>
                            <Typography style={{ fontSize: 20 }}>
                                DevOps Engineer since 2020, experienced with Linux, AWS, Azure, Oracle, and capable of setting up physical servers.
                            </Typography>
                        </li>
                    </ul>
                    <Typography variant='h4'>Tools i have used for development process</Typography>
                    <Stack columnGap={2} flexDirection={"row"} justifyContent={"center"} marginTop={2}>
                        {
                            toolData.map(item =>
                                <Tooltip
                                    title={
                                        <Typography>
                                            {item.title}
                                        </Typography>
                                    }>
                                    <Image src={item.src} alt={item.alt} width={60} height={60} />
                                </Tooltip>
                            )
                        }
                    </Stack>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <BarChart data={chartData.map(i => i.value)} labels={chartData.map(i => i.label)} />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Typography variant='h5'>
                        Group project:
                    </Typography>

                    <Typography variant='h5'>
                        Personal project:
                    </Typography>
                </TabPanel>
            </Stack>
        </ThemeProvider>
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
            {...other}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}