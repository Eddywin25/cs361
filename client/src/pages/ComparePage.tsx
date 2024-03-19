import React, { useEffect, useState } from 'react';
import TablePlayerStats from '../components/TablePlayerStats';
import NumberInputBasic from '../components/NumberInput';
import SelectVariants from '../components/SelectDropDown';
import '../App.css';

const PlayerTableParentDiv = () => {
  const [selectedPlayerId, setSelectedPlayerId] = useState('');

  return (
    <div>
      <SelectVariants onChange={setSelectedPlayerId} />
      <TablePlayerStats selectedPlayerId={selectedPlayerId} />
    </div>
  );
};

const ComparePage = () => {
  return (
    <>
      <div className="content-main">
        <h1>Compare Players</h1>
        <article className='article-main'>
          <p>Compare player stats using the dropdowns above each table.</p>
        </article>
        <div className="tables-container">
          <div className="table-wrapper">
            <PlayerTableParentDiv />
          </div>
          <div className="table-wrapper">
            <PlayerTableParentDiv />
          </div>
        </div>
        <NumberInputBasic />
      </div>
    </>
  );
};

export default ComparePage;
