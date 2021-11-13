import { Card } from 'antd';

const { Meta } = Card;

function Cards({value}) {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={value.img} />}
    >
      <Meta title={value.name} description={value.description} />
      <p>{value.size}</p>
    </Card>
  )
}

export default Cards