import { Card, Row, Col } from 'react-bootstrap';

function News() {
    const newLists = [
        { id: 1, title: 'Woman bakes expletive-laden pies to ‘get a rise’ out of her grandmother in annual tradition', description: '“What started as a means to get a rise out of my Grammy has snowballed into a weird family tradition,” wrote Jess Lydon.', images: 'images/1.jpg', link: 'https://www.today.com/food/people/woman-bakes-profane-pies-for-grandmother-rcna126842' },
        { id: 2, title: 'Martha Stewart shows off her 30 pies after canceled Thanksgiving dinner plans', description: 'Queen of Thanksgiving Martha Stewart may not be hosting a turkey dinner this year but fret not, she will still be celebrating with literally 30 pies.', images: 'images/2.jpg', link: 'https://www.livenowfox.com/news/martha-stewart-canceled-her-thanksgiving-2023' },
        { id: 3, title: 'Burger King is testing a new breakfast sandwich', description: 'This is a win for the flatbread fans.', images: 'images/3.jpg', link: 'https://www.today.com/food/restaurants/burger-king-breakfast-grillwich-sandwich-rcna126282' },
        { id: 4, title: 'Popeyes permanently adds chicken wings to its menu', description: 'And you can get ’em in five different flavors.', images: 'images/4.jpg', link: 'https://www.allrecipes.com/popeyes-adds-chicken-wings-to-the-menu-permanently-8405814' },
        { id: 5, title: 'Top salmon with a sizzling mix of aromatics and spices', description: 'Tadka is a ubiquitous South Asian technique that adds a dramatic last-minute coat of flavor.', images: 'images/5.jpg', link: 'https://everdurebyheston.com/blogs/recipes/hot-smoked-salmon-with-aromatic-spices' },
        { id: 6, title: '80 Christmas dinner ideas for the ultimate holiday feast', description: 'Build the perfect Christmas menu with these delicious recipes.', images: 'images/6.jpg', link: 'https://www.countryliving.com/food-drinks/g635/holiday-recipe-book-1108/' },
        { id: 7, title: 'How to make the easiest prime rib roast for the holidays', description: 'Use these tips and tricks to make a juicy and amazingly delicious prime rib roast.', images: 'images/7.jpg', link: 'https://www.delish.com/cooking/recipe-ideas/a20968995/how-to-cook-prime-rib/' },
        { id: 8, title: 'Turn leftover turkey into a flavorful Waldorf salad', description: 'This light, bright turkey salad is the best post-Thanksgiving lunch.', images: 'images/8.jpg', link: 'https://mytour.vn/en/blog/lifestyle/45-creative-ways-to-transform-your-thanksgiving-leftovers-mytour.html' },
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
                                    {news.link ? news.link : 'Add Link Here'}
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