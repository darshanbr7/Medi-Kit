import "./Product.css"
const Search = ({keyword, onChange}) => {
    return (
      <input 
      className="p-serarch-input"
       value={keyword}
       onChange={(e) => onChange(e.target.value)}
       autoFocus={true}
      />
    );
  }
  
  export default Search;