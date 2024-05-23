import { useState } from 'react';

import { AboutMeComponents } from './components/about/About-me.component.tsx';
import { FooterComponent } from './components/footer/Footer.component.tsx';
import { HeaderComponent } from './components/header/Header.component.tsx';
import { ProductsListComponent } from './components/productsList/Product-list.component.tsx';
import { mockData } from './mock-data.ts';

import './App.css';

export type CurrentComponent = 'About' | 'ProductList';
export type CurrentTheme = 'Light' | 'Dark';

function App() {
    const [currentComponent, setCurrentComponent] = useState<CurrentComponent>('About');
    const [currentTheme, setCurrentTheme] = useState<CurrentTheme>('Light');
    return (
        <div className={`App${currentTheme}`}>
            <HeaderComponent setCurrentComponent={setCurrentComponent} setCurrentTheme={setCurrentTheme} />
            {currentComponent === 'About' ? <AboutMeComponents /> : <ProductsListComponent products={mockData} />}
            <FooterComponent />
        </div>
    );
}

export default App;
