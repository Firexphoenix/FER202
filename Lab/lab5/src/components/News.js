import { Card, Row, Col } from 'react-bootstrap';
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';
import image6 from '../images/6.jpg';
import image7 from '../images/7.jpg';
import image8 from '../images/8.jpg';

function News() {
    const newLists = [
        { id: 1, title: 'Woman bakes expletive-laden pies to ‘get a rise’ out of her grandmother in annual tradition', description: '“What started as a means to get a rise out of my Grammy has snowballed into a weird family tradition,” wrote Jess Lydon.', images: image1, link: 'https://www.today.com/food/people/woman-bakes-profane-pies-for-grandmother-rcna126842' },
        { id: 2, title: 'Martha Stewart shows off her 30 pies after canceled Thanksgiving dinner plans', description: 'Queen of Thanksgiving Martha Stewart may not be hosting a turkey dinner this year but fret not, she will still be celebrating with literally 30 pies.', images: image2, link: 'https://www.livenowfox.com/news/martha-stewart-canceled-her-thanksgiving-2023' },
        { id: 3, title: 'Burger King is testing a new breakfast sandwich', description: 'This is a win for the flatbread fans.', images: image3, link: 'https://www.today.com/food/restaurants/burger-king-breakfast-grillwich-sandwich-rcna126282' },
        { id: 4, title: 'Popeyes permanently adds chicken wings to its menu', description: 'And you can get ’em in five different flavors.', images: image4, link: 'https://www.allrecipes.com/popeyes-adds-chicken-wings-to-the-menu-permanently-8405814' },
        { id: 5, title: 'Top salmon with a sizzling mix of aromatics and spices', description: 'Tadka is a ubiquitous South Asian technique that adds a dramatic last-minute coat of flavor.', images: image5, link: 'https://everdurebyheston.com/blogs/recipes/hot-smoked-salmon-with-aromatic-spices' },
        { id: 6, title: '80 Christmas dinner ideas for the ultimate holiday feast', description: 'Build the perfect Christmas menu with these delicious recipes.', images: image6, link: 'https://www.countryliving.com/food-drinks/g635/holiday-recipe-book-1108/' },
        { id: 7, title: 'How to make the easiest prime rib roast for the holidays', description: 'Use these tips and tricks to make a juicy and amazingly delicious prime rib roast.', images: image7, link: 'https://www.delish.com/cooking/recipe-ideas/a20968995/how-to-cook-prime-rib/' },
        { id: 8, title: 'Turn leftover turkey into a flavorful Waldorf salad', description: 'This light, bright turkey salad is the best post-Thanksgiving lunch.', images: image8, link: 'https://mytour.vn/en/blog/lifestyle/45-creative-ways-to-transform-your-thanksgiving-leftovers-mytour.html' },
    ];

    return (
        <div className="News">
            <h1>News Category</h1>
            <Row>
                {newLists.map((news) => (
                    <Col md={3} key={news.id} className="news-card">
                        <Card>
                            <Card.Img variant="top" src={news.images} />
                            <Card.Body>
                                <Card.Title>{news.title}</Card.Title>
                                <Card.Text>{news.description}</Card.Text>
                                <Card.Link href={news.link} target="_blank" rel="noopener noreferrer">
                                    {news.link ? 'Read More' : 'Add Link Here'}
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default News;