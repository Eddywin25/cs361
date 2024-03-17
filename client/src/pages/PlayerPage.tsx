// import React, { useEffect, useState } from 'react';
import TablePlayerStats from '../components/TablePlayerStats';
import NumberInputBasic from '../components/NumberInput';
import DownloadStatsButton from '../components/DownloadStatsButton';
import SelectVariants from '../components/SelectDropDown';

// interface Player {
//   id: string;
//   first_name: string;
//   last_name: string;
//   team_id: string;
// }

const PlayerPage = () => {
  return (
    <>
      <div className="tables-container">
        <div className="table-wrapper">
          <SelectVariants />
          <TablePlayerStats />
          <DownloadStatsButton />
        </div>
      </div>
      <NumberInputBasic />
    </>
  );
};

export default PlayerPage;
