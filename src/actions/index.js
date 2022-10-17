export const RECEIVE_MEMES = "RECEIVE_MEMES";
export const NEW_MEME = "NEW_MEME";

const receiveMemes = (json) => {
  const { memes } = json.data;
  return {
    type: RECEIVE_MEMES,
    memes,
  };
};

const fetchMemesJson = () => {
  return fetch("https://api.imgflip.com/get_memes").then((res) => res.json());
};

export const fetchMemes = () => {
  return (dispatch) => {
    return fetchMemesJson().then((data) => dispatch(receiveMemes(data)));
  };
};

const newMeme = (meme) => {
  return {
    type: NEW_MEME,
    meme,
  };
};

const postMemeJson = (params) => {
  const bodyParams = Object.keys(params)
    .map((key) => {
      return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
    })
    .join("&");

  console.log(bodyParams);

  return fetch("https://api.imgflip.com/caption_image", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: bodyParams,
  }).then((res) => res.json());
};

export const createMeme = (new_meme_object) => {
  return (dispatch) => {
    return postMemeJson(new_meme_object).then((new_meme) => dispatch(newMeme(new_meme)));
  };
};
