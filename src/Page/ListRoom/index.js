import { Button } from "antd";
import { UnorderedListOutlined, AppstoreOutlined } from '@ant-design/icons';
import RoomGrid from "./RoomGrid";
import { useEffect, useState } from "react";
import { getListRoom } from "../../services/roomsServices";
import RoomTable from "./RoomTable";

function ListRoom() {
    const [rooms, setRooms] = useState([]);

    // Định nghĩa hàm fetchApi ở mức độ cao hơn để có thể sử dụng bởi handleReload
    const fetchApi = async () => {
        const response = await getListRoom();
        setRooms(response);
    };

    useEffect(() => {
        // Gọi API lấy danh sách phòng khi component mount
        fetchApi();
    }, []);

    const handleReload = async () => {
        // Gọi lại hàm fetchApi khi cần reload danh sách phòng
        await fetchApi();
    };

    const [isGrid, setIsGrid] = useState(true);

    return (
        <>
            <Button onClick={() => setIsGrid(!isGrid)}>
                {isGrid ? <UnorderedListOutlined /> : <AppstoreOutlined />}
            </Button>

            {isGrid ? (
                <RoomGrid rooms={rooms} />
            ) : (
                <RoomTable rooms={rooms} onReload={handleReload} />
            )}
        </>
    );
}

export default ListRoom;
