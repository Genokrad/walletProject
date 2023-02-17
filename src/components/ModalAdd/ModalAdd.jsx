import { ContainerModal, ContentModal } from './ModalAddStyled';
import sprite from '../../iconsSprite/icons.svg';
import { SvgClose } from './ModalAddStyled';
import AddComponent from './ComponentAdd';
import MinusComponent from './componentMinus';

import {
  Header,
 
  Switch,
  Span,
  Checkbox,
  DivChekbox,
} from './StyledContent';

import { useState } from 'react';
import { closeModalAddTransaction } from 'redux/transactionsController/slice';
import {useDispatch } from 'react-redux';
// import { selectIsModalAddTransactionOpen } from 'redux/transactionsController/selectors';
const ModalAdd = ({ active,}) => {
  const [add, getAdd] = useState(true);
  // const modalAdd = useSelector(selectIsModalAddTransactionOpen)
 
  const dispatch = useDispatch();
 
  return (
    <ContainerModal
      className={active ? 'ContainerModal active' : 'ContainerModal'}
      onClick={() => dispatch(closeModalAddTransaction())}
    >
      <ContentModal
        className={active ? 'ContentModal active' : 'ContentModal'}
        onClick={e => e.stopPropagation()}
      >
        <SvgClose width="25" height="25" onClick={() => dispatch(closeModalAddTransaction())}>
          <use href={sprite + '#iconclose'} width="25" height="25"></use>
        </SvgClose>
        <Header>
          <h2>Add transaction</h2>
        </Header>
        <div>
          <DivChekbox className="RadioBtn">
            <p>Income</p>
            <Switch className="switch">
              <Checkbox
                className="Checkbox"
                type="checkbox"
                onClick={() => getAdd(!add)}
              />
              <Span className="slider round"></Span>
            </Switch>
            <p>Expense</p>
          </DivChekbox>
          {add ? <AddComponent /> : <MinusComponent />}

        </div>
      </ContentModal>
    </ContainerModal>
  );
};
export default ModalAdd;