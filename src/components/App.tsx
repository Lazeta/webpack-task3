import { useState } from "react";
import classes from './App.module.scss';
import { Link, Outlet } from "react-router-dom";
import About from "@/pages/about/About";
import pngwing from '@/assets/pngwing.com.png';
import glaza from '@/assets/glaza-zivotnyh-smotrat-krupnym-planom-nabludaa-za-prirodoi-s-generativnym-iskusstvennym-intellektom.jpg';
import Art from '@/assets/art.svg';

function TODO(a: number) {
    console.log('TODO');
}




export const App = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prev => prev + 1);
    }
    // TODO('5');

    // if(__PLATFORM__ === 'desktop') {
    //     return <div>ISDESKTOPPLATFORM</div>
    // }
    // if(__PLATFORM__ === 'mobile') {
    //     return <div>ISMOBILEPLATFORM</div>
    // }
    // if(__ENV__ === 'development') {
    //     console.log('Development mode');
    // }

    return (
        <>
        <div data-testid = {'App.DataTestId'}></div>
        <div>
            <h1 data-testid={"Platform"}>PLATFORM = {__PLATFORM__}</h1>
            <div>
                <img width={100} height={100} src={pngwing} alt="pngwing" />
                <img width={100} height={100} src={glaza} alt="glaza" />
                
            </div>
            <div>
                <Art width={100} height={100}/>
            </div>
            <Link to="/about">About</Link>
            <br/>      
            <Link to="/shop">Shop</Link>
            <h1 className={classes.value}>{count}</h1>
            <button className={classes.button} onClick={increment}><span>Increment</span></button>
            <About />
        </div>
        </>
    );
};

