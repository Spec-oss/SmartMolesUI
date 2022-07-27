import MUIDataTable from 'mui-datatables';
import { useState, useEffect } from 'react';

const MuiTable = ({data, columns, options,title}) => {
    useEffect(()=>{
  console.log(data)
    },[])
   const tableData = {
     columns,
     data,
     options,
     title
   };
    return (
        <MUIDataTable
        title={title}
        data={data}
        columns={columns}
        options={options}
      />
    );
  };
  
  export default MuiTable;
  