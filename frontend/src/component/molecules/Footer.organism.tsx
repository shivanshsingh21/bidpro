import React from "react";
import { PrimaryFooter, Footer1, Footer2, Footer3, Footer4 ,Footer5} from "./Footer.styles";

function Footer() {
    return(
        <PrimaryFooter>
            <Footer1>
                <Footer4>Terms & Condition   |</Footer4>
                <Footer4>Hot Products   |</Footer4>
                <Footer4>Legal Terms of Use   |</Footer4>
                <Footer4>Privacy   |</Footer4>
                <Footer4>Partnerships   |</Footer4>
                <Footer4>Winning Tips</Footer4>
            </Footer1>
            <Footer2>
                <Footer4>Responsible Bidding   |</Footer4>
                <Footer4>How it works?   |</Footer4>
                <Footer4>FAQ's   |</Footer4>
                <Footer4>Referral Program   |</Footer4>
                <Footer4>About & Contact Info   |</Footer4>
            </Footer2>
            <Footer3>
                <Footer4></Footer4>
                <Footer4></Footer4>
                <Footer4></Footer4>
                </Footer3>
            <Footer5>© Copyright InterraIT 2022, Designed & Powered by SHIVANSH & NIRMAN.</Footer5>
        </PrimaryFooter>
        
    );
}
export default Footer;