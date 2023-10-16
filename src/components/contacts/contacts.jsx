import ItemContact from './Item/item';
import { List, Item, EmptyList } from './contacts.styled';
import { useSelector } from 'react-redux';
import { selectFiltredContacts } from 'redux/selectors';

const Contacts = () => {
  const filtredContacts = useSelector(selectFiltredContacts);

  return (
    <>
      <List>
        {filtredContacts.length === 0 && (
          <EmptyList>There aren't contacts yet. Let's add somebody.</EmptyList>
        )}
        {filtredContacts.map(({ id, name, phone }) => (
          <Item key={id}>
            <ItemContact name={name} phone={phone} id={id} />
          </Item>
        ))}
      </List>
    </>
  );
};

export default Contacts;
