import styled from "styled-components";
import TestimonailCard from "../testimonial-card/testimonial-card";

const Container = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 100px;
`;

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
`;

const Title = styled.h3`
  font-size: 30px;
  line-height: 1.5;
  text-transform: uppercase;
  text-decoration: underline;
  text-align: center;
  font-weight: 600;
  letter-spacing: 1px;
  @media (min-width: 800px) {
    font-size: 50px;
    width: 80%;
    margin: auto;
  }
`;

const TestimoniesContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  margin-top: 50px;

  /* Customize scrollbar */
  scrollbar-width: thin;
  scrollbar-color: black white;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: black;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #999;
  }

  &::-webkit-scrollbar-track {
    background-color: white;
    border-radius: 10px;
  }
`;

const TestimoniesWrapper = styled.div`
  display: flex;
  margin-bottom: 35px;
`;
const HR = styled.hr`
  width: 90%;
  margin: auto;
  box-sizing: border-box;
  margin-top: 70px;
`;

const TESTIMONIALS = [
  {
    Id: 1,
    Name: "Ramkumar",
    message:
      "I hired saiyed as a Digital Marketing consultant for Search Engine Optimisation and Social Media marketing for my website. His knowledge on digital marketing is impressive. More than that, He is very friendly to work with and delivers the results on time. I am extremely satisfied with the quality of work he delivered. I recommend him for any digital marketing services.",
  },
  {
    Id: 2,
    Name: "Hazekid Hains",
    message:
      "I had a wonderful experience with Google ads, Saiyed Farhan is a genius. He optimized my campaign so perfectly, explained me where i went wrong and also guided me with steps for future. His strategy helped me gain more sales than before. Overall I'm very happy with his service.",
  },
  {
    Id: 2,
    Name: "Hazekid Hains",
    message:
      "I had a wonderful experience with Google ads, Saiyed Farhan is a genius. He optimized my campaign so perfectly, explained me where i went wrong and also guided me with steps for future. His strategy helped me gain more sales than before. Overall I'm very happy with his service.",
  },

];

const Testimonials = () => {
  return (
    <Container>
      <Wrapper>
        <Title>what people say about me</Title>
        <TestimoniesContainer>
          <TestimoniesWrapper>
            {TESTIMONIALS.map((testimonial) => {
              return <TestimonailCard key={testimonial} id={testimonial} />;
            })}
          </TestimoniesWrapper>
        </TestimoniesContainer>
      </Wrapper>
      <HR />
    </Container>
  );
};

export default Testimonials;
