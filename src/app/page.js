"use client";
import {
  Box,
  Button,
  Grid,
  Input,
  TextareaAutosize,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React, { useEffect, useState } from "react";
import CopyIcon from "../../public/images/copy-icon.png";
import PlusIcon from "../../public/images/plus-circle.png";
import Chatgpt from "../../public/images/chatgpt.png";
import MobileUi from "./components/mobileView/MobileUi";
// import MobileView from "./components/mobileView/MobileView";

const Page = () => {
  const theme = useTheme();

  let isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [keyVal, setKeyVal] = useState(0);
  useEffect(() => {
    setKeyVal(keyVal + 1);
  }, [isMobile]);

  return (
    <>
      {!isMobile ? (
        <Grid
          container
          sx={{ backgroundColor: "#000", minHeight: "100vh", display: "block" }}
        >
          <Grid container sx={{ paddingTop: "81.6px", paddingLeft: "71px" }}>
            <Grid item sm={5}>
              <Typography sx={{ color: "#fff" }}>Chat Bot</Typography>
              <Typography
                sx={{ color: "#fff", fontSize: "56px", lineHeight: "70px" }}
              >
                Different Models, experts in one place.
              </Typography>
              <Typography sx={{ color: "#fff" }}>
                For Copywriters, E-commerce, Marketers, Entrepreneurs, for
                Students, and Teachers and everyone
              </Typography>
            </Grid>
            <Grid item sm={4}></Grid>
            <Grid item sm={3}>
              <Box
                sx={{
                  width: "222px",
                  backgroundColor: "#44444447",
                  padding: "12px",
                  borderRadius: "15px",
                  boxShadow: "0px 0.93px 2.8px 0.93px #FFFFFF40 inset",
                  border: "1px solid beige",
                }}
              >
                <Box sx={{ display: "flex", gap: "8px" }}>
                  <Box
                    padding={"8px"}
                    sx={{
                      border: "1px solid #EA580C",
                      width: "fit-content",
                      borderRadius: "6px",
                      backgroundColor: "black",
                    }}
                  >
                    <Image src={CopyIcon} width={16} height={16} />
                  </Box>
                  <Box
                    padding={"8px"}
                    sx={{
                      border: "1px solid white",
                      width: "fit-content",
                      borderRadius: "6px",
                      backgroundColor: "black",
                    }}
                  >
                    <Image src={CopyIcon} width={16} height={16} />
                  </Box>
                  <Box
                    padding={"8px"}
                    sx={{
                      border: "1px solid white",
                      width: "fit-content",
                      borderRadius: "6px",
                      backgroundColor: "black",
                    }}
                  >
                    <Image src={CopyIcon} width={16} height={16} />
                  </Box>
                </Box>
                <Typography sx={{ marginTop: "1.5rem", color: "lightgrey" }}>
                  Notes
                </Typography>
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={3}
                  placeholder="Start taking your notes here"
                  style={{ marginBottom: "1.5rem", width: "100%" }}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid container sx={{ paddingTop: "32px", paddingLeft: "71px" }}>
            <Grid item sm={3}>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "5rem",
                  backgroundColor: "#44444447",
                  boxShadow: "0px 0.93px 2.8px 0.93px #FFFFFF40 inset",
                  border: "1px solid beige",
                  padding: "1rem 1.5rem",
                  "&:hover": {
                    backgroundColor: "#44444447",
                  },
                }}
              >
                Try Chatbot for Free
              </Button>
            </Grid>
            <Grid item sm={3}>
              <Box
                sx={{
                  width: "222px",
                  backgroundColor: "#44444447",
                  padding: "12px",
                  borderRadius: "15px",
                  boxShadow: "0px 0.93px 2.8px 0.93px #FFFFFF40 inset",
                  border: "1px solid beige",
                }}
              >
                <Box
                  sx={{
                    padding: "12px",
                    borderRadius: "6px",
                    boxShadow: "0px 0.93px 2.8px 0.93px #FFFFFF40 inset",
                    border: ".5px solid #EA580C4D",
                    marginBottom: "1rem",
                  }}
                >
                  <Typography sx={{ color: "#EA580C" }}>
                    Choose Model
                  </Typography>
                </Box>
                <Box
                  sx={{
                    padding: "12px",
                    borderRadius: "6px",
                    border: ".5px solid beige",
                  }}
                >
                  <Typography sx={{ color: "#fff" }}>
                    Choose Assistant
                  </Typography>
                </Box>
              </Box>
              <Input
                variant="contained"
                sx={{
                  borderRadius: "13px",
                  backgroundColor: "#44444447",
                  boxShadow: "0px 0.93px 2.8px 0.93px #FFFFFF40 inset",
                  border: "1px solid beige",
                  marginTop: "15px",
                  // width: "100%",
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
            {/* <Grid item sm={6}>
          <Box
              sx={{
                // width: "90%",  
                backgroundColor: "#44444447",
                // padding: "12px",
                borderRadius: "15px",
                boxShadow: "0px 0.93px 2.8px 0.93px #FFFFFF40 inset",
                border: "1px solid beige",
              }}
            >
              <Typography sx={{color:'#fff'}} >Choose from different models</Typography>
              <Grid container sx={{gap:'.5rem'}} >
              <Grid item sm={6}  sx={{
                // padding: "12px",
                borderRadius: "6px",
                border: ".5px solid beige",
                display:'flex',
              }} >
                <Image src={Chatgpt} width={24} height={24} />
                <Box>
                  <Typography sx={{color:'#fff', fontSize:'1.2rem'}} >GPT 3.5</Typography>
                  <Typography sx={{color:'#fff', fontSize:'.9rem',opacity:'.5'}}>4k Context, Moderated</Typography>
                </Box>
              </Grid>
              <Grid item sm={6}  sx={{
                // padding: "12px",
                borderRadius: "6px",
                border: ".5px solid beige",
                display:'flex',
              }} >
                <Image src={Chatgpt} width={24} height={24} />
                <Box>
                  <Typography sx={{color:'#fff', fontSize:'1.2rem'}} >GPT 3.5</Typography>
                  <Typography sx={{color:'#fff', fontSize:'.9rem',opacity:'.5'}}>4k Context, Moderated</Typography>
                </Box>
              </Grid>
              <Grid item sm={6}  sx={{
                // padding: "12px",
                borderRadius: "6px",
                border: ".5px solid beige",
                display:'flex',
              }} >
                <Image src={Chatgpt} width={24} height={24} />
                <Box>
                  <Typography sx={{color:'#fff', fontSize:'1.2rem'}} >GPT 3.5</Typography>
                  <Typography sx={{color:'#fff', fontSize:'.9rem',opacity:'.5'}}>4k Context, Moderated</Typography>
                </Box>
              </Grid>
              <Grid item sm={6}  sx={{
                // padding: "12px",
                borderRadius: "6px",
                border: ".5px solid beige",
                display:'flex',
              }} >
                <Image src={Chatgpt} width={24} height={24} />
                <Box>
                  <Typography sx={{color:'#fff', fontSize:'1.2rem'}} >GPT 3.5</Typography>
                  <Typography sx={{color:'#fff', fontSize:'.9rem',opacity:'.5'}}>4k Context, Moderated</Typography>
                </Box>
              </Grid>
              <Grid item sm={6}  sx={{
                // padding: "12px",
                borderRadius: "6px",
                border: ".5px solid beige",
                display:'flex',
              }} >
                <Image src={Chatgpt} width={24} height={24} />
                <Box>
                  <Typography sx={{color:'#fff', fontSize:'1.2rem'}} >GPT 3.5</Typography>
                  <Typography sx={{color:'#fff', fontSize:'.9rem',opacity:'.5'}}>4k Context, Moderated</Typography>
                </Box>
              </Grid>
              <Grid item sm={6}  sx={{
                // padding: "12px",
                borderRadius: "6px",
                border: ".5px solid beige",
                display:'flex',
              }} >
                <Image src={Chatgpt} width={24} height={24} />
                <Box>
                  <Typography sx={{color:'#fff', fontSize:'1.2rem'}} >GPT 3.5</Typography>
                  <Typography sx={{color:'#fff', fontSize:'.9rem',opacity:'.5'}}>4k Context, Moderated</Typography>
                </Box>
              </Grid>
              <Grid item sm={6}  sx={{
                // padding: "12px",
                borderRadius: "6px",
                border: ".5px solid beige",
                display:'flex',
              }} >
                <Image src={Chatgpt} width={24} height={24} />
                <Box>
                  <Typography sx={{color:'#fff', fontSize:'1.2rem'}} >GPT 3.5</Typography>
                  <Typography sx={{color:'#fff', fontSize:'.9rem',opacity:'.5'}}>4k Context, Moderated</Typography>
                </Box>
              </Grid>
              <Grid item sm={6}  sx={{
                // padding: "12px",
                borderRadius: "6px",
                border: ".5px solid beige",
                display:'flex',
              }} >
                <Image src={Chatgpt} width={24} height={24} />
                <Box>
                  <Typography sx={{color:'#fff', fontSize:'1.2rem'}} >GPT 3.5</Typography>
                  <Typography sx={{color:'#fff', fontSize:'.9rem',opacity:'.5'}}>4k Context, Moderated</Typography>
                </Box>
              </Grid>
              </Grid>
              </Box>
          </Grid> */}
          </Grid>
        </Grid>
      ) : (
        <MobileUi />
      )}
    </>
  );
};

export default Page;
