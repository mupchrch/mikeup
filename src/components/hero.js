import React, { useRef } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const Hero = ({ movement }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "myself_afar.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 2048) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const nextTransitionLen = useRef(0.5);

  const heroImageStyle = {};
  const heroMaskStyle = {};
  const bigTextStyle = {};
  switch(movement) {
    case "right":
      heroImageStyle.transition = "transform 0.5s";
      heroImageStyle.transform = "translateX(20%)";
      nextTransitionLen.current = 0.5;

      heroMaskStyle.opacity = 0.5;
      heroMaskStyle.pointerEvents = "auto";
      break;
    case "left":
      heroImageStyle.transition = "transform 0.25s 0.25s";
      heroImageStyle.transform = "translateX(-10%)";
      nextTransitionLen.current = 0.25;

      heroMaskStyle.opacity = 0.5;
      heroMaskStyle.pointerEvents = "auto";

      bigTextStyle.left = "3%";
      bigTextStyle.transition = "left 0.25s 0.25s";
      break;
    default:
      heroImageStyle.transition = `transform ${nextTransitionLen.current}s`;
      nextTransitionLen.current = 0.5;
      
      heroMaskStyle.opacity = 0;
  }

  return (
    <div className="hero">
      <Link to="/" className="heroMask" style={heroMaskStyle} />
      <BackgroundImage
        className="heroImage"
        fluid={data.file.childImageSharp.fluid}
        fadeIn={false}
        style={heroImageStyle}
      />
      <div className="bigText" style={bigTextStyle}>
        Software Developer
      </div>
    </div>
  );
}

export default Hero;