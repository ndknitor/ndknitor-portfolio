'use client'
import { Box, Chip, Stack, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import BarChart from '../BarChart/BarChart';
import { Bar } from 'react-chartjs-2';
import { randomInt } from 'crypto';
import DoneIcon from '@mui/icons-material/Done';

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
    //const chartLabels = ['Category 1', 'Category 2', 'Category 3'];
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
                    <Stack flexDirection={'row'} columnGap={1}>
                        <Typography variant='h5'>I'm a</Typography>
                        <Chip
                            size='small'
                            color='secondary'
                            label="Full-stack deveploper"
                            deleteIcon={<DoneIcon />}
                        />
                        <Chip
                            size='small'
                            color='secondary'
                            label="Mobile developer"
                            deleteIcon={<DoneIcon />}
                        />
                        <Chip
                            size='small'
                            color='secondary'
                            label="DevOps Engineer"
                            deleteIcon={<DoneIcon />}
                        />
                    </Stack>
                    <ul>
                        <li>
                            <Typography>
                                Full-stack Developer since 2019, using C# with ASP.NET as a back-end technology. Previously worked with React and currently using Next.js combined with TypeScript for the front end.
                            </Typography>
                        </li>
                        <li>
                            <Typography>
                                Mobile Developer since 2020, specializing in React Native.
                            </Typography>
                        </li>
                        <li>
                            <Typography>
                                DevOps Engineer since 2020, experienced with Linux, AWS, Azure, Oracle, and capable of setting up physical servers.
                            </Typography>
                        </li>
                    </ul>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <BarChart data={chartData.map(i => i.value)} labels={chartData.map(i => i.label)} />
                </TabPanel>
                <TabPanel value={value} index={2}>
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
            {...other}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}