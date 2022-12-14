import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from '@mui/material/Button';

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">React導入できたっしょ？</div>

                        <div className="card-body">ワイはサンプルコンポーネントちゅうことや</div>
                        <div className="card-body">pages下に移動出来た？？</div>

                        <Button color="success" variant="contained">ワイがHome遷移のボタンやな？？</Button> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;