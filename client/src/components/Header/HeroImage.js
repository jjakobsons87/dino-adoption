import React from 'react';
import background from "../../assets/images/hero-image.jpg";
import logo2 from "../../assets/images/logocreamcropped2.png";
import logo from "../../assets/images/logotransparent.png";


const HeroImage =() => {
    return(
<div className="bordersmall">
    <div className="divtest">
<img
    src={background}
    alt="background of a forest"
    className="hero"
/>
</div>
<div className="logobox">
    <img
        src={logo2}
        className="herotitle2"
        alt="dinosaur logo"
    />
    <img src={logo} className="herotitle" alt="dinosaur logo" />
</div>
</div>
    )
}

export default HeroImage;