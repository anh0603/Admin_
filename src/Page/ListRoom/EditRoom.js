import { EditOutlined } from '@ant-design/icons';
import { Button, Form, Input, InputNumber, Modal, Select, Spin, Switch, message, notification } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useState } from 'react';
import { updateRoom } from '../../services/roomsServices';
const { Option } = Select;
function EditRoom(props) {

    const { record, onReload } = props;
    const [showModal, setShowModal] = useState(false);
    const [spinning, setSpinning] = useState(false)
    const [form] = Form.useForm()
    // const [messageApi, contextHolder] = message.useMessage();
    const [api, contextHolder] = notification.useNotification();

    const handleShow = () => {
        setShowModal(true)
    }
    const handleOk = () => {
        setShowModal(false)
    }
    const handleCancel = () => {
        setShowModal(false)
        form.resetFields();
    }

    const rules = [
        {
            required: true,
            message: 'Không được bỏ trống phần này!',
        },
    ]

    const handleForm = async (e) => {
        const response = await updateRoom(record.id, e)
        setSpinning(true)
        // const response = undefined;
        console.log(response)
        setTimeout(() => {
            if (response) {
                api.success({
                    message: 'Cập nhật thành công!',

                });

                setShowModal(false)
                onReload();
            }
            else {
                api.error({
                    message: 'Cập nhật không thành công!',
                });
            }
            setSpinning(false)
        }, 600)
    }

    return (
        <>
            {contextHolder}
            <Button type='primary' size='small' icon={<EditOutlined />} onClick={handleShow} />
            <Modal title="Sửa thông tin phòng" open={showModal} onOk={handleOk} onCancel={handleCancel} footer={null}>
                <Spin spinning={spinning} tip='loading'>
                    <Form name="create-room"
                        onFinish={handleForm}
                        form={form}
                        initialValues={record}
                    >
                        <Form.Item
                            label="Tên phòng"
                            name="name"
                            rules={rules}
                        >
                            <Input />

                        </Form.Item>

                        <Form.Item
                            label="Số giường tối đa"
                            name="quantityBed"
                            rules={rules}
                        >
                            <InputNumber min={1} />

                        </Form.Item>

                        <Form.Item
                            label="Số người tối đa"
                            name="quantityPeople"
                            rules={rules}
                        >
                            <InputNumber min={1} />

                        </Form.Item>

                        <Form.Item
                            label="Mô Tả"
                            name="description"
                        >
                            <TextArea rows={4} />
                        </Form.Item>

                        <Form.Item
                            label="Tiện ích"
                            name="utils"
                        >
                            <Select
                                style={{
                                    width: '20%',
                                }}
                                mode="multiple"
                                allowClear
                            >
                                <Select.Option value="Wifi">Wifi</Select.Option>
                                <Select.Option value="Nóng lạnh">Nóng lạnh</Select.Option>
                                <Select.Option value="Điều hòa">Điều hòa</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item valuePropName="checked"
                            label="Trạng Thái"
                            name="status"
                        >
                            <Switch checkedChildren="Còn phòng"
                                unCheckedChildren="Hết phòng" />
                        </Form.Item>
                        <Form.Item valuePropName="checked"
                            label="Loại phòng"
                            name="typeRoom"
                        >
                            <Switch checkedChildren="Vip"
                                unCheckedChildren="Thường" />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" >
                                Cập nhật
                            </Button>
                        </Form.Item>
                    </Form >
                </Spin>
            </Modal>
        </>
    )
}
export default EditRoom;   