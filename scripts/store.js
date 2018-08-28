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
  const addVideoList = function(videoList) {
    videos = videoList;
  };

  return {
    videos,
    addVideoList
  };
}());