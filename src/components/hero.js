import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const Hero = () => {
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

  return (
    <div className="backgroundImageHolder">
      <div className="backgroundImageCover"></div>
      <BackgroundImage
        className="backgroundImage"
        fluid={data.file.childImageSharp.fluid}
        fadeIn={false}
      />
      <div className="bigText">
        Software Developer
      </div>
    </div>
  );
}

export default Hero;