/**
 * @returns {Promise<Object></Object>} quote
 */

const fetchQuote = async () => {
  const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
  const data = await res.json();
  console.log(data[0]);
  return data[0];
};

/**
 *
 * @param {HTMLDivElement} element
 */
export const BreakingbadApp = async (element) => {
  document.querySelector('#app-title').innerHTML = `Breaking Bad Quotes`;
  element.innerHTML = 'Loading...';
  // const quote = await fetchQuote();
  // element.innerHTML = 'Tenemos data';
  const quoteLabel = document.createElement('blockquote');
  const authorLabel = document.createElement('h3');
  const nextQuoteButton = document.createElement('button');
  nextQuoteButton.innerText = 'Next Quote';

  const renderQuote = (data) => {
    quoteLabel.innerHTML = data.quote;
    authorLabel.innerHTML = data.author;
    element.replaceChildren(quoteLabel, authorLabel, nextQuoteButton);
  };

  // Añadir evento al botón
  nextQuoteButton.addEventListener('click', async () => {
    element.innerHTML = 'Loading...';
    const quote = await fetchQuote();
    renderQuote(quote);
  });

  // fetchQuote().then(renderQuote);
  // Uso de async/await en lugar de .then
  try {
    const quote = await fetchQuote();
    renderQuote(quote);
  } catch (error) {
    console.error('Error fetching quote:', error);
    element.innerHTML = 'Failed to load quote. Please try again.';
  }
};
