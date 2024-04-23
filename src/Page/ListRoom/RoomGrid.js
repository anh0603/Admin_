import { Row, Card, Col, Badge, } from "antd";
function RoomGrid(props) {
    const { rooms } = props;
    return (
        <>
            <Row gutter={[20, 20]}>
                {rooms.map((item) => (
                    <Col
                        xxl={6} xl={6} lg={6} md={8} sm={12} xs={24}
                        key={item.id}>
                        <Badge.Ribbon text={item.typeRoom ? "Phòng VIP" : "Phòng thường"} color={item.typeRoom ? "gold" : "purple"}>
                            <Card title={item.name}>
                                <p>
                                    Số giường: <strong>{item.quantityBed}</strong>
                                </p>
                                <p>
                                    Số người: <strong>{item.quantityPeople}</strong>
                                </p>
                                <p>
                                    {item.status ? (
                                        <Badge status="success" text="Còn phòng" />
                                    ) : (
                                        <Badge status="error" text="Hết phòng" />
                                    )}
                                </p>
                            </Card>
                        </Badge.Ribbon>
                    </Col>
                ))}
            </Row>
        </>
    )
}
export default RoomGrid;