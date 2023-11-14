'use client'
import { Box, Chip, Stack, Tab, Tabs, ThemeProvider, Tooltip, Typography, createTheme, useMediaQuery } from '@mui/material'
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
            main: '#f20044', // Set your secondary color
        },
    },
});

function RecruiterSection() {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const [projectValue, setProjectValue] = useState(0);
    const handleProjectChange = (event: React.SyntheticEvent, newValue: number) => {
        setProjectValue(newValue);
    };
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
            value: 4
        },
        {
            label: "Postgres",
            value: 3
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
    const subject = encodeURIComponent("Thư Mời Ứng Tuyển: (Full-stack developer/DevOps Engineer) - [Tên Công Ty]");
    const body = encodeURIComponent(`Chào (anh/em/bạn) Ngô Đình Khôi Nguyên,

    Tôi là [Tên của Bạn], đại diện cho đội ngũ nhân sự tại [Tên Công Ty]. Chúng tôi đang tìm kiếm một ứng viên có kinh nghiệm và năng lực cho vị trí (Full-stack developer/DevOps Engineer).
    
    [Thông tin về Công Ty - văn hóa, sứ mệnh, và mục tiêu].
    
    Vị Trí Công Việc:
    - Tên Vị Trí: (Full-stack developer/DevOps Engineer)
    - Địa Điểm: [Địa Điểm Công Việc]
    - Mô Tả Công Việc: [Mô tả ngắn về công việc]
    
    Yêu Cầu Chính:
    - [Yêu cầu 1]
    - [Yêu cầu 2]
    - [Yêu cầu 3]
    
    Quyền Lợi:
    - [Quyền lợi 1]
    - [Quyền lợi 2]
    - [Quyền lợi 3]
    
    Nếu bạn là người có đam mê, chăm chỉ, và muốn thách thức bản thân trong môi trường năng động của chúng tôi, hãy gửi hồ sơ của bạn về địa chỉ email: [Địa chỉ email].
    
    Chúng tôi rất mong chờ nhận được hồi âm từ bạn. Xin cảm ơn vì đã xem xét cơ hội nghề nghiệp tại [Tên Công Ty].
    
    Trân trọng,
    [Tên của Bạn]
    [Tên Chức Vụ của Bạn]
    [Tên Công Ty]
    [Thông Tin Liên Hệ]`);

    return (
        <ThemeProvider theme={theme}>
            <h1 style={{ marginBottom: 20, textAlign: "center" }}>If you are a recruiter, here is something about me</h1>
            <Stack width={"80%"} boxShadow={16} borderRadius={4}>
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
                    <Stack flexDirection={isSmallScreen ? "column" : "row"} alignItems={"center"} >
                        <Typography variant='h4'>Basic Information:</Typography>
                        <Stack flexDirection={"row"} columnGap={1}>
                            <Link href={"https://github.com/ndknitor"}>
                                <Image src={"/github.svg"} alt='github' width={30} height={30} />
                            </Link>
                            <Link href={"https://www.linkedin.com/in/nguy%C3%AAn-ng%C3%B4-b45368286/"}>
                                <Image src={"/linkedin.svg"} alt='linkedin' width={30} height={30} />
                            </Link>
                            <Link href={`mailto:yookhoinguyen@gmail.com?subject=${subject}&body=${body}`}>
                                <Image src={"/email.svg"} alt='email' width={30} height={30} />
                            </Link>
                            <Link href={"https://www.facebook.com/profile.php?id=100010300356555"}>
                                <Image src={"/facebook.svg"} alt='facebook' width={30} height={30} />
                            </Link>
                        </Stack>
                    </Stack>
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

                    <Stack flexDirection={isSmallScreen ? "column" : 'row'} >
                        <Typography variant='h4' marginRight={1}>I'm a</Typography>
                        <Stack flexDirection={isSmallScreen ? "column" : "row"} alignItems={"center"} rowGap={1} columnGap={1}  >
                            <Chip
                                style={{ fontSize: 16, width: isSmallScreen ? "60%" : "100%" }}
                                size='medium'
                                color='secondary'
                                label="Full-stack deveploper"
                            />
                            <Chip
                                style={{ fontSize: 16, width: "60%" }}
                                size='medium'
                                color='secondary'
                                label="Mobile developer"
                            />
                            <Chip
                                style={{ fontSize: 16, width: "60%" }}
                                size='medium'
                                color='secondary'
                                label="DevOps Engineer"
                            />
                        </Stack>
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
                    <Stack columnGap={2} flexDirection={"row"} justifyContent={"center"} flexWrap={"wrap"} marginTop={2}>
                        {
                            toolData.map(item =>
                                <Tooltip
                                    key={item.title}
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
                    <BarChart data={chartData.map(i => i.value)} labels={chartData.map(i => i.label)} height={isSmallScreen ? 600 : undefined} />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Box sx={{ width: '100%' }}>
                        <Tabs value={value} onChange={handleProjectChange}
                            textColor="inherit"
                            indicatorColor="secondary">
                            <Tab label="Group Project" {...a11yProps(0)} />
                            <Tab label="Personal Project" {...a11yProps(1)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={projectValue} index={0}>
                        <Typography variant='h4'>
                            Boek
                        </Typography>
                        <Typography variant='h5'>
                            - Repository : <a href='https://github.com/phuongnguyen521/boek-capstone'>Boek</a>
                        </Typography>
                        <Typography variant='h5'>
                            - Tech Stack:
                        </Typography>
                        <ul>
                            <li><Typography>Backend: C# ASP.NET Core, SQL Server</Typography></li>
                        </ul>
                        <ul>
                            <li><Typography>Frontend (Web): Next.js with TypeScript</Typography></li>
                        </ul>
                        <ul>
                            <li><Typography>Frontend (Mobile): React Native with TypeScript</Typography></li>
                        </ul>
                        <ul>
                            <li><Typography>Cloud Hosting: AWS EC2</Typography></li>
                        </ul>
                        <Typography variant='h5'>
                            - Achievements:
                        </Typography>
                        <ul>
                            <li><Typography>Consulted on the implementation of a robust CI/CD pipeline using GitHub Actions.</Typography></li>
                        </ul>
                        <ul>
                            <li><Typography>Built and optimized AWS cloud infrastructure for the web server, focusing on top-notch security measures.</Typography></li>
                        </ul>
                        <ul>
                            <li><Typography>Independently developed the mobile application.</Typography></li>
                        </ul>
                        <Typography variant='h5'>
                            - Decription:
                        </Typography>
                        <Typography>
                            Boek is a comprehensive platform designed to facilitate seamless interaction among Issuers, Admins, and Customers. Leveraging the power of C# ASP.NET Core, SQL Server, Next.js with TypeScript, React Native with TypeScript, and hosted on AWS EC2, the system provides a feature-rich experience for all users.
                        </Typography>
                    </TabPanel>
                    <TabPanel value={projectValue} index={1}>
                        <Typography variant='h4'>
                            Ndknitor
                        </Typography>
                        <Typography variant='h5'>- Repository: <Link href={"https://github.com/ndknitor/NdknitorDotNet"}>Ndknitor</Link></Typography>
                        <Typography variant='h5'>- Language: <Link href={"https://dotnet.microsoft.com/en-us/"}>C# .Net Core</Link></Typography>
                        <Typography variant='h5'>- Nuget: <Link href={"https://www.nuget.org/packages/Ndknitor"}>Ndknitor</Link></Typography>
                        <Typography variant='h5'>- License: <Link href={"https://www.gnu.org/licenses/gpl-3.0.en.html"}>GNU General Public License v3.0</Link></Typography>
                        <Typography variant='h5'>- Description:</Typography>
                        <Typography >
                            A class library meticulously crafted to address two key aspects of application development: request validation in ASP.NET Core and extension methods for DbContext in Entity Framework (EF) Core
                        </Typography>
                        <Typography variant='h5'>- Licensing:</Typography>
                        <Typography >
                            Ndknitor is released under the GNU General Public License v3.0, emphasizing the importance of open-source collaboration and ensuring that any derivative works also adhere to the principles of free and open software.
                        </Typography>
                        <Typography variant='h5'>
                            - Contributions:
                        </Typography>
                        <Typography>
                            Contributions to this library are welcome. Feel free to fork the repository, make improvements, and submit pull requests.
                        </Typography>
                    </TabPanel>

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