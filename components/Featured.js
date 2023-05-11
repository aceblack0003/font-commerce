import { styled } from "styled-components";
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "./icon/CartIcon";

const Bg = styled.div`
    background-color:#222;
    color:#fff;
    padding:50px 0;
`;
const Title = styled.h1`
    margin:0;
    font-weight:normal;
    font-size:3rem;
    
`;
const Desc = styled.p`
    color:#aaa;
    font-size:.8rem;
`;
const ColumnsWrapper = styled.div`
    display:grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap:40px;
    img{
        max-width:100%;
    }
`;
const Column = styled.div`
    display:flex;
    align-items:center;
`;
const ButtonsWrapper = styled.div`
    display:flex;
    gap:10px;
    margin-top:25px;
`;
export default function Featured({ product }) {
    return (
        <Bg>
            <Center>
                <ColumnsWrapper>
                    <Column>
                        <div>
                            <Title>{product.title}</Title>
                            <Desc>
                                {product.description}
                            </Desc>
                            <ButtonsWrapper>
                                <ButtonLink href={'/product/' + product._id} outline={1} white={1} >Read more</ButtonLink>
                                <Button white={1} >
                                    <CartIcon />
                                    Add to cart
                                </Button>
                            </ButtonsWrapper>

                        </div>
                    </Column>
                    <Column>
                        <picture>
                            <img src="https://dawid-next-ecommerce.s3.amazonaws.com/1679151719649.png" alt="" />
                        </picture>
                    </Column>
                </ColumnsWrapper>

            </Center>

        </Bg>
    )
}