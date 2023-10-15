import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from './input/Input';
import Contacts from './contacts/contacts';
import Filter from './filter/filter';
import { MainContainer, MainTitle, SecondaryTitle,Span } from './App.styled';
import {selectError, selectLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

const App = () => {
  
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    
    dispatch(fetchContacts());

  },[dispatch])

  return (
    <MainContainer>
      <MainTitle>Phonebo<Span>ok</Span></MainTitle>
      <Input/>
      <SecondaryTitle>Contacts</SecondaryTitle>
      <Filter />
      {isLoading && <p>Loading contacts ... </p> }
      {error && <p>{error}</p>}
      <Contacts/>
    </MainContainer>
  );
};

export default App;
