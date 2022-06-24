import './App.css';
import { Button, ButtonGroup } from '@mui/material';
import ImageComponent from './components/ImageComponent';
import React from 'react';

require.context('./assets', false, /\.(png|jpe?g|svg)$/);

function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}
const images = importAll(require.context('./assets', false, /\.(png|jpe?g|svg)$/));

function App() {
    // choose a random image from the images object
    const randomImage = Object.keys(images)[Math.floor(Math.random() * Object.keys(images).length)];

    // build src path for image
    const alt = '';

    // initialize prop
    const [srcProp, setSrcProp] = React.useState(randomImage);
    const [altProp, setAltProp] = React.useState(alt);
    const imageComponent = <ImageComponent src={srcProp} alt={altProp} />;

    return (
        <div className="App">
            <header className="App-header">
                {imageComponent}
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </header>
        </div>
    );
}

export default App;
