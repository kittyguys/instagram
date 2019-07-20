export const FETCHTIMELINE_START = "FETCHTIMELINE_START";
export const FETCHTIMELINE_SUCCESS = "FETCHTIMELINE_SUCCESS";
export const FETCHTIMELINE_FAILED = "FETCHTIMELINE_FAILED";

export const fetchTimelineStart = _id => ({
  type: FETCHTIMELINE_START,
  _id
});

export const fetchTimelineSuccess = photoList => ({
  type: FETCHTIMELINE_SUCCESS,
  photoList
});

export const fetchTimelineFailed = () => ({
  type: FETCHTIMELINE_FAILED
});
