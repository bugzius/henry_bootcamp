import Logo from '../../resources/icon-rick&morty.png';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

import {colorBlueBase} from '../../VariablesENV.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const ContainerMenu = styled.header`
    padding: 10px;
    background: ${colorBlueBase} linear-gradient(.47turn, rgba(0,0,0,0) 50%, #0000ff9a);
    color: white;

    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    justify-items: flex-end;
    align-items: center;
`;

const ImageNavLink = styled(NavLink)`
    --p-size: 10px;
    --m-w: 80px;
    
    @media (max-width:689px) {
        --p-size: 7px;
        --m-w: 60px;
    }

    padding: var(--p-size);
    justify-self: flex-start;
    & img{
        max-width: var(--m-w);
        filter: drop-shadow(0 1px 5px rgba(0,0,0,0.3));
        transition: filter .2s ease;
        &:hover{
            filter: drop-shadow(1px 0 0 rgba(0,0,0,0.3)) hue-rotate(100deg) contrast(2) grayscale(0.7);
        }
    }

    &.active{
        img{
            filter: drop-shadow(0 1px 5px rgba(0,0,0,0.3)) hue-rotate(100deg) contrast(2) grayscale(0.7);
        }
    }
`;


const ContainerListNav = styled.nav`
    --fontSize: 1.1rem;
    --p-size: 10px;
    @media (max-width:689px) {
        --p-size: 7px;
        --fontSize: 0.9rem;
    }

    padding-right: var(--p-size);

    & ul{
        font-size: var(--fontSize);
        display: flex;
        flex-wrap:nowrap;
        align-items: center;
        text-align: center;
        gap: var(--p-size);
        a{
            background: #ffffff31;
            padding: 5px var(--p-size);
            border-radius: 5px;
            text-decoration: none;
            color: inherit;
            transition: all .3s ease;
            &:hover{
                background: #ffff00a1;
            }
            
            //NavLink Favorite
            &.favorite_link{
                position: relative;
                overflow: hidden;
                transition: all .3s ease;
            }
            &.favorite_link:before{
                content: 'Favoritos';
                padding-right: 10px;
                position: absolute;
                left: 100%;
            }
            
            &.favorite_link:hover:before{
                position: static;
            }
        }
    }
`;

//Functions
const activeClassNavLink = ({isActive}) => (
    isActive ? "active" : "disable"
);

export function NavMenu(){
    return (
        <ContainerMenu>
            <ImageNavLink to="/" className={activeClassNavLink}>
                <img src={Logo} alt="icon-rick&morty" />
            </ImageNavLink>
            <ContainerListNav>
                <ul>
                    <NavLink to='/about' className={activeClassNavLink}>
                        Conocenos
                    </NavLink>
                    <NavLink to='/characters' className={activeClassNavLink}>
                        Personajes
                    </NavLink>
                    <NavLink to='/favorites' className={(props) => (
                        `favorite_link ${activeClassNavLink(props)}`
                    )}>
                        <FontAwesomeIcon icon={faHeart} />
                    </NavLink>
                    {/* <NavLink to="/addCharacters" className={activeClassNavLink} >
                        Agrega personajes
                    </NavLink> */}
                </ul>
            </ContainerListNav>
        </ContainerMenu>
    )
}