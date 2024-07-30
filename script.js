document.addEventListener('DOMContentLoaded', function () {
    // Postavke slika za svaku sekciju
    const placesData = {
        'visit-places': ['visit1.jpg', 'visit2.jpg', 'visit3.jpg'],
        'sleep-places': ['sleep1.jpg', 'sleep2.jpg', 'sleep3.jpg'],
        'shopping-places': ['shop1.jpg', 'shop2.jpg', 'shop3.jpg'],
        'eat-places': ['eat1.jpg', 'eat2.jpg', 'eat3.jpg'],
        'outings-places': ['outing1.jpg', 'outing2.jpg', 'outing3.jpg'],
        'sports-places': ['sport1.jpg', 'sport2.jpg', 'sport3.jpg'],
        'events-places': ['event1.jpg', 'event2.jpg', 'event3.jpg']
    };

    // Inicijalizacija slika
    for (const [containerId, images] of Object.entries(placesData)) {
        const container = document.getElementById(containerId);
        images.forEach((image, index) => {
            const imgElement = document.createElement('img');
            imgElement.src = image;
            if (index === 0) imgElement.classList.add('active');
            container.appendChild(imgElement);
        });
    }

    // Rotacija slika
    function rotateImages(containerId) {
        const container = document.getElementById(containerId);
        const images = container.getElementsByTagName('img');
        let currentIndex = 0;
        setInterval(() => {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        }, 3000);
    }

    for (const containerId of Object.keys(placesData)) {
        rotateImages(containerId);
    }

    // Dinamičko dodavanje novosti
    const newsContainer = document.querySelector('.news-container');
    const newsData = [
        {
            title: 'Novost 1',
            date: '2024-07-30',
            content: 'Tekst za novost 1.'
        },
        {
            title: 'Novost 2',
            date: '2024-07-29',
            content: 'Tekst za novost 2.'
        },
        {
            title: 'Novost 3',
            date: '2024-07-28',
            content: 'Tekst za novost 3.'
        }
    ];

    newsData.forEach(news => {
        const newsElement = document.createElement('div');
        newsElement.classList.add('news-item');
        newsElement.innerHTML = `
            <h3>${news.title}</h3>
            <p><em>${news.date}</em></p>
            <p>${news.content}</p>
        `;
        newsContainer.appendChild(newsElement);
    });
});
