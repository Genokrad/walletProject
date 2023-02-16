import { ContainerModal, ContentModal } from './ModalAddStyled';
import sprite from '../../iconsSprite/icons.svg';
import { SvgClose } from './ModalAddStyled';
import { Header, Sum, Data,DivDataSum,Coment,DivSetting,DivBtn,BtnAdd,
  BtnCancel} from './StyledContent';
const ModalAdd = ({ active, setActive }) => {
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
          <div className="RadioBtn">
            <div className="switch-btn switch-on">+</div>
          </div>
          <DivSetting className="SetingTransaction">
            <form>
              <DivDataSum>
                <Sum placeholder="0.00"></Sum>
                <Data type="date"></Data>
              </DivDataSum>

              <Coment placeholder='Comment'></Coment>
            </form>
          </DivSetting>
          <DivBtn className="Btn">
            <BtnAdd>ADD</BtnAdd>
            <BtnCancel>CANCEL</BtnCancel>
          </DivBtn>
        </div>
      </ContentModal>
    </ContainerModal>
  );
};
export default ModalAdd;
