import {Wrapper,Contact,Tel,Delete} from "./item.styled"
import { AiFillDelete } from 'react-icons/ai';
import { FcBusinessContact } from 'react-icons/fc';
import { BsTelephoneOutbound } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { deleteContact } from "redux/operations";

const ItemContact = ({name,phone,id}) => {

  const dispatch = useDispatch();

  const handleContactDelete = id => {

    dispatch(deleteContact(id));
  };

 return (
   
    <>
<Wrapper>
  <FcBusinessContact size={20} />
  <Contact>{name}</Contact>
</Wrapper>
<Wrapper>
  <BsTelephoneOutbound size={20} />
  <Tel>{phone}</Tel>
</Wrapper>
<Delete role="button" aria-label="Delete" onClick={() => handleContactDelete(id)}>
  <AiFillDelete size={20} />
</Delete>
</>
)
}


export default ItemContact;