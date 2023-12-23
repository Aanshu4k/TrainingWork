import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = () => {
    return (
        <Card style={{ width: '40rem', margin: '5rem' }}>
            <Card.Img variant="top" src="./logo2.jpg" />
            <Card.Body>
                <Card.Title>Welcome to Our E-Commerce Website</Card.Title>
                <Card.Text>
                    Embark on a seamless shopping journey with our e-commerce haven, where style meets convenience, and fashion finds a home at your fingertips. Explore curated collections designed to elevate your everyday, turning each click into a moment of unboxing extraordinary joy. With a commitment to empowering your unique expression, we bring the latest trends to your doorstep, ensuring that every purchase is a reflection of your individuality. Experience the fusion of curated fashion and effortless accessibility as we strive to make every shopping moment a delightful and personalized discovery. Unbox fashion, unbox inspiration, and unbox the future of online shopping with us.
                </Card.Text>
                <Button variant="primary">Order Now</Button>
            </Card.Body>
            <Card.Img variant="top" src="./logo2.jpg" />
            <Card.Body>
                <Card.Title>Welcome to Our E-Commerce Website</Card.Title>
                <Card.Text>
                    Embark on a seamless shopping journey with our e-commerce haven, where style meets convenience, and fashion finds a home at your fingertips. Explore curated collections designed to elevate your everyday, turning each click into a moment of unboxing extraordinary joy. With a commitment to empowering your unique expression, we bring the latest trends to your doorstep, ensuring that every purchase is a reflection of your individuality. Experience the fusion of curated fashion and effortless accessibility as we strive to make every shopping moment a delightful and personalized discovery. Unbox fashion, unbox inspiration, and unbox the future of online shopping with us.
                </Card.Text>
                <Button variant="primary">Order Now</Button>
            </Card.Body>
        </Card>
    );
}

export default Home;