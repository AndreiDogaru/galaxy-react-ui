import React from 'react';
import { Search as SearchIcon } from 'react-feather';

import './search.scss';
import InputField from '../../../../../UI/input-field/input-field';

const Search = () => (
  <div className="fixed_chat_list-search">
    <InputField
      icon={<SearchIcon />}
      placeholder="Search..."
    />
  </div>
);

export default Search;
