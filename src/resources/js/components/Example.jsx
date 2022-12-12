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
                        <Button color="success" variant="contained">ワイがMaterial-UIのボタンやな？？</Button> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;
const Index = ReactDOM.createRoot(document.getElementById("app"));

Index.render(
    <React.StrictMode>
        <Example/>
    </React.StrictMode>
)

