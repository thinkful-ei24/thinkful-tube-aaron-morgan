'use strict';

const YouTube = (function() {
  const API_KEY = 'AIzaSyDyNNLNOyqylF-xs0q-7ZOHLvadCIh-7jo';
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

  const MOCK_DATA = {
    "kind": "youtube#searchListResponse",
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/bBYjLez20l-_MKO54_kNoOAZSoA\"",
    "nextPageToken": "CAUQAA",
    "regionCode": "US",
    "pageInfo": {
      "totalResults": 1000000,
      "resultsPerPage": 5
    },
    "items": [
      {
        "kind": "youtube#searchResult",
        "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/3GvmmEApNX5dJzBymRzvcBvZGdQ\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "N2z5dSRkv_I"
        },
        "snippet": {
          "publishedAt": "2018-08-26T11:00:04.000Z",
          "channelId": "UC9obdDRxQkmn_4YpcBMTYLw",
          "title": "Bet you havent't LAUGHED THAT HARD before! - Super FUNNY CATS",
          "description": "The funniest animals on the planet are definitely cats! They never fail to make us laugh and happy! This is the most impossible TRY NOT TO LAUGH challenge ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/N2z5dSRkv_I/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/N2z5dSRkv_I/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/N2z5dSRkv_I/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Tiger FunnyWorks",
          "liveBroadcastContent": "none"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/CIzHxn5Tg3A4s2nJ1YNkNe9bwj8\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "hY7m5jjJ9mM"
        },
        "snippet": {
          "publishedAt": "2017-05-31T09:30:02.000Z",
          "channelId": "UC9obdDRxQkmn_4YpcBMTYLw",
          "title": "CATS will make you LAUGH YOUR HEAD OFF - Funny CAT compilation",
          "description": "Cats are amazing creatures because they make us laugh all the time! Watching funny cats is the hardest try not to laugh challenge! Just look how all these cats ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/hY7m5jjJ9mM/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/hY7m5jjJ9mM/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/hY7m5jjJ9mM/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Tiger FunnyWorks",
          "liveBroadcastContent": "none"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/JkELFAyKQf3jC6ObuMsX4Hc3Hhw\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "Rmx1JGTX1yw"
        },
        "snippet": {
          "publishedAt": "2018-07-26T11:00:05.000Z",
          "channelId": "UC9obdDRxQkmn_4YpcBMTYLw",
          "title": "Funniest CATS EVER - Die LAUGING NOW!",
          "description": "Cats are the best pets and animals! Cats and kittens are so funny, they make us laugh and happy! They never fail to amuse us! This is the most impossible TRY ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Rmx1JGTX1yw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Rmx1JGTX1yw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Rmx1JGTX1yw/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Tiger FunnyWorks",
          "liveBroadcastContent": "none"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/qT9xssHPIvatz74gf98V67GmP4s\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "uCLEq9V0-Yk"
        },
        "snippet": {
          "publishedAt": "2018-05-17T13:02:36.000Z",
          "channelId": "UCKy3MG7_If9KlVuvw3rPMfw",
          "title": "SUPER WEIRD CATS that will totally CONFUSE YOU! - Extremely FUNNY CAT VIDEOS compilation",
          "description": "Here are videos of super weird cats and kittens that will confuse you and at the end, most important, make you laugh! These cats are so super hilarious that I bet ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/uCLEq9V0-Yk/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/uCLEq9V0-Yk/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/uCLEq9V0-Yk/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Tiger Productions",
          "liveBroadcastContent": "none"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/2J8q77MF8IM0F88ttFhy4DodrqM\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "-zzWoYIAv5I"
        },
        "snippet": {
          "publishedAt": "2018-06-21T16:04:58.000Z",
          "channelId": "UC9obdDRxQkmn_4YpcBMTYLw",
          "title": "CATS make us LAUGH ALL THE TIME! - Ultra FUNNY CAT videos",
          "description": "Ultra funny cats and kitten that will make you cry with laughter! Cats are the best animals, they make us laugh all the time! This is the hardest TRY NOT TO ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/-zzWoYIAv5I/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/-zzWoYIAv5I/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/-zzWoYIAv5I/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Tiger FunnyWorks",
          "liveBroadcastContent": "none"
        }
      }
    ]
  };

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
      key: API_KEY,
      maxResults: 36,
    };
    $.getJSON(BASE_URL, query, callback);
  };

  return {
    fetchVideos,
    MOCK_DATA
  };
}());