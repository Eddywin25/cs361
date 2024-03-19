import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';

const StatAcademyPage = () => {
  return (
    <div className="content-main">
      <h1>Stat Academy</h1>
        <article className='article-main'>
          <p>Here you will find definitions for the stats presented throughout this site.</p>
        </article>
      <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Stat Abbreviation</TableCell>
                        <TableCell>Stat Description</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>PTS</TableCell>
                    <TableCell>Points: the number of points scored a player or team.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>FGA</TableCell>
                    <TableCell>Field Goal Attemps: the number of shots attempted.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>FGM</TableCell>
                    <TableCell>Field Goals Made: the number of shots made.</TableCell>
                  </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  );
};

export default StatAcademyPage;
