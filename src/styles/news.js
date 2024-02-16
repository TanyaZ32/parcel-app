function addNews() {
    fetch('https://cb15e7df-a4bc-4002-b76a-e0b509aef66c.mock.pstmn.io/news')
    .then(response => response.json())
    .then(news => {
        const newsContainer = document.getElementById('news');
        let generatedNewsHtml = '';
        news.forEach((newsItem) => {
            const html = 
            <div class="card-news">
                <h2 class="card-news_title"${newsItem.title}</h2>
                <p class="card-news_date">${newsItem.date}</p>
                <p class="card-news_description">${newsItem.description}</p>
                <a class="card-news_link" href='#'>Read More</a>
            </div>
            ;
            generatedNewsHtml = generatednewsHtml + html;
   });

   newsContainer.innerHtml = generatedNewsHtml;
});