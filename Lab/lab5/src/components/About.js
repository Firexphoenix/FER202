import { Container, Card } from 'react-bootstrap';

function About() {
    return (
        <Container className="mt-5 mb-5">
            <h1 className="text-center mb-4">About Us</h1>
            <Card className="shadow border-0">
                <Card.Body>
                    <Card.Text className="text-muted lead text-center">
                        Welcome to our Quiz App! We aim to provide an engaging platform for users to test their knowledge and stay updated with the latest news. Explore our quizzes, read interesting news, and get in touch with us through the contact page.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default About;