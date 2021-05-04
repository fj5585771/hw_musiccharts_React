const GenreDropdown = ({genrePicker, genres}) => {

    return (
    <>
    <select onChange={genrePicker}> 
        {genres.map(genre => {
            return <option selected={genres[2].url} key={genre.name}value={genre.url}>{genre.name}</option>
        })}
    </select>
    </>
    )

}
export default GenreDropdown;