export const getGifs = async(category) => {

    const url = `http://api.giphy.com/v1/gifs/trending?api_key=j1l7qJ8xi7FieIz3VFDA3LovzmgwiQFl&q=${category}&limit=5`
    // const url = `http://api.giphy.com/v1/gifs/trending?api_key=j1l7qJ8xi7FieIz3VFDA3LovzmgwiQFl&q=${category}&limit=10`
    const resp = await fetch( url );
    const { data = [] } = await resp.json();

    const gifs = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }))

    return gifs;

  } 