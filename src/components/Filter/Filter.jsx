
import { Input, Label } from 'components/Form/Form.styled';
import React from 'react';
import { Filters } from './Filter.styled';
import { setFilter } from 'redux/slice/Slice';


  const filter = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();
  const setContact = value => {
    dispatch(setFilter(value));
  };


const Filter = () => {
  return (
    <Filters>
      <Label>
        Finde contacts by name
        <Input
          type="text"
          onChange={e => setContact(e.target.value)}
          name="filter"
          value={filter}
        ></Input>
      </Label>
    </Filters>
  );
};


export default Filter;