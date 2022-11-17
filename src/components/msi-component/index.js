import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pp from './msi.jpg'



const MSICard = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pp} />
            <Card.Body>
                <Card.Title>Michael S. Irby</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <a href='https://msi-ism.github.io' target='_blank'>Portfolio</a>
            </Card.Body>
        </Card>
    )
}

export default MSICard