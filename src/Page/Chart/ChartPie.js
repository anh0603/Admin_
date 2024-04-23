import { useEffect, useState } from "react";
import { Pie } from '@ant-design/plots';
function ChartPie() {
    const [dataChart, setDataChart] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3002/chart')
            .then(res => res.json())
            .then(data => {
                setDataChart(data)
            })
    }, [])
    const config = {
        data: {
            type: 'fetch',
            value: 'https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/pie-doughnut.json',
        },
        angleField: 'value',
        colorField: 'name',
        legend: false,
        innerRadius: 0.6,
        labels: [
            { text: 'date', style: { fontSize: 10, fontWeight: 'bold' } },
            {
                text: (d, i, data) => (i < data.length - 3 ? d.value : ''),
                style: {
                    fontSize: 9,
                    dy: 12,
                },
            },
        ],
        style: {
            stroke: '#fff',
            inset: 1,
            radius: 10,
        },
        scale: {
            color: {
                palette: 'spectral',
                offset: (t) => t * 0.8 + 0.1,
            },
        }
    };

    console.log(dataChart)
    return (
        <>
            <h2>Doanh số trong tháng</h2>
            <Pie {...config} />
        </>
    )
}
export default ChartPie;