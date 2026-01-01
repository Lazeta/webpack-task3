import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "../mainPage/mainPage.scss";
import { useEffect } from "react";

export function MainPage() {
	useEffect(() => {
  document.body.style.overflow = "hidden";

  return () => {
    document.body.style.overflow = "";
  };
}, []);
  return (
    <div style={{ overflow: "hidden" }}>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundImage: "url('assets/plants_mainPage.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container
          sx={{
            pt: 0,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">
                How will my order be packaged?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Depending upon the size/weight of the products in your order, the
              items could be packaged in a bubble-lined envelope, large white
              chipboard envelope, poster tube, or a box.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="span">
                What payment options are accepted?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              We accept PayPal, and the major credit cards (Visa, MasterCard,
              Discover Card, American Express). We also have payment options via
              GooglePay and ShopPay.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography component="span">
                Do I have to have an account to place a purchase?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Registering for a Supershop account is optional. You may place an
              order as a guest.
            </AccordionDetails>
          </Accordion>
        </Container>
      </Box>
    </div>
  );
}

export default MainPage;
