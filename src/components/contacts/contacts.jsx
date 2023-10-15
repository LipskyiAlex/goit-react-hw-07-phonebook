import ItemContact from './Item/item';
import { List, Item, EmptyList} from './contacts.styled';
import { useSelector } from "react-redux";
import { selectContacts,selectFilter} from 'redux/selectors';


const Contacts = () => {


  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filtredContacts = contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()));

  return (

    <>
      <List>
        {filtredContacts.length === 0 && (
          <EmptyList>There aren't contacts yet. Let's add somebody.</EmptyList>
        )}
        {filtredContacts.map(({ id, name, phone }) => (
          <Item key={id}>
            <ItemContact
              name={name}
              phone={phone}
              id={id}
            />
          </Item>
        ))}
      </List>
    </>
  );
};

export default Contacts;
