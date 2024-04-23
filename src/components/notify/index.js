import { Dropdown, Button, Badge } from 'antd';
import { BellOutlined, MailOutlined, UserAddOutlined, WarningOutlined } from '@ant-design/icons';
import './notify.css';
import avatar from '../../Layout/images/avatar.jpg';
function Notify() {
    const items = [
        {
            label: <div className='notify_item'>
                <div className='notify_item-icon'>
                    <MailOutlined />
                </div>
                <div className='notify_item-content'>
                    <div className='notify_item-title'>
                        Check Your Bell Account Features
                    </div>
                    <div className='notify_item-time'>
                        <span>8 min ago</span>
                    </div>
                </div>
            </div>,
            key: '1',
        },
        {
            label: <div className='notify_item'>
                <div className='notify_item-icon key2'>
                    <UserAddOutlined />
                </div>
                <div className='notify_item-content'>
                    <div className='notify_item-title'>
                        Check Your Bell Account Features
                    </div>
                    <div className='notify_item-time'>
                        <span>8 min ago</span>
                    </div>
                </div>
            </div>,
            key: '2',
        },
        {
            label: <div className='notify_item'>
                <div className='notify_item-icon key3'>
                    <WarningOutlined />
                </div>
                <div className='notify_item-content'>
                    <div className='notify_item-title'>
                        Check Your Bell Account Features
                    </div>
                    <div className='notify_item-time'>
                        <span>8 min ago</span>
                    </div>
                </div>
            </div>,
            key: '3',
        },
        {
            label: <div className='notify_item'>
                <div className='notify_item-icon'>
                    <MailOutlined />
                </div>
                <div className='notify_item-content'>
                    <div className='notify_item-title'>
                        Check Your Bell Account Features
                    </div>
                    <div className='notify_item-time'>
                        <span>8 min ago</span>
                    </div>
                </div>
            </div>,
            key: '4',
        },
        {
            label: <div className='notify_item'>
                <div className='notify_item-icon'>
                    <MailOutlined />
                </div>
                <div className='notify_item-content'>
                    <div className='notify_item-title'>
                        Check Your Bell Account Features
                    </div>
                    <div className='notify_item-time'>
                        <span>8 min ago</span>
                    </div>
                </div>
            </div>,
            key: '5',
        },

    ];
    const user = [
        {
            label: <div className='notify_item'>
                <div className='notify_item-icon'>
                    <MailOutlined />
                </div>
                <div className='notify_item-content'>
                    <div className='notify_item-title'>
                        Check Your Bell Account Features
                    </div>
                    <div className='notify_item-time'>
                        <span>8 min ago</span>
                    </div>
                </div>
            </div>,
            key: '1',
        },
         
    ]
     
    return (
        <>
            <Dropdown
                menu={{
                    items,
                }}
                trigger={['click']}
                dropdownRender={(menu) => (
                    <>
                        <div className='notify_dropdown'>
                            <div className='notify_header'>
                                <div className='notify_header-title'>
                                    <BellOutlined /> Notification
                                </div>
                                <Button type='link'>View All</Button>
                            </div>
                            <div className='notify_body'>
                                {menu}  
                            </div>
                        </div>
                    </>
                )}
            >
                <Badge dot={true}>
                    <Button type="text" className='bell'><BellOutlined /></Button>
                </Badge>
                
            </Dropdown>

            <Dropdown 
                proflie={{
                    user,
                   
                }}
                trigger={['click']}
                dropdownRender={(proflie) => (
                    <>
                        <div className='logo_dropdown'>
                            <div className='logo-header'>
                                <div className='logo-title logo'>
                                    <img src={avatar} alt='logo' />
                                </div>
                                <div className='logo-detail'>
                                    <p>notify_dropdown</p>
                                    <span>UI/UX Desinger</span>
                                </div>
                            </div>
                            <div className='logo-body'>
                                {proflie}
                            </div>
                        </div>
                    </>
                )}
            >
                <Button type="text" className='logo'>
                    <img src={avatar} />
                </Button>
            </Dropdown>
        </>
    )
}
export default Notify;