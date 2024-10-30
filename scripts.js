const newsContainer = document.getElementById('news-container');

// Replace with your WordPress site's RSS feed URL
const RSS_URL = 'https://mdbotshop.wordpress.com/feed/';

async function fetchWordPressNews() {
    try {
        const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${RSS_URL}`);
        const data = await response.json();

        data.items.forEach(item => {
            const newsItem = document.createElement('div');
            newsItem.className = 'news-item';

            newsItem.innerHTML = `
                <h3><a href="${item.link}" target="_blank">${item.title}</a></h3>
                <p>${new Date(item.pubDate).toLocaleDateString()}</p>
                <p>${item.description}</p>
            `;

            newsContainer.appendChild(newsItem);
        });
    } catch (error) {
        console.error('Error fetching WordPress news:', error);
        newsContainer.innerHTML = '<p>Failed to load news. Please try again later.</p>';
    }
}

// Fetch news on page load
fetchWordPressNews();
