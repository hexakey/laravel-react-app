  
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

function MainTable(props) {
    //親コンポーネントからpropsで受け取る
    const {header_list, rows} = props;

    return (
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
    );  
}

export default MainTable;