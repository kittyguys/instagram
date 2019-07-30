export const FETCHLIKETIMELINE_START = "FETCHLIKETIMELINE_START";
export const FETCHLIKETIMELINE_SUCCESS = "FETCHLIKETIMELINE_SUCCESS";
export const FETCHLIKETIMELINE_FAILED = "FETCHLIKETIMELINE_FAILED";

export const fetchLikeTimelineStart = _id => ({
  type: FETCHLIKETIMELINE_START,
  _id
});

export const fetchLikeTimelineSuccess = photoList => ({
  type: FETCHLIKETIMELINE_SUCCESS,
  photoList
});

export const fetchLikeTimelineFailed = () => ({
  type: FETCHLIKETIMELINE_FAILED
});
