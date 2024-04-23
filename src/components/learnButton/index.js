import { useState } from 'react';
import {Button} from 'antd';
import {PlayCircleOutlined} from "@ant-design/icons";

function LearnBuuton(){
    const [loading, setLoading] = useState(false)
    const handleClick = ()=> {
      setLoading(true);
      setTimeout(() => {
        const result = {
          code: 200,
          data: []
        }
        if(result && result.code === 200) {
          setLoading(false)
        }
      }, 3000);
    }
    return(
        <>
            <Button type="primary" loading={loading} onClick={handleClick}  disabled={loading}>
                Noi Dung
            </Button>
            <Button icon={<PlayCircleOutlined />}>Button</Button>
        </>
    )
}
export default LearnBuuton;