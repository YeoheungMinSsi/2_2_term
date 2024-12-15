import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Home from './components/Home';

import { IStaticMethods } from 'flyonui/flyonui';
declare global {
    interface Window {
        HSStaticMethods: IStaticMethods;
    }
}

function App() {
    const location = useLocation();

    useEffect(() => {
        const loadFlyonui = async () => {
            await import('flyonui/flyonui');
            window.HSStaticMethods.autoInit();
        };
        loadFlyonui();
    }, [location.pathname]);

    return (
        <>
        </>
);
}

export default App;