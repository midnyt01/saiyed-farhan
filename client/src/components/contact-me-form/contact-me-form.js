import { GlobalContext } from "@/context/global.context";
import { makeid } from "@/helper-functions";
import { httpPostContactDetails } from "@/utils/api";
import { faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import styled from "styled-components";


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
    width: 50%;
    margin: auto;
}
`;

const ContactForm = styled.form`
    width: 90%;
    margin: auto;
    margin-top: 70px;
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
    font-size: 17px;
    letter-spacing: 0.7px;
    font-weight: 400;
    color: black;
    border-radius: 8px;
    background: rgb(225, 226, 216);
    outline: none;
    border: none;
    @media(min-width: 800px) {
        width: 50%;
    }
`;

const FromSelect = styled.select`
    width: 110%;
    box-sizing: border-box;
    padding: 15px;
    font-size: 17px;
    letter-spacing: 0.7px;
    font-weight: 400;
    color: black;
    border-radius: 8px;
    background: rgb(225, 226, 216);
    outline: none;
    border: none;
    @media(min-width: 800px) {
        width: 50%;
    }
`;

const FormOption = styled.option`
    font-size: 17px;
    font-weight: 400;
    outline: none;
    background: rgba(225, 226, 216, 0.5);
`;

const MessageBox = styled.textarea`
    width: 110%;
    box-sizing: border-box;
    padding: 15px;
    font-size: 17px;
    letter-spacing: 0.7px;
    font-weight: 400;
    color: black;
    border-radius: 8px;
    height: 150px;
    background: rgb(225, 226, 216);
    font-family: inherit;
    outline: none;
    border: none;
    @media(min-width: 800px) {
        width: 50%;
    }
`;

const SubmitButton = styled.button`
    border: none;
    margin-top: 30px;
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
    @media (min-width: 800px){
        margin-top: 50px;
        padding: 15px 50px;
        font-size: 18px;
    }
`;

const HR = styled.hr`
width: 50%;
margin: auto;
box-sizing: border-box;
margin-top: 70px;
`

const SocialsContainer = styled.div`
    width: 100%;
`;

const SocialTitle = styled.div`
text-align: center;
margin-top: 70px;
font-size: 35px;
font-weight: 600;
letter-spacing: 0.5px;
`;

const SocialWrapper = styled.div`
width: 300px;
margin: auto;
  margin-top: auto;
margin-top: 50px;
display: flex;
justify-content: space-between;
align-items: center;
`;

const DEFAULT_FORM_FIELD = {
    FullName: "",
    Email:"",
    Service: "",
    Message: ""
}


const ContactMeForm = () => {

    const [formField, setFormField] = useState(DEFAULT_FORM_FIELD);
    const {FullName, Email, Service, Message} = formField;

    const {addNotifiction} = useContext(GlobalContext)


    const clearFormFileds = () => {
        setFormField(DEFAULT_FORM_FIELD)
    }

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setFormField({...formField, [name]: value})
    }

    const handleOnSubmitForm = async (e) => {
        e.preventDefault();
        try {
            if(FullName.length == 0 || Email.length == 0 || Service.length == 0) throw error
            let response = await httpPostContactDetails(formField);
            if (response.success) {
                console.log(response)
                addNotifiction(makeid(5), "success", "Thanks Contacting me!");
                clearFormFileds();
            } else {
                addNotifiction(makeid(5), "danger", "Error in making contact, try again later")
                console.error('error in posting form details',response)
            }
        } catch (error) {
            addNotifiction(makeid(5), "danger", "Error in making contact, try again later")
            console.error('error in contact posting',error)
        }
    }

  return (
    <Container>
        <Wrapper>
            <Title>
                Contact me
            </Title>
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
                <FromSelect name="Service" onChange={handleOnChange} value={Service}>
                    <FormOption value="" disabled hidden>Service</FormOption>
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
        <SocialsContainer>
            <SocialTitle>
                Find me on
            </SocialTitle>
            <SocialWrapper>
                <FontAwesomeIcon icon={faInstagram} size="3x" />
                <FontAwesomeIcon icon={faYoutube} size="3x" />
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
                <FontAwesomeIcon icon={faFacebook} size="3x" />
            </SocialWrapper>
        </SocialsContainer>
    </Container>
  )
}

export default ContactMeForm