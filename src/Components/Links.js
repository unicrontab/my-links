import React from 'react';
import styled from 'styled-components';
import icons from '../icons';

const LinkContainer = styled.div`
    padding: 5px;
    display: grid;
    transition: transform 0.2s ease-in-out;
    justify-content: end;
    justify-items: end;
    align-items: center;
`;

const Link = styled.a`
    padding: 0.2rem;
    width: 25px;
    height: 25px;
    &:hover {
        transform: scale(1.4);
    }
    grid-row: 1;
`;
const Icon = styled.svg`

`;

const createLink = (url, icon, color) => (
    <Link key={url} href={url}>
        <Icon
            width="20" 
            height="20" 
            viewBox="0 0 1792 1792"
            fill={color}
        >
            {icons[icon] || icons.default}
        </Icon>
    </Link>
);

const Links = props => (
    <LinkContainer >
        {props.data.map(link => createLink(link.url, link.icon, props.color))}
    </LinkContainer>
);

export default Links;
