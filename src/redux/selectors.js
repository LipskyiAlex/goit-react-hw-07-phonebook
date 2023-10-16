import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;

export const selectFiltredContacts = createSelector(
  [selectContacts, selectFilter],
  (items,filter) => {
  
    return items.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
