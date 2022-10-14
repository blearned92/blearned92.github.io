import styled from 'styled-components';
import Sprite from '../../images/Sprite.png';

const Container = styled.div`
    background-color: #3b035e;
    display: flex;
    justify-content: center;
`;

const BannerImage = styled.img`
    width: 10rem;
    margin: 1rem;
    border-radius: 100%;
    background-color: purple;
`;

const Banner = () => {
    return (
        <Container>
            <BannerImage src={String(Sprite)}/>
        </Container>
    )
}

export default Banner;