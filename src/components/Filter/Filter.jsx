import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    dispatch(filterChange(e.target.value));
  };

  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={onChangeFilter}
        />
      </label>
    </div>
  );
};
