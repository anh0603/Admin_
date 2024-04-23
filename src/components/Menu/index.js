import {
    DashboardOutlined,
    AppstoreOutlined,
    LayoutOutlined,
    PieChartOutlined,
    FileOutlined,
    LockOutlined,
    PlusCircleOutlined,
    UnorderedListOutlined

} from '@ant-design/icons';
import { Menu, Affix } from 'antd';
import { Link } from 'react-router-dom';
function MenuSider() {
    const items = [
        {
            label: "DashBoard",
            icon: <DashboardOutlined />,
            key: "menu-1",
            children: [
                {
                    label: <Link to={"/"}>DashBoard</Link>,
                    key: "/",
                }
            ]
        }, 
        {
            label: "Create Room",
            icon: <PlusCircleOutlined />,
            children: [
                {
                    label: <Link to={"/create-room"}>Create Room</Link>,
                    key: "/create-room",
                }
            ]
        },
        {
            label: "Book Room",
            icon: <LockOutlined />,
            children: [
                {
                    label: <Link to={"/book-room"}>Book Room</Link>,
                    key: "/book-room",
                }
            ]
        },
        {
            label: "List Room",
            icon: <UnorderedListOutlined />,
            children: [
                {
                    label: <Link to={"/list-room"}>List Room</Link>,
                    key: "/list-room",
                }
            ]
        },
    ];
    return (
        <>
            <Affix offsetTop={72}>
                <Menu
                    mode="inline"
                    items={items}
                    defaultSelectedKeys={["/"]}
                    defaultOpenKeys={["menu-1"]}
                />
            </Affix>
        </>
    )
}
export default MenuSider;