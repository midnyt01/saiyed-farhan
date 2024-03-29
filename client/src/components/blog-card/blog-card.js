import { convertUnixToDM } from "@/helper-functions";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    background-color:rgb(26, 26, 26);
    color: white;
    img {
        width: 100%;
        height: 200px;
    }
`;

const Wrapper = styled.div`
    width: 100%;
`;

const ImageContainer = styled.div`
    width: 100%;
`

const BodyContainer = styled.div`
    width: 100%;
    padding: 10px 20px;
    padding-bottom: 30px;
`

const ContentTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
`

const ContentBody = styled.p`
    font-size: 16px;
    margin-top: 10px;
`

const InfoContainer = styled.div`
width: 100%;
display: flex;
justify-content: flex-start;
column-gap: 15px;
align-items: center;
margin-top: 20px;
box-sizing: border-box;
/* padding-right: 40px; */
font-size: 16px;
flex-wrap: wrap;
row-gap: 10px;
`;

const CategoryType = styled.div`
padding: 3px 10px;
border: 1px solid white;
border-radius: 5px;
text-transform: capitalize;
`;

const Date = styled.div``;

const ReadingTime = styled.div``;

const ReadMoreButton = styled.div`
margin-top: 25px;
padding: 5px 25px;
background: #95de4c;
color: white;
font-weight: 600;
width: max-content;
border-radius: 0px;
text-transform: uppercase;
cursor: pointer;
&:hover {
    background: #87cb42;
}
`

const HR = styled.hr`
    width:100%;
    margin-top: 10px;
    margin-bottom: 25px;
`;




const BlogCard = ({blog}) => {
    const {BlogId, ImageUrl, Title, MetaDescription, Author, Categories, CreatedAt, ReadTime, Url} = blog;
    const newCategory = JSON.parse(Categories);
    const { date, month } = convertUnixToDM(CreatedAt);

    const router = useRouter();

    const handleOnClick = () => {
        router.push(`/blogs/${Url}`)
    }


  return (
    <Container>
        <Wrapper>
            <ImageContainer>
                <Image src={`${ImageUrl}`} alt="Blog" unoptimized width={100} height={100} />
            </ImageContainer>
            <BodyContainer>
                <ContentTitle>
                    {Title}
                </ContentTitle>
                <InfoContainer style={{marginTop: '5px'}}>
                    <Date>
                        {date + " " + month} 
                    </Date>
                    <ReadingTime>
                        {ReadTime} min Read
                    </ReadingTime>
                </InfoContainer>
                <HR />
                <ContentBody>
                    {MetaDescription.substr(0, 180)}...
                </ContentBody>
                <InfoContainer>
                    <CategoryType>
                        {newCategory[0]}
                    </CategoryType>
                </InfoContainer>
                <ReadMoreButton onClick={handleOnClick}>
                    ReadMore
                </ReadMoreButton>
            </BodyContainer>
        </Wrapper>
    </Container>
  )
}

export default BlogCard;