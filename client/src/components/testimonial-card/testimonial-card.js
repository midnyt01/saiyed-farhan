import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faQuoteRightAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-reveal";

const Container = styled.div`
  width: 280px;
  margin: 10px 20px;
  @media (min-width: 800px) {
    width: 320px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
`;

const ReviewContainer = styled.div`
  position: relative;
  background-color: rgb(90, 116, 255);
  box-sizing: border-box;
  padding: 40px 15px;
  border-radius: 20px 20px 20px 0px;
  @media (min-width: 800px) {
    padding: 60px 20px;
  }
`;
const Review = styled.p`
  color: white;
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 1.3;
`;

const ReviewerContainer = styled.div`
  display: flex;
  margin-top: 20px;
  box-sizing: border-box;
  padding: 5px 10px;
  align-items: center;
`;
const ReviewerImageContainer = styled.div``;

const ReviewerImage = styled.div`
  width: 40px;
  height: 40px;
  background-color: lightgray;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 2px 6px;
  color: black;
`;
const ReviewerInfo = styled.div`
  width: 100%;
`;
const ReviewerName = styled.p`
  letter-spacing: 1px;
  margin: 0 0 0 10px;
`;

const ReviewerWork = styled.p`
  margin: 0 0 0 10px;
  font-size: 14px;
  color: gray;
`;

const TestimonailCard = ({ id }) => {
  return (
    <Fade right>
      <Container>
      <Wrapper>
        <ReviewContainer>
          <Review>
            <FontAwesomeIcon
              icon={faQuoteRightAlt}
              size="xl"
              style={{ marginRight: "7px" }}
            />
            Excepteur consectetur aliqua ex commodo id labore enim sit aute ex
            cillum.px 20Nulla occaecat magna consectetur aliqua ex
          </Review>
        </ReviewContainer>
        <ReviewerContainer>
          <ReviewerImageContainer>
            <ReviewerImage>
              <FontAwesomeIcon icon={faUser} size="2xl" />
            </ReviewerImage>
          </ReviewerImageContainer>
          <ReviewerInfo>
            <ReviewerName>Shailja Pandey</ReviewerName>
            <ReviewerWork>UI Design</ReviewerWork>
          </ReviewerInfo>
        </ReviewerContainer>
      </Wrapper>
    </Container>
    </Fade>
  );
};

export default TestimonailCard;
