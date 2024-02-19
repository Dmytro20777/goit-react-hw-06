import { useId } from "react";
import css from "./SearchBox.module.css";
import { setFilter } from "../../redux/contacsSlice";
import { useDispatch, useSelector } from "react-redux";

const SearchBox = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.persons.filters.name);

    const handleInputChange = (event) => {
        dispatch(setFilter(event.target.value));
    };

    const labelId = useId();

    return (
        <div className={css.container}>
            <label className={css.label} htmlFor={labelId}>Find contacts by name
                <input
                    className={css.input}
                    type="text"
                    name="username"
                    id={labelId}
                    value={filter}
                    onChange={handleInputChange}
                />
            </label>
        </div>
    );
};

export default SearchBox;
