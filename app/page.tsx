'use client'
import RecruiterSection from "@/components/RecruiterSection/RecruiterSection";
import GradientButton from "@/components/GradientButton/GradientButton";
import { Stack } from "@mui/material";
import { useRef, useState } from "react";
import GirlSection from "@/components/GirlSection/GirlSection";

export default function Home() {
  const [text, setText] = useState("");
  const [active, setActive] = useState(false);
  const recruiterSectionRef = useRef<HTMLDivElement>(null);
  const girlSectionRef = useRef<HTMLDivElement>(null);

  const scrollToRecruiterSection = () => {
    recruiterSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToGirlSection = () => {
    girlSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <Stack width={"100%"} height={'100vh'} alignItems={'center'} justifyContent={'center'}>
        <h1>Which one are you ?</h1>
        <Stack flexDirection={"row"} columnGap={1}>
          <h1>I'm a </h1>
          <Stack >
            <h1>_______</h1>
            <h1 style={{ position: "absolute", marginBottom: 1, width: "7%", textAlign: "center" }} className={`fade-in-out ${active ? "fade-in-out-active" : ""}`}>{text}</h1>
          </Stack>
        </Stack>

        <Stack marginTop={10} flexDirection={'row'} width={"40%"} alignItems={'center'} justifyContent={'center'} columnGap={8}>
          <GradientButton onClick={scrollToRecruiterSection} onMouseEnter={() => { setText("Recruiter"); setActive(true) }} onMouseLeave={() => setActive(false)}>Recruiter</GradientButton>
          <GradientButton onClick={scrollToGirlSection} onMouseEnter={() => { setText("Girl"); setActive(true) }} onMouseLeave={() => setActive(false)}>Girl</GradientButton>
          <GradientButton onClick={scrollToGirlSection} onMouseEnter={() => { setText("Gay"); setActive(true) }} onMouseLeave={() => setActive(false)}>Gay</GradientButton>
        </Stack>
      </Stack>

      <main ref={recruiterSectionRef}>
        <Stack width={"100%"} alignItems={"center"} height={"100vh"} >
          <RecruiterSection />
        </Stack>
      </main>

      <main ref={girlSectionRef}>
        <Stack width={"100%"} height={"100vh"} >
          <GirlSection />
        </Stack>
      </main>

    </>
  )
}
