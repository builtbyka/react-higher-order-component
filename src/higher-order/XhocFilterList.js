import React from 'react';

const FilterList = WrappedList => ({title, list, filter, filterVal}) => {
    const filteredList = list.filter(el => el[filter] === filterVal);
    return <WrappedList title={title} list={filteredList}/>
}

export default FilterList;