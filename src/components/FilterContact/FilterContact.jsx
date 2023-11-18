import { filterContacts } from 'redux/contacts/contacts.reducer';


export const FilterContact = () => {
  
    const dispatch = useDispatch();
    const filter = useSelector(getFilters);


    const handleChange = (evt) => {
    const {value } = evt.target;
    dispatch(filterContacts(value))


  }

    return (
        <>
            <label className={css.filterLabel}>Find contacts by Name</label>
        <input
                className={css.filterInput}
                type='text'
                name='filter'
                placeholder='Enter name'
                value={filter}
                onChange={handleChange}
            >
            </input>
        </>
    )
}