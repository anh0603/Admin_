import { Button, Popconfirm, message } from "antd";
import { DeleteOutlined } from '@ant-design/icons';
import { deleteRoom } from "../../services/roomsServices";

function DeleteRoom(props) {
    const {record, onReload} = props; 
    const handleDelete = async () => {
        const response = await deleteRoom(record.id);
        if(response) {
            onReload(); 
        } 
        // console.log(record.id);
    }
     
    return (
        <> 
            <Popconfirm title="Bạn có chắc chắn muốn xóa không?" onConfirm={handleDelete}>
                <Button danger icon={<DeleteOutlined />} size="small" />
            </Popconfirm>
            
        </>
    )
}
export default DeleteRoom;