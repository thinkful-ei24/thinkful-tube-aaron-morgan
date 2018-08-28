'use strict';

const store = (function() {
  let videos = [];

  /**
   * @function addVideosToStore
   * Store modification function to set decorated video objects
   * @param {array} videos - decorated video objects
   */
  // TASK:
  // 1. Set the received array as the value held in store.videos
  // TEST IT!
  const clearVideos = function () {
    videos.splice(0);
  };
  

  const addVideoList = function(videoList) {
    clearVideos();
    for (const video of videoList) {
      videos.push(video);
    }
  };

  return {
    videos,
    addVideoList
  };
}());