import { DivSetting,DivDataSum,Sum,Data,Coment, DivBtn,BtnAdd,BtnCancel} from "./StyledContent"
const AddComponent = ()=>{
    return( <><DivSetting className="SetingTransaction">
    <form>
      <DivDataSum>
        <Sum placeholder="0.00"></Sum>
        <Data type="date" value="2022-02-16"></Data>
      </DivDataSum>

      <Coment placeholder="Comment"></Coment>
    </form>
  </DivSetting>
  <DivBtn className="Btn">
    <BtnAdd>ADD</BtnAdd>
    <BtnCancel>CANCEL</BtnCancel>
  </DivBtn></>)
}
export default AddComponent