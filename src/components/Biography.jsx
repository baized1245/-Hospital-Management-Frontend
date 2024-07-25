/* eslint-disable react/prop-types */

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            ZeeCare Medical Institute is committed to advancing healthcare
            through innovative research, comprehensive patient care, and medical
            education. Our dedicated team of healthcare professionals works
            tirelessly to enhance the quality of life for our patients and their
            families.
          </p>
          <p>
            At ZeeCare, we pride ourselves on our state-of-the-art facilities
            and cutting-edge technologies that enable us to provide top-notch
            medical services. Our patient-centered approach ensures that each
            individual receives personalized care tailored to their specific
            needs.
          </p>
          <p>
            We believe in the power of collaboration and community involvement.
            Our partnerships with local organizations and healthcare providers
            help us extend our reach and impact, ensuring that everyone has
            access to the healthcare they deserve.
          </p>
          <p>
            As we look forward to 2024 and beyond, our commitment to excellence,
            innovation, and compassionate care remains steadfast. Together, we
            are building a healthier future for all.
          </p>
          <p>
            We are passionate about healthcare, and coding is our tool for
            innovation!
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
