import SubAppBar from "./SubAppBar";
import './style.css';
import { styled } from '@mui/material/styles';
import {Grid,Card,Button} from '@mui/material';




export default function Home()
{
  const BoldItalicButton = styled(Button)`
  font-weight: bold;
  font-style: italic;
`;
  return (
    <>
    <SubAppBar/>
    <div className="card">
          
    <div className="wall-h">
    <h1 className="home-head">Enthusiasm Encourages Life!</h1>
    <Grid style={{mtextAlign: "right", marginRight: "auto" }}>
          <Card elevation={20} align="center" style={{padding:"50px", width:"400px", margin:"0px",backgroundColor: "rgba(255, 255, 255, 0.55)",borderRadius:"20px" }}>
          <h1>Dreaming of buying a exotic car?</h1>
          <h4>Import your car now!</h4>
          <br/>
          <BoldItalicButton style={{backgroundColor: 'yellow', position:'static'  }} onClick={()=>window.location.href='/register'}>Buy</BoldItalicButton>
          </Card>
        </Grid>
    
    
    </div>
      </div>
    </>
  )
}