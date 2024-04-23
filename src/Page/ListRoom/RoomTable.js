import { Table, Badge, Tag, Tooltip, message } from 'antd';
import DeleteRoom from './DeleteRoom';
import EditRoom from './EditRoom';
function RoomTable(props) {
    const { rooms, onReload } = props; 
    const columns = [
        {
            title: 'Tên phòng',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Số Người',
            dataIndex: 'quantityPeople',
            key: 'quantityPeople',
        },
        {
            title: 'Số giường',
            dataIndex: 'quantityBed',
            key: 'quantityBed',
        },
        {
            title: 'Loại phòng',
            dataIndex: 'typeRoom',
            key: 'typeRoom',
            render: (_, record) => {
                // console.log(record.typeRoom);
                return (
                    <>
                        {record.typeRoom ? (
                            <>
                                <Tooltip title="Phòng 5 sao">
                                    <Tag color="#ED9455">VIP</Tag>
                                </Tooltip>

                                {/* <Badge status="warning" text="VIP"/> */}
                            </>
                        ) : (
                            <>
                                <Tooltip title="Phòng 3 sao">
                                    <Tag color="#BED1CF">Thường</Tag>
                                </Tooltip>

                                {/* <Badge status="default" text="Thường" /> */}
                            </>

                        )}
                    </>
                )
            }
        },
        {
            title: 'Tình trạng',
            dataIndex: 'status',
            key: 'status',
            render: (_, record) => {
                // console.log(record.status)
                return (
                    <>
                        {record.status ? (
                            <>
                                <Tag color="green">Còn phòng</Tag>
                                {/* <Badge status="success" text="Còn phòng" /> */}
                            </>

                        ) : (
                            <>
                                <Tag color="red">Hết phòng</Tag>
                                {/* <Badge status="success" text="Còn phòng" /> */}
                            </>
                        )}
                    </>
                )
            }
        },
        {
            title: 'Hành động',
            key: 'actions',
            render: (_, record) => {
                return (
                    <>
                        <DeleteRoom record={record} onReload={onReload} />
                        <EditRoom record={record} onReload={onReload}/>
                    </>
                )
            }
        },
    ];
    return (
        <>  
            <Table dataSource={rooms} columns={columns} rowKey='id' />
        </>
    )
}
export default RoomTable;