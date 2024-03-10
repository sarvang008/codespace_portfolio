/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";
import irr from "irr";
/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a UI/UX student studying at Barnett Technical University. I enjoy creating unique and simplistic user interfaces in creative ways.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web design",
  "User experience",
  "Inclusive design",
  "Focus group testing",
  "Mobile user interfaces",
  "Graphic design",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my UI/UX experience I continually look for new and better ways to make tech accessible by all.";

const About = () => {
  const calXirr = () => {
 // Define cash flows and dates
// Define cash flows and dates
const initialInvestment = -100000; // Initial investment of 1 lakh rupees
const annualPayment = -100000; // Annual payment of 1 lakh rupees for 10 years
const annualBenefit = 141920; // Annual benefit of 1,41,920 rupees for 30 years starting from the 15th year
const annualPaymentsStartYear = 15;
const maturityBenefit = 1000000; // Maturity benefit after 45 years

// Create cash flows and dates arrays
const cashFlows = [initialInvestment];

for (let year = 1; year <= 45; year++) {
  if (year >= annualPaymentsStartYear && year < annualPaymentsStartYear + 10) {
    cashFlows.push(annualPayment);
  } else if (year >= annualPaymentsStartYear + 10 && year < annualPaymentsStartYear + 40) {
    cashFlows.push(annualBenefit);
  } else {
    cashFlows.push(0);
  }
}

cashFlows[45] = maturityBenefit;// Calculate XIRR using financejs

const xirr = irr(cashFlows);

console.log(xirr);

  }

  calXirr();

  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
