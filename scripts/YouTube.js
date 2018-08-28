'use strict';

const YouTube = (function() {
  const API_KEY = 'AIzaSyDyNNLNOyqylF-xs0q-7ZOHLvadCIh-7jo';
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

  /**
   * @function fetchVideos
   * Async function, responsible for calling the Youtube API with jQuery, constructing
   * the correct query object, and passing along the callback into the AJAX call.
   * @param {string}   searchTerm
   * @param {function} callback
   */
  const fetchVideos = function (searchTerm, callback) {
    const query = {
      part: 'snippet',
      q: `${searchTerm}`,
      key: API_KEY
    };
    $.getJSON(BASE_URL, query, callback);
  };

  return {
    fetchVideos
  };
}());