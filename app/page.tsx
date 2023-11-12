import GradientButton from "@/components/GradientButton/GradientButton";
import RecruiterSection from "@/components/RecruiterSection/RecruiterSection";
import { Button, Container, Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Stack width={"100%"} height={'100vh'} alignItems={'center'} justifyContent={'center'}>
        <h1>Which one are you ?</h1>
        <h1>I'm a ___</h1>
        <Stack marginTop={10} flexDirection={'row'} width={"40%"} alignItems={'center'} justifyContent={'center'} columnGap={8}>
          <GradientButton>Recruiter</GradientButton>
          <GradientButton>Girl</GradientButton>
          <GradientButton>Gay</GradientButton>
        </Stack>
      </Stack>

      <Stack width={"100%"} alignItems={"center"} height={"90vh"} >
        <RecruiterSection />
      </Stack>

      {/* <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laudantium, laboriosam, libero, aut accusantium corrupti incidunt ipsa ut voluptatum molestiae earum alias quia. Odit fuga consectetur iure qui. Veritatis, corrupti.
      </Typography> */}
    </>
  )
}
