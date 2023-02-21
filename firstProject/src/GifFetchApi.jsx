const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=aQ2J1Boqaf28ilBuq31VUluCzdw8FLJL&q=${category}&limit=25&offset=0&rating=g&lang=en  `;
  const res = await fetch(url);
  const { data } = await res.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });
  return gifs;
};

export const GifFetchApi = ({ category }) => {
  const data = getGifs(category);
  console.log(data)
  return (
    <>
      <h3>{category}</h3>
      <p>Hola</p>
    </>
  );
};
