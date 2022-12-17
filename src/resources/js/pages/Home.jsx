import { Button } from '@mui/material';
import MainTable from '../components/MainTable'; 

function createData(name, task, editBtn, deleteBtn) {
    return { name, task, editBtn, deleteBtn }; 
}

const rows = [
    createData('ドンキーコング', 'バナナ補給', <Button color="secondary" variant="contained">編集</Button>, <Button color="primary" variant="contained">完了</Button>),
    createData('ザ・ロック', 'スタント', <Button color="secondary" variant="contained">編集</Button>, <Button color="primary" variant="contained">完了</Button>),
    createData('カツヤキタムラ', 'レッツゴー', <Button color="secondary" variant="contained">編集</Button>, <Button color="primary" variant="contained">完了</Button>),
    createData('カイ・グリーン', 'バルキング', <Button color="secondary" variant="contained">編集</Button>, <Button color="primary" variant="contained">完了</Button>),
];

const header_list = ['名前', 'タスク内容', '編集', '完了'];

function Home() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="card">
                        <h1>タスク管理</h1>
                        <MainTable header_list={header_list} rows={rows} />  
                    </div>
                </div>
            </div>
        </div>
    );  
}

export default Home;