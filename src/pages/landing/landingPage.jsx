import useMediaQuery from '@mui/material/useMediaQuery';

import { useTheme } from '@mui/material';
import { useRef } from 'react';

import "./landing.scss";


export function LandingPage() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    const kikky = useRef();

    const scareKikky = () => {
        kikky.current.style.animationName = "kitty-jump";
        kikky.current.style.animationDuration = "2s";
        kikky.current.style.animationIterationCount = "1";
    };

    return matches ? (
        <div className="wrapper">
            <header>
            <div className="kikky" ref={kikky}></div>
            <div className="title">
                <div className="title__text">MyTherapy</div>
                <div className="title__caption">Always by your side</div>
            </div>

            <div className="go-down" onClick={scareKikky}><span>↓</span></div>
        </header>
        
        </div>
    ) : (
        <div className="in-dev">Desktop under construction...</div>
    )
}