// Get Quote From API
async function getQuote() {
  const proxyUrl = 'https://pure-spire-96214.herokuapp.com/';
  const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';

  try {
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    getQuote();
    console.log('Whoops, no qotes', error);
  }
}

// On Load
getQuote();