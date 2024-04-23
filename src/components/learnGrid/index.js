import { Row, Col, Carousel, Collapse } from 'antd';
import { DollarOutlined, LineChartOutlined, ProfileOutlined, UserOutlined, } from '@ant-design/icons'
import './learnGrid.css';
import CardItem from '../CardItem';
import Chart from '../../Page/Chart/Chart';
import ChartPie from '../../Page/Chart/ChartPie';
import ChartG2 from '../../Page/Chart/ChartG2';
import ChartColum from '../../Page/Chart/ChartColum';
const { Panel } = Collapse;
function LearnGrid() {
    const list = [
        {
            id: 1,
            title: "logo 1 là gì",
            description: "logo là..."
        },
        {
            id: 2,
            title: "logo 2 là gì",
            description: "logo là..."
        },
        {
            id: 3,
            title: "logo 3 là gì",
            description: "logo là..."
        }
    ];
    return (
        <>
            {/* <Row gutter={[10,20]}>
                <Col span={6} xxl={2} xl={2} lg={3} md={6}  sm={12} xs={24}>
                     <div className='box'> 
                        Cot 1
                    </div>
                </Col>
                <Col span={6} xxl={4} xl={2} lg={3} md={6}  sm={12} xs={24}>
                     <div className='box'> 
                        Cot 2
                    </div>
                </Col>
                <Col span={6} xxl={8} xl={2} lg={9} md={6}  sm={12} xs={24}>
                     <div className='box'> 
                        Cot 3
                    </div>
                </Col>
                <Col span={6} xxl={10} xl={2} lg={9} md={6} sm={12} xs={24} >
                     <div className='box'> 
                        Cot 4
                    </div>
                </Col>
            </Row> */}

            <Row gutter={[20, 20]}>
                <Col xxl={6} xl={6} lg={12} md={12} sm={24} xs={24}>
                    <CardItem title={
                        <DollarOutlined />} />
                </Col>
                <Col xxl={6} xl={6} lg={12} md={12} sm={24} xs={24}>
                    <CardItem title={<LineChartOutlined />} />
                </Col>
                <Col xxl={6} xl={6} lg={12} md={12} sm={24} xs={24}>
                    <CardItem title={<ProfileOutlined />} />
                </Col>
                <Col xxl={6} xl={6} lg={12} md={12} sm={24} xs={24}>
                    <CardItem title={<UserOutlined />} />
                </Col>
            </Row>

            <Row gutter={[20, 20]} className="mt-20">
                <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
                    <Chart title="box 5" style={{ height: "400px" }} />
                </Col>
                <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                    <ChartPie title="box 6" style={{ height: "400px" }} />
                </Col>
            </Row>

            <Row gutter={[20, 20]} className="mt-20">
                <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                    <ChartG2 title="box 7" style={{ height: "400px" }} />
                </Col>
                <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
                    <ChartColum title="box 8" style={{ height: "400px" }} />
                </Col>
            </Row>

            {/* <Row gutter={[20, 20]} className="mt-20">
                <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                    <CardItem title="box 9" style={{ height: "400px" }} />
                </Col>
                <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                    <CardItem title="box 10" style={{ height: "400px" }} />
                </Col>
                <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                    <CardItem title="box 11" style={{ height: "400px" }} />
                </Col>
            </Row> */}

            <Carousel autoplay effect='fade'>
                <div className='slider-item'>
                    <img src='https://4kwallpapers.com/images/walls/thumbs/16304.jpg' />
                </div>
                <div className='slider-item'>
                    <img src='https://4kwallpapers.com/images/walls/thumbs/16319.jpg' />
                </div>
                <div className='slider-item'>
                    <img src='https://4kwallpapers.com/images/walls/thumbs/16315.jpg' />
                </div>
                <div className='slider-item'>
                    <img src='https://4kwallpapers.com/images/walls/packs/99.jpg' />
                </div>
            </Carousel>

            {/* <Collapse defaultActiveKey={1} accordion={true}>
                {list.map((item) => (
                    <Panel header={item.title} key={item.id}>
                        <p>{item.description}</p>
                    </Panel>
                ))}
            </Collapse>
            <Image
                width={200} 
                src="https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=600"
            /> */}
        </>
    )
}
export default LearnGrid;