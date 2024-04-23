import { Layout, Affix } from 'antd';
import { SearchOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import LearnGrid from '../../components/learnGrid';
import './LayoutDefault.css';
import logo from "../images/logo.jpg";
import logoFold from '../images/logo-default.jpg';
import { useState } from 'react';
import Notify from '../../components/notify';
import MenuSider from '../../components/Menu';
import { Outlet } from 'react-router-dom';
import { Footer } from 'antd/es/layout/layout';
const { Sider, Content } = Layout;
function LayoutDefault() {
    const [collapse, setCollapse] = useState(false)
    console.log(collapse);
    return (
        <>
            <Layout className='layout-default'>
                <Affix offsetTop={0}>
                    <header className='header'>
                        <div className={"header_logo " + (collapse && " header-collapseed")}>
                            <img src={collapse ? (logoFold) : (logo)} alt="logo" />
                        </div>
                        <div className='header_nav'>
                            <div className='header_nav-left'>
                                <div className='header_collapse' onClick={() => setCollapse(!collapse)}>
                                    {collapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                </div>
                                <div className='header_search'>
                                    <SearchOutlined />
                                </div>
                            </div>
                            <div className='header_nav-right'>
                                <Notify />
                            </div>
                        </div>
                    </header>
                </Affix>
                <Layout>
                    <Sider className='sider' collapsed={collapse} theme='light'>
                        <MenuSider />
                    </Sider>
                    <Content className='content'>
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}
export default LayoutDefault;