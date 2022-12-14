import React from 'react';
import ReactDOM from 'react-dom';
// import { Button, Card } from '@material-ui/core';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';


function Home() {
    return (
        <div className="container">
            <Card>
                <Button color="primary" variant="contained" href={`/example`}>Exampleに遷移</Button>
            </Card>
        </div>
    );
}

export default Home;