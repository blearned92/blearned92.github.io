import styled from 'styled-components';
import Sprite from '../../images/Sprite.png';
import "../../common/colors.scss";

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const BannerImage = styled.img`
    width: 7rem;
    border-radius: 100%;
    background-color: purple;
`;

const Banner = () => {
    return (
        <BannerImage src={String(Sprite)}/>
    )
}

export default Banner;