export const GifItem = ( {title, url, id} ) => {
  console.log(url)
  return (
    <div key={ id }>
      <img src={ url } alt={ title } />
    </div>
  )
}
