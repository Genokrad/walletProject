import { ContainerModal, ContentModal } from './ModalAddStyled';
import sprite from '../../iconsSprite/icons.svg';
import { SvgClose } from './ModalAddStyled';
import AddComponent from './ComponentAdd';
import MinusComponent from './componentMinus';
import { Header, Switch, Span, Checkbox, DivChekbox } from './StyledContent';

import { useState } from 'react';


const ModalAdd = ({ active, setActive }) => {
  const [add, getAdd] = useState(true);
  return (
    <ContainerModal
      className={active ? 'ContainerModal active' : 'ContainerModal'}
      onClick={() => setActive(false)}
    >
      <ContentModal
        className={active ? 'ContentModal active' : 'ContentModal'}
        onClick={e => e.stopPropagation()}
      >
        <SvgClose width="25" height="25" onClick={() => setActive(false)}>
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
