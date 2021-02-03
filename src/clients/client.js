async function fetchFunc() {
  return await fetch(
    "http://api.giphy.com/v1/gifs/trending?api_key=UIwgZuTe3vgpvkKyqzb0bWix6aN3Ba0B&limit=5&rating=g"
  )
    .then((response) => response.json())
    .then((body) => {
      return body.data;
    })
    .catch((err) => console.log(err));
}

export { fetchFunc };
