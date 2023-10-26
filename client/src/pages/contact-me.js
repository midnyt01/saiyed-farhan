import { GlobalContext } from "@/context/global.context";
import { makeid } from "@/helper-functions";
import { httpPostContactDetails } from "@/utils/api";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faMailchimp,
  faSkype,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faFax,
  faLocation,
  faLocationPin,
  faMailBulk,
  faMailReply,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import { useContext, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 50px;
`;

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
`;

const Title = styled.h3`
  font-size: 22px;
  line-height: 1.5;
  text-transform: uppercase;
  text-decoration: underline;
  text-align: center;
  font-weight: 600;
  letter-spacing: 1px;
  @media (min-width: 800px) {
    width: 50%;
    margin: auto;
  }
`;

const ContactForm = styled.form`
  width: 90%;
  margin: auto;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  row-gap: 30px;
`;

const FormInput = styled.input`
  width: 110%;
  box-sizing: border-box;
  padding: 15px;
  font-size: 16px;
  letter-spacing: 0.7px;
  font-weight: 400;
  color: black;
  border-radius: 8px;
  background: rgb(225, 226, 216);
  outline: none;
  border: none;
  @media (min-width: 800px) {
    width: 50%;
  }
`;

const FromSelect = styled.select`
  width: 110%;
  box-sizing: border-box;
  padding: 15px;
  font-size: 16px;
  letter-spacing: 0.7px;
  font-weight: 400;
  color: black;
  border-radius: 8px;
  background: rgb(225, 226, 216);
  outline: none;
  border: none;
  @media (min-width: 800px) {
    width: 50%;
  }
`;

const FormOption = styled.option`
  font-size: 16px;
  font-weight: 400;
  outline: none;
  background: rgba(225, 226, 216, 0.5);
`;

const MessageBox = styled.textarea`
  width: 110%;
  box-sizing: border-box;
  padding: 15px;
  font-size: 16px;
  letter-spacing: 0.7px;
  font-weight: 400;
  color: black;
  border-radius: 8px;
  height: 150px;
  background: rgb(225, 226, 216);
  font-family: inherit;
  outline: none;
  border: none;
  @media (min-width: 800px) {
    width: 50%;
  }
`;

const SubmitButton = styled.button`
  border: none;
  margin-top: 10px;
  box-sizing: border-box;
  padding: 12px 40px;
  letter-spacing: 0.5px;
  background: rgb(90, 116, 255);
  color: white;
  font-size: 16px;
  font-weight: 400;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: rgb(67, 97, 255);
  }
  @media (min-width: 800px) {
    padding: 15px 50px;
  }
`;

const HR = styled.hr`
  width: 50%;
  margin: auto;
  box-sizing: border-box;
  margin-top: 40px;
`;

const ContactInfoContainer = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 50px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const ContactInfoTitle = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const ContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  row-gap: 10px;
  height: 200px;
  width: 200px;
`;
const ContactIcon = styled.div``;

const ContactHeading = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

const ContactDetails = styled.div`
  text-align: center;
  font-size: 18px;
`;

const DEFAULT_FORM_FIELD = {
  FullName: "",
  Email: "",
  Service: "",
  Message: "",
};

const ContactMePage = () => {
  const [formField, setFormField] = useState(DEFAULT_FORM_FIELD);
  const { FullName, Email, Service, Message } = formField;

  const { addNotifiction } = useContext(GlobalContext);

  const clearFormFileds = () => {
    setFormField(DEFAULT_FORM_FIELD);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormField({ ...formField, [name]: value });
  };

  const handleOnSubmitForm = async (e) => {
    e.preventDefault();
    try {
      if (FullName.length == 0 || Email.length == 0 || Service.length == 0)
        throw error;
      let response = await httpPostContactDetails(formField);
      if (response.success) {
        console.log(response);
        addNotifiction(makeid(5), "success", "Thanks Contacting me!");
        clearFormFileds();
      } else {
        addNotifiction(
          makeid(5),
          "danger",
          "Error in making contact, try again later"
        );
        console.error("error in posting form details", response);
      }
    } catch (error) {
      addNotifiction(
        makeid(5),
        "danger",
        "Error in making contact, try again later"
      );
      console.error("error in contact posting", error);
    }
  };

  return (
    <>
      <Head>
        <title>
            Digital Marketing Consultant Contact - Saiyed Farhan
        </title>
        <meta
          name="description"
          content="If you have any query or want to discuss anything related to online marketing, feel free to contact!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Wrapper>
          <Title>Contact me</Title>
          <ContactForm onSubmit={handleOnSubmitForm}>
            <FormInput
              placeholder="Full Name"
              name="FullName"
              value={FullName}
              onChange={handleOnChange}
            />
            <FormInput
              placeholder="Email"
              name="Email"
              value={Email}
              onChange={handleOnChange}
            />
            <FromSelect
              name="Service"
              onChange={handleOnChange}
              value={Service}
            >
              <FormOption value="" disabled hidden>
                Service
              </FormOption>
              <FormOption value="Branding">Branding</FormOption>
              <FormOption value="Sales">Sales</FormOption>
              <FormOption value="Traffic">Traffic</FormOption>
              <FormOption value="Leads">Leads</FormOption>
            </FromSelect>
            <MessageBox
              placeholder="Write your message here (Optional)"
              name="Message"
              value={Message}
              onChange={handleOnChange}
            />
            <SubmitButton>Make Contact</SubmitButton>
          </ContactForm>
        </Wrapper>
        <HR />
        <ContactInfoContainer>
          <ContactInfoWrapper>
            <ContactIcon>
              <FontAwesomeIcon icon={faLocationPin} size="4x" />
            </ContactIcon>
            <ContactHeading>Office</ContactHeading>
            <ContactDetails>
                Fudugo, Chhaoni Nagpur, MH - 440013
            </ContactDetails>
          </ContactInfoWrapper>

          <ContactInfoWrapper>
            <ContactIcon>
              <FontAwesomeIcon icon={faPhone} size="4x" />
            </ContactIcon>
            <ContactHeading>Phone Number</ContactHeading>
            <ContactDetails>
                +91-8767609584
            </ContactDetails>
          </ContactInfoWrapper>

          <ContactInfoWrapper>
            <ContactIcon>
              <FontAwesomeIcon icon={faSkype} size="4x" />
            </ContactIcon>
            <ContactHeading>Skype</ContactHeading>
            <ContactDetails>f.shabi</ContactDetails>
          </ContactInfoWrapper>

          <ContactInfoWrapper>
            <ContactIcon>
              <FontAwesomeIcon icon={faMailBulk} size="4x" />
            </ContactIcon>
            <ContactHeading>Mail</ContactHeading>
            <ContactDetails>ifarhanism@gmail.com</ContactDetails>
          </ContactInfoWrapper>
        </ContactInfoContainer>
      </Container>
    </>
  );
};

export default ContactMePage;
