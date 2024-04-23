import { 
    Input, 
    Row, Col, 
    Button, 
    Checkbox,
     DatePicker, 
     Radio, 
     Select 
} from 'antd';
import { useState } from 'react';
import { bookRoom } from '../../services/bookRoomServices';

const { RangePicker } = DatePicker;
function Book() {
    const [data, setData] = useState({
        time: "14 giờ"
    });
    const optionsTimes = [];
    for (let i = 6; i <= 24; i++) {
        optionsTimes.push(
            {
                value: i > 9 ? `${i} giờ` : `0${i} giờ`,
                label: i > 9 ? `${i} giờ` : `0${i} giờ`,
            },
        );
    }

    const handleChangeInput = (e) => {
        // console.log(e.target.name)
        // console.log(e.target.value)
        const object = {
            ...data,
            [e.target.name]: e.target.value
        }
        setData(object);
    }

    const handleSubmit = async () => {
        
        const response = await bookRoom(data);
        // console.log("submot to json-server", data)
    }
    const handleChangeCheckbox = (e) => {
        const object = {
            ...data,
            services: e
        }
        setData(object);
    }

    const handleChangeDate = (dates, dateStrings) => {
        // console.log(dates);
        // console.log(dateStrings);
        const object = {
            ...data,
            Date: dateStrings
        }
        setData(object);
    }

    const handleChangeGift = (e) => {
        const object = {
            ...data,
            [e.target.name]: e.target.value
        }
        setData(object);
    }

    const handleTime = (value) => {
        const object = {
            ...data,
            Time: value
        }
        setData(object);
    }

    return (
        <>
            <h2>Đặt Phòng</h2>
            <Row gutter={[10, 10]}>
                <Col xxl={8} xl={8} lg={12} md={12} sm={24} xs={24}>
                    <p>Họ Tên:</p>
                    <Input name='fullName' placeholder="Ví dụ: Trần Đức Anh" onChange={handleChangeInput} />
                </Col>
                <Col xxl={8} xl={8} lg={12} md={12} sm={24} xs={24}>
                    <p>Số Điện Thoại:</p>
                    <Input name='phone' placeholder="Ví dụ: 0324232323" onChange={handleChangeInput} />
                </Col>
                <Col xxl={8} xl={8} lg={24} md={24} sm={24} xs={24}>
                    <p>Email:</p>
                    <Input name='email' placeholder="Ví dụ: example@gmail.om" onChange={handleChangeInput} />
                </Col>
                <Col xxl={8} xl={8} lg={12} md={12} sm={24} xs={24}>
                    <p>Dịch vụ thêm:</p>
                    <Checkbox.Group name='services' onChange={handleChangeCheckbox}>
                        <Row>
                            <Col xxl={24} xl={24} lg={12} md={12} sm={24} xs={24}>
                                <Checkbox value="Thuê xe máy">Thuê xe máy</Checkbox>
                            </Col>
                            <Col xxl={24} xl={24} lg={12} md={12} sm={24} xs={24}>
                                <Checkbox value="Thuê ô tô 4 chỗ">Thuê ô tô 4 chỗ</Checkbox>
                            </Col>
                            <Col xxl={24} xl={24} lg={12} md={12} sm={24} xs={24}>
                                <Checkbox value="Thuê ô tô 7 chỗ">Thuê ô tô 7 chỗ</Checkbox>
                            </Col>
                            <Col xxl={24} xl={24} lg={12} md={12} sm={24} xs={24}>
                                <Checkbox value="Thuê ô tô 16 chỗ">Thuê ô tô 16 chỗ</Checkbox>
                            </Col>
                        </Row>
                    </Checkbox.Group>
                    <Col span={24}>
                        <p>Chọn quà:</p>
                        <Radio.Group name='Gift' onChange={handleChangeGift}>
                            <Radio value="Áo Phông">Áo Phông</Radio>
                            <Radio value="Mũ">Mũ</Radio>
                            <Radio value="Kem chống nắng">Kem chống nắng</Radio>
                            <Radio value="khắn tắm">khắn tắm</Radio>
                        </Radio.Group>
                    </Col>
                    <Row>
                    <Col span={12}>
                        <p>Chọn ngày:</p>
                        <RangePicker placeholder={["Ngày đến", "Ngày đi"]} format="DD/MM/YYYY" onChange={handleChangeDate} />
                    </Col>
                    <Col span={12}>
                        <p>Giờ nhận phòng:</p>
                        <Select name="Time" onChange={handleTime}
                            style={{
                                width: "100%", 
                            }}
                            defaultValue={data.time}
                            options={optionsTimes}
                        />
                    </Col>
                    </Row>
                </Col>
                <Col span={24}>
                    <Button type='primary' onClick={handleSubmit}>Đặt Phòng</Button>
                </Col>
            </Row>
        </>
    )
}
export default Book;