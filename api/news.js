export default async function handler(req, res) {
    const API_KEY = '7956104af18649c0ba2890e09354069a'; // 👈 Replace with your key
  
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=ai&sortBy=publishedAt&language=en&pageSize=5&apiKey=${API_KEY}`
      );
      const data = await response.json();
  
      if (data.status === 'ok') {
        res.status(200).json(data.articles);
      } else {
        res.status(500).json({ error: 'NewsAPI error', message: data.message });
      }
    } catch (error) {
      res.status(500).json({ error: 'Fetch failed', details: error.message });
    }
  }
  