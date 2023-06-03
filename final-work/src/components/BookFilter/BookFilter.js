import "./BookFilter.css"

const BookFilter = ({onFilterYearChange, filterYear}) => {
    const changeYearHandler = (event) => {
        onFilterYearChange(event.target.value);
    };


    return (
        <>
            <div className="Books-filter">
                <div className="Books-filter-control">
                    <select onChange={changeYearHandler} value={filterYear}>
                        <option value="">Seleccione un año</option>
                        <option value="2023">2023</option>
                        <option value="2020">2020</option>
                    </select>
                </div>
            </div>
        </>
    )
} 

export default BookFilter;