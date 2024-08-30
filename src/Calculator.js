import React, { useState,useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


function Calculator() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [result, setResult] = useState();
 

  const[isCalculate,setIsCalculate]=useState(false);

  useEffect(()=>{

    if(!isCalculate){
        return;
    }

       return setResult(Number(num1)+ Number(num2))

},[isCalculate,num1,num2])

  return (
    <Grid container xs={12} bgcolor={"green"} height={"100vh"}>
      <Grid container item xs={12}>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "center", marginTop: "200px" }}
        >
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            sx={{
              marginRight: "20px",
              bgcolor: "red",
              height: "55px",
              borderColor: "blueviolet",
            }}
            onChange={(e) => setNum1(e.target.value)}
          />

          <Typography
            variant="h4"
            component="h2"
            sx={{ marginRight: "20px", marginTop: "10px" }}
          >
            +
          </Typography>
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            sx={{
              marginRight: "20px",
              bgcolor: "red",
              height: "55px",
              borderColor: "blueviolet",
            }}
            onChange={(e) => setNum2(e.target.value)}
          />
          <Typography
            variant="h4"
            component="h2"
            sx={{ marginRight: "20px", marginTop: "10px" }}
          >
            =
          </Typography>
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            sx={{
              marginRight: "20px",
              bgcolor: "orange",
              height: "55px",
              borderColor: "blueviolet",
            }}
            value={result}
          />
        </Grid>
      </Grid>

      <Grid container item xs={12}
       sx={{ paddingBottom: "200px" ,justifyContent:"center"}}>
          <Button
            variant="contained"
            sx={{ height: "50px", width: "200px", paddingTop: "5px" }}
            onClick={()=>setIsCalculate(true)}
          >
            Calculator
          </Button>
        </Grid>
      </Grid>
    
  );
}

export default Calculator;
