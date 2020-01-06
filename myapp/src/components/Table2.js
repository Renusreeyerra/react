
import React from 'react';
import {Table} from 'antd'


const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
     
    },
    {
      title: 'Age',
      dataIndex: 'age',
      
    },
    {
      title: 'Address',
      dataIndex: 'address',
    
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];
const mystyle={
  display:"inline-block",
  margin:"30px"
 
  
}
function Table2() {
  return (
    <div className="table2" style={mystyle} >
      <Table columns={columns}
             dataSource={data}
             bordered
       />
    </div>
  );
}

export default Table2;






