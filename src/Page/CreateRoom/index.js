import { Button, Form, Input, InputNumber, Select, Switch, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Option } from "antd/es/mentions";
import { createRoom } from "../../services/roomsServices";

function CreateRoom() {
    const [form] = Form.useForm()
    const [messageApi, contextHolder] = message.useMessage();
    const rules = [
        {
            required: true,
            message: 'Không được bỏ trống phần này!',
        },
    ]

    const handleForm = async (e) => {
        const response = await createRoom(e)
        console.log(response)
        if (response) {
            form.resetFields()
            messageApi.open({
                type: 'success',
                content: 'Tạo phòng thành công',
              });
        }
        else {
            messageApi.open({
                type: 'error',
                content: 'Tạo phòng thất bại',
              });
        }
    }
    return (
        <>
            
            <h2>Thêm phòng mới</h2>
            <Form name="create-room" onFinish={handleForm} form={form}>
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
                     unCheckedChildren="Hết phòng"/>
                </Form.Item>
                <Form.Item valuePropName="checked"
                    label="Loại phòng"
                    name="typeRoom"
                >
                     <Switch checkedChildren="Vip" 
                     unCheckedChildren="Thường"  />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" >
                        Tạo mới
                    </Button>
                </Form.Item>
            </Form >
        </>
    )
}
export default CreateRoom;