// import React, { useEffect, useState } from 'react';
import TablePlayerStats from '../components/TablePlayerStats';
import NumberInputBasic from '../components/NumberInput';
import SelectVariants from '../components/SelectDropDown';
import '../App.css';

// interface Player {
//   id: string;
//   first_name: string;
//   last_name: string;
//   team_id: string;
// }

const ComparePage = () => {
  return (
    <>
      <div className="tables-container">
        <div className="table-wrapper">
          <SelectVariants />
          <TablePlayerStats />
        </div>
        <div className="table-wrapper">
          <SelectVariants />
          <TablePlayerStats />
        </div>
      </div>
      <NumberInputBasic />
    </>
  );
};

export default ComparePage;
