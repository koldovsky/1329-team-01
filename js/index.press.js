class Article {
    constructor (img, alt, publisher, date, title_pt1, title_pt2, text) {
        this.img = img;
        this.alt = alt;
        this.publisher = publisher;
        this.date = date;
        this.title_pt1 = title_pt1;
        this.title_pt2 = title_pt2;
        this.text = text;
    }
    addToArray (arr) {
        arr.push(this);
    }
}

const articles = [];

const article1 = new Article('img/press-news/article-1-flaunt.webp', 
    'A couple sitting at a table, sharing a moment while enjoying burgers. In the foreground, a gourmet burger on a plate is in focus, with a second burger and a bowl of potato chips slightly blurred to the side. Warm ambient lighting creates a cozy atmosphere.', 
    'FLAUNT MAGAZINE', 
    'JULY 28', 
    'BuzzFeed Loves ', 
    'Freddy Burgers!', 
    'Where have you had the most delicious burgers in Los Angeles? Yesterday, walking around the city center, we saw an unusual food truck...'
)

const article2 = new Article('img/press-news/article-2-conde-nast.webp',
    'Two gourmet burgers, one with a sesame seed brown bun and the other with a sesame seed black bun, topped with fresh lettuce, tomato, cheese, and pickles. Each burger is skewered with a stick holding a grilled chicken wing. Served alongside onion rings, French fries, ketchup, and a glass of soda in the background.',
    'CONDE NAST TRAVELER',
    'JULY 12',
    'Top 50 Food Trucks Worth ',
    'Traveling for',
    'If you don\'t try street food in a new city, you will not understand anything about its atmosphere, local tastes, and culture.'
)

const article3 = new Article('img/press-news/article-3-c.webp', 
    'A cheerful couple enjoying food outdoors in front of a modern food truck with wooden paneling. They are holding food containers and smiling at each other, surrounded by colorful triangular bunting decorations. Bean bag chairs and a bicycle are visible in the background, creating a casual and festive atmosphere.',
    'C MAGAZINE',
    'JULY 02',
    'Top 10 NYC Burger ',
    'Food Trucks',
    'Tired of pizza for lunch? Why not get out of your stuffy office and order a fresh and juicy burger? Here are the best burger food trucks in LA.'
)

article1.addToArray(articles);
article2.addToArray(articles);
article3.addToArray(articles);


function renderArticles(articles) {
    let articlesHTML = '';
    for (const article of articles) {
        articlesHTML += `
        <div class="press-news__article-container">
        <figure class="press-news__article-picture">
            <img
            src="${article.img}"
            alt="${article.alt}"/>
            <figcaption>
            <span class="press-news__article-publisher">${article.publisher}</span>
            <span class="press-news__vertical-divider">|</span>
            <span class="press-news__article-date">${article.date}</span>
            </figcaption>
        </figure>
        <div class="press-news__article-name"><h4>${article.title_pt1}</h4><h4>${article.title_pt2}</h4></div>
        <p class="press-news__article-text">${article.text}</p>
        <div class="press-news__read-article-button">
            <a href="#">Read Article</a>
        </div>
        </div>
        `
    }
    const articlesElem = document.querySelector('.press-news__articles')
    articlesElem.innerHTML = articlesHTML;
}

renderArticles(articles);