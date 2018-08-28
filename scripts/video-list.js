/* global store YouTube */

'use strict';

// Making HTML more accessible
// Create a better UX with layout
  // Make images uniform, smaller
  // Make images clickable
  // Remove list styling
  // Make inline-block

/*
    We want our store to hold an array of "decorated" video objects - i.e. objects that
    have been transformed into ONLY the necessary data we're displaying on our page. 
    (Removes extraneous dataset from Youtube.)
    
    Example decorated video object:
    
    {
      id: '98ds8fbsdy67',
      title: 'Cats dancing the Macarena',
      thumbnail: 'https://img.youtube.com/some/thumbnail.jpg'
    }
*/

const videoList = (function () {
  /**
   * @function decorateResponse
   * Uses Youtube API response to create an array of "decorated" video objects as 
   * defined at the top of the file.
   * @param   {object} response - should match Youtube API response shape
   * @returns {array}
   */
  // TASK:
  // 1. Map through the response object's `items` array
  // 2. Return an array of objects, where each object contains the keys `id`, `title`, 
  //    `thumbnail` which each hold the appropriate values from the API item object. You 
  //    WILL have to dig into several nested properties!
  //
  // TEST IT! Grab an example API response and send it into the function - make sure
  // you get back the object you want.
  const decorateResponse = function (response) {
    return response.items.map(item => {
      return {
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.high.url
      };
    });
  };

  /**
   * @function generateVideoItemHtml
   * Template function, creates an HTML string from a single decorated video object
   * @param   {object} video - decorated video object
   * @returns {string} HTML 
   */
  // TASK:
  // 1. Using the decorated object, return an HTML string containing all the expected
  // TEST IT!
  const generateVideoItemHtml = function (video) {
    let link = `https://www.youtube.com/watch?v=${video.id}`;
    return `
      <li data-id="${video.id}">
        <img src="${video.thumbnail}">
        <a href="${link}" target="_blank">${video.title}</a>
      </li>
    `;
  };

  /**
   * @function render
   * Responsible for scanning store and rendering the video list to DOM
   */
  // TASK:
  // 1. Map through `store.videos`, sending each `video` through `generateVideoItemHtml`
  // 2. Add this array of DOM elements to the appropriate DOM element
  // TEST IT!
  const render = function () {
    const videoItemsHtml = store.videos.map(generateVideoItemHtml).join('');
    $('.results').html(videoItemsHtml);
  };

  /**
   * @function handleFormSubmit
   * Adds form "submit" event listener that 1) initiates API call, 2) modifies store,
   * and 3) invokes render
   */
  // TASK:
  // 2. Add an event listener to the form that will:
  //   a) Prevent default event
  //   b) Retrieve the search input from the DOM
  //   c) Clear the search input field
  //   d) Invoke the `fetchVideos` function, sending in the search value
  //   e) Inside the callback, send the API response through the `decorateResponse` function
  //   f) Inside the callback, add the decorated response into your store using the 
  //      `addVideosToStore` function
  //   g) Inside the callback, run the `render` function 
  // TEST IT!
  const handleFormSubmit = function() {
    $('form').on('submit', event => {
      event.preventDefault();
      // Get user input
      const userInputField = $('#search-term');
      const userInput = userInputField.val();
      userInputField.val('');
      // Modify state
      YouTube.fetchVideos(userInput, response => {
        // This gives us an array of objects with the information we want
        const decoratedVideos = decorateResponse(response);
        // Add new information to the store
        store.addVideoList(decoratedVideos);
        // Render the new DOM with the new information
        render();
      });    
    });
  };

  const bindEventHandlers = function () {
    handleFormSubmit();
  };

  return {
    render,
    bindEventHandlers
  };
}());