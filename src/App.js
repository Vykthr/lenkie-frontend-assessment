import Routes from './routes'
import Theme from './styles/theme';
import { useEffect } from 'react';
import "aos/dist/aos.css";
import "react-multi-carousel/lib/styles.css";
import AOS from "aos";

const App = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-sine',
            delay: 100,
            once: false
        });
    }, []);
    
    return (
        <Theme>
            <Routes />
        </Theme>
    );
}

export default App;