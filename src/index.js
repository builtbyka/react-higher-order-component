import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RenderList from './elements/RenderList';
import FilterList from './higher-order/FilterList';

const disneyFemaleLeads = [
    {name: 'Snow White', savedByPrince: true, isRoyal: true},
    {name: 'Sleeping Beauty', savedByPrince: true, isRoyal: true},
    {name: 'Moana', savedByPrince: false, isRoyal: false},
    {name: 'Merida', savedByPrince: false, isRoyal: true},
    {name: 'Anna', savedByPrince: false, isRoyal: true},
    {name: 'Cinderella', savedByPrince: true, isRoyal: true}
  ];

  const listForSanta = [
    {name: 'child1', naughty: false},
    {name: 'child2', naughty: true},
    {name: 'child3', naughty: false}
    ];

const FilteredList =  FilterList(RenderList);

ReactDOM.render(
    <article>
        <section>
            <RenderList title="Unfiltered Disney Female Leads" list={disneyFemaleLeads}/>
            <FilteredList title="Disney Female Leads Saved By a Prince" filter='savedByPrince' filterVal={true} list={disneyFemaleLeads}/>
            <FilteredList title="Disney Female Leads Not Saved By a Prince" filter='savedByPrince' filterVal={false} list={disneyFemaleLeads}/>
            <FilteredList title="Disney Female Leads That Were Born Royal" filter='isRoyal' filterVal={true} list={disneyFemaleLeads}/>
            <FilteredList title="Disney Female Leads That Weren't born Royal" filter='isRoyal' filterVal={false} list={disneyFemaleLeads}/>
        </section>
        <section>
            <RenderList title="All children" list={listForSanta}/>
            <FilteredList title="Nice Children" list={listForSanta} filter='naughty' filterVal={false}/>
            <FilteredList title="Naughty Children" list={listForSanta} filter='naughty' filterVal={true}/>
        </section>
    </article>, 
document.getElementById('root'));

