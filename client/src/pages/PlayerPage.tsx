import React, { useEffect, useState } from 'react';
import TablePlayerStats from '../components/TablePlayerStats';
import NumberInputBasic from '../components/NumberInput';
import DownloadStatsButton from '../components/DownloadStatsButton';
import SelectVariants from '../components/SelectDropDown';

const PlayerTableParentDiv = () => {
  const [selectedPlayerId, setSelectedPlayerId] = useState('');

  return (
    <div>
      <SelectVariants onChange={setSelectedPlayerId} />
      <TablePlayerStats selectedPlayerId={selectedPlayerId} />
    </div>
  );
};

const PlayerPage = () => {
  return (
    <>
      <div className="content-main">
        <h1>Player Stats</h1>
        <article className='article-main'>
          <p>To view a single player, use the 'Player' dropdown above the table.</p>
        </article>
        <div className="tables-container">
          <div className="table-wrapper">
            <PlayerTableParentDiv />
            <DownloadStatsButton />
          </div>
        </div>
        <NumberInputBasic />
      </div>
    </>
  );
};

export default PlayerPage;
