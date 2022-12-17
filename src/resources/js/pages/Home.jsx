import ReactDOM from 'react-dom';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
}));
  
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

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
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead>
                                <TableRow>
                                    {header_list.map((item, index) => (
                                        <StyledTableCell align="center" key={index}>{item}</StyledTableCell>
                                    ))}
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rows.map((row, index) => (
                                    <StyledTableRow key={index}>
                                        {Object.keys(row).map(function(key, i) {
                                            return(
                                                <StyledTableCell align="center" key={i}>{row[key]}</StyledTableCell>
                                            );
                                        })}
                                    </StyledTableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>
        </div>

    );  
}

export default Home;