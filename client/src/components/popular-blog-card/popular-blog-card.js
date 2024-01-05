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
        height: 180px;
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
    cursor: pointer;
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
    font-size: 14px;
`;

const Date = styled.div`
    font-size: 14px;

`;

const ReadingTime = styled.div`
    font-size: 14px;
`;

const AuthorName = styled.div`
    margin-top: 20px;
    padding: 3px 15px;
    background: white;
    color: black;
    font-weight: 400;
    font-size: 14px;
    width: max-content;
    border-radius: 20px;
    text-transform: uppercase;
`

const PopularBlogCard = ({blog}) => {
    const {BlogId, ImageUrl, Title, MetaDescription, Author, Categories, CreatedAt, ReadTime, Url} = blog;
    const newCategory = JSON.parse(Categories);
    const { date, month } = convertUnixToDM(CreatedAt);

    const router = useRouter();

    const handleOnClick = () => {
        router.push(`/blogs/${Url}`)
    }

  return (
    <Container onClick={handleOnClick}>
        <Wrapper>
            <ImageContainer>
                <Image src={`${ImageUrl}`} alt="Blog" unoptimized width={100} height={100} />
            </ImageContainer>
            <BodyContainer>
                <ContentTitle>
                    {Title}
                </ContentTitle>
                <ContentBody>
                {MetaDescription.substr(0, 120)}...
                </ContentBody>
                <InfoContainer>
                    <CategoryType>
                        {newCategory[0]}
                    </CategoryType>
                    <Date>
                        {date + " " + month} 
                    </Date>
                    <ReadingTime>
                        {ReadTime} min Read
                    </ReadingTime>
                </InfoContainer>
                <AuthorName>
                    BY {Author}
                </AuthorName>
            </BodyContainer>
        </Wrapper>
    </Container>
  )
}

export default PopularBlogCard;