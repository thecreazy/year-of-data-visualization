import { Table } from 'antd';

const AntdTable = ({ columns, data }) => {
  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        headerBg='transparent'
      />
    </>
  );
};
export default AntdTable;
