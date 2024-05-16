import { Button, Grid, Input, Typography } from "@mui/material";
import React from "react";
import PlusIcon from "../../../../public/images/plus-circle.png";
import Image from "next/image";
import Chatgpt from "../../../../public/images/chatgpt.png";
import Gemini from "../../../../public/images/gemini.png";

const MobileUi = () => {
  return (
    <Grid
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "28px 1rem 0 1rem",
        height: "100vh",
      }}
    >
      <Grid sx={{ height: "calc(100vh - 11rem)" }}>
        <Grid item xs={12}>
          <Typography>Chat Bot </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{ fontSize: "2.125rem", marginTop: "12px" }}>
            Different Models, experts in one place.{" "}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            For Copywriters, E-commerce, Marketers, Entrepreneurs, for Students,
            and Teachers and everyone
          </Typography>
        </Grid>
        <Button
          variant="contained"
          sx={{
            borderRadius: "5rem",
            backgroundColor: "#44444447",
            boxShadow: "0px 0.93px 2.8px 0.93px #FFFFFF40 inset",
            border: "1px solid beige",
            padding: "1rem 1.5rem",
            marginTop: "2rem",
            color:'lighgrey'
          }}
        >
          Edit Chatbot for Free
        </Button>

        <Button
          variant="contained"
          sx={{
            borderRadius: "13px",
            backgroundColor: "#44444447",
            boxShadow: "0px 0.93px 2.8px 0.93px #FFFFFF40 inset",
            border: "1px dotted",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "absolute",
            top: "40%",
            left: "36%",
            paddingTop: "15px",
            paddingBottom: "15px",
            // marginTop: '15px',
            // position: "absolute",
            // bottom:0
          }}
          startIcon={<Image src={Chatgpt} height={24} width={24} />} // Wrap the image path in an <img> tag
        >
          Gemini <br /> Pro
        </Button>
        <Button
          variant="contained"
          sx={{
            borderRadius: "13px",
            backgroundColor: "transparent",
            boxShadow: "0px 0.93px 2.8px 0.93px #FFFFFF40 inset",
            border: "1px dotted",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "absolute",
            top: "50%",
            left: "65%",
            paddingTop: "15px",
            paddingBottom: "15px",
            // width:'70px',
            // marginTop: '15px',
            // position: "absolute",
            // bottom:0
          }}
          startIcon={<Image src={Chatgpt} height={24} width={24} />} // Wrap the image path in an <img> tag
        >
          Mistral <br /> Small
        </Button>
        <Button
          variant="contained"
          sx={{
            borderRadius: "13px",
            backgroundColor: "transparent",
            boxShadow: "0px 0.93px 2.8px 0.93px #FFFFFF40 inset",
            border: "1px dotted",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "absolute",
            top: "60%",
            left: "38%",
            paddingTop: "15px",
            paddingBottom: "15px",
            // marginTop: '15px',
            // position: "absolute",
            // bottom:0
          }}
          startIcon={<Image src={Chatgpt} height={24} width={24} />} // Wrap the image path in an <img> tag
        >
          Claude
        </Button>
        <Button
          variant="contained"
          sx={{
            borderRadius: "13px",
            backgroundColor: "transparent",
            boxShadow: "0px 0.93px 2.8px 0.93px #FFFFFF40 inset",
            border: "1px dotted",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "absolute",
            top: "50%",
            paddingTop: "15px",
            paddingBottom: "15px",
            // width:'70px',
            // left:'36%
            // marginTop: '15px',
            // position: "absolute",
            // bottom:0
          }}
          startIcon={<Image src={Chatgpt} height={24} width={24} />} // Wrap the image path in an <img> tag
        >
          GPT-3.5
        </Button>
      </Grid>

      <Button
        variant="contained"
        sx={{
          borderRadius: "46px",
          backgroundColor: "#44444447",
          boxShadow: "0px 0.93px 2.8px 0.93px #FFFFFF40 inset",
          border: "1px solid #EA580C",
          marginTop: "15px",
          color: "#EA580C",
        }}
        startIcon={<Image src={Gemini} height={24} width={24} />} // Wrap the image path in an <img> tag
      >
        Gemini Pro
      </Button>
      <Button
        variant="contained"
        sx={{
          borderRadius: "46px",
          backgroundColor: "#44444447",
          boxShadow: "0px 0.93px 2.8px 0.93px #FFFFFF40 inset",
          border: "1px solid beige",
          marginTop: "15px",
          marginLeft: "12px",
        }}
        startIcon={<Image src={Gemini} height={24} width={24} />} // Wrap the image path in an <img> tag
      >
        Academic...
      </Button>
      <Input
        variant="contained"
        sx={{
          borderRadius: "13px",
          backgroundColor: "#44444447",
          boxShadow: "0px 0.93px 2.8px 0.93px #FFFFFF40 inset",
          border: "1px solid beige",
          marginTop: "15px",
          width: "100%",
        }}
        placeholder="Write your dream"
        startAdornment={
          <Image
            src={PlusIcon}
            height={24}
            width={24}
            style={{ paddingLeft: "10px" }}
          />
        }
        inputProps={{ style: { color: "#fff", padding: "12px 10px" } }} // Change placeholder color here
      >
        Write your dream
      </Input>
    </Grid>
  );
};

export default MobileUi;
