import { useEffect, useState } from "react";
import { Line } from '@ant-design/plots';
function Chart() {
    const [dataChart, setDataChart] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3002/chart')
            .then(res => res.json())
            .then(data => {
                setDataChart(data)
            })
    }, [])
    const config = {
        data: dataChart,
        xField: "date",
        yField: "quantity",
    };

    console.log(dataChart)
    return (
        <>
            <h2>Biểu đồ Line </h2>
            <Line {...config} />
        </>
    )
}
export default Chart;