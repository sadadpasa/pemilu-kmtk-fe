import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { use100vh } from 'react-div-100vh'
import { useSpring  } from 'react-spring'

import {
    Wrapper,
    CircleDecorative,
    ComingSoonWrapper,
    ComingSoonTypography,
    PemiluFormaturTypography,
    KMTK2021Typography,
    HeroWrapper,
    SocialMediaIcons,
    IconWrapper,
    StyledJamGadang,
    StyledMonumenNasional,
    BusinessLogo,
    LogoStyled,
    HoverImage
} from '../styles/ComingSoonStyle'

import JamGadang from '../assets/images/jam-gadang.svg'
import MonumenNasional from '../assets/images/monumen-nasional.svg'
import LogoUGM from '../assets/images/logo-ugm.png'
import LogoKMTK from '../assets/images/logo-kmtk.png'
import LogoKabinetKMTK from '../assets/images/logo-kabinet-kmtk.png'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(calc(${x / 16}px - 50%),calc(${y / 16}px - 50%),0) rotateY(${(x / window.innerWidth)*15}deg)`
const trans2 = (x, y) => `translate3d(calc(${x / 12}px - 50%),calc(${y / 12}px - 60%),0) rotateY(${(x / window.innerWidth)*15}deg)`
const trans3 = (x, y) => `translate3d(calc(${x / 10}px - 50%),calc(${y / 10}px - 60%),0) rotateY(${(x / window.innerWidth)*15}deg)`
const trans4 = (x, y) => `translate3d(calc(${x / 8}px - 50%),calc(${y / 8}px + 275%),0) rotateY(${(x / window.innerWidth)*15}deg)`

const COMING_LIST = ["C", "O", "M", "I", "N", "G", "S", "O", "O", "N"]

export default function ComingSoon() {
    const [propsParallax, setParallax] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
    const [hovered, setHovered] = useState(-1);

    const handlePointerMove = (e) => {
        e.preventDefault();
        setParallax( {xy : calc(e.clientX, e.clientY)});
    }

    const handlePointerOver = (index, e) => {
        e.preventDefault();
        setHovered(index);
    }

    return (
            <Wrapper style={{height: use100vh()}} onMouseMove={handlePointerMove}>
                <BusinessLogo>
                    <LogoStyled src={LogoUGM} alt='Logo UGM' />
                    <LogoStyled src={LogoKMTK} alt='Logo KMTK' />
                    <LogoStyled src={LogoKabinetKMTK} alt='Logo Kabinet KMTK 2020/2021' />
                </BusinessLogo>
                <HeroWrapper>
                    <CircleDecorative style={{ transform: propsParallax.xy.to(trans1) }}>
                        {
                            COMING_LIST.map((c,index) => (
                                // <HoverImage key={index} src={process.env.PUBLIC_URL + `/img/hero/hero-${index+1}.png`} style={{opacity: (hovered === index ? 0.25 : 0.0)}} /> 
                                <HoverImage key={index} src={require(`../assets/images/hero/hero-${index+1}.webp`).default} alt='Ilustrasi Pemilu KMTK' style={{opacity: (hovered === index ? 0.25 : 0.0)}} /> 
                            ))
                        }
                        <HoverImage key={11} src={require(`../assets/images/hero/hero-main.webp`).default} alt='Ilustrasi Pemilu KMTK' style={{opacity: (hovered === "kmtk" ? 0.2 : 0.0)}} /> 
                    </CircleDecorative>
                    <ComingSoonWrapper style={{ transform: propsParallax.xy.to(trans2) }} >
                        {
                            COMING_LIST.map((c, index) => (
                                <>
                                    <ComingSoonTypography key={index} onPointerOver={(e) => handlePointerOver(index, e)} >
                                        {c}
                                    </ComingSoonTypography>
                                    {index === 5 && <br />}
                                </>
                            ))
                        }

                    </ComingSoonWrapper>
                    <PemiluFormaturTypography style={{ transform: propsParallax.xy.to(trans3) }} >
                        Pemilu Formatur
                    </PemiluFormaturTypography>
                    <KMTK2021Typography style={{ transform: propsParallax.xy.to(trans4) }} onPointerOver={(e) => handlePointerOver("kmtk", e)}>
                        KMTK 2021
                    </KMTK2021Typography>
                </HeroWrapper>
                <SocialMediaIcons>
                    <IconWrapper href='https://instagram.com/kmtkftugm' target='_blank' rel='noopener noreferer'>
                        <FontAwesomeIcon icon={['fab', 'instagram']} size="lg" />
                    </IconWrapper>
                    <IconWrapper href='https://line.me/R/ti/p/@kmtkftugm' target='_blank' rel='noopener noreferer'>
                        <FontAwesomeIcon icon={['fab', 'line']} size="lg" />
                    </IconWrapper>
                    <IconWrapper href='https://line.me/R/ti/p/@sdg0260c' target='_blank' rel='noopener noreferer'>
                        <FontAwesomeIcon icon={['fab', 'line']} size="lg" />
                    </IconWrapper>
                </SocialMediaIcons>
                <StyledMonumenNasional src={MonumenNasional} alt='Monumen Nasional'/>
                <StyledJamGadang src={JamGadang} alt='Jam Gadang'/>
            </Wrapper>
    )
}