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
        <div class="press-news__article-name"><h4>${article.title-pt1}</h4><h4>${article.title-pt2}</h4></div>
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


const response = await fetch('api/index.press-news.json');
const articles = await response.json();

renderArticles(articles);