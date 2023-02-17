import { DivSetting,Forms,
    FormsInput,
    FormsSelect,DivDataSum,Option ,Sum,Data,Coment, DivBtn,BtnAdd,BtnCancel} from "./StyledContent"
const MinusComponent = ()=>{
    return(<><DivSetting className="SetingTransaction">
    <form>
        <Forms ><FormsInput placeholder="Select a category" />
<FormsSelect id="cities">
<Option value="Naples"> </Option>
   <Option value="Naples">Naples</Option>
   <Option value="London">London</Option>
   <Option value="Berlin">Berlin</Option>
   <Option value="New York">New York</Option>
   <Option value="Frattamaggiore">Frattamaggiore</Option>
</FormsSelect></Forms>
    
      <DivDataSum>
        <Sum placeholder="0.00"></Sum>
        <Data type="date"  value="2022-02-16"></Data>
      </DivDataSum>

      <Coment placeholder="Comment"></Coment>
    </form>
  </DivSetting>
  <DivBtn className="Btn">
    <BtnAdd>ADD</BtnAdd>
    <BtnCancel>CANCEL</BtnCancel>
  </DivBtn></>)
}
export default  MinusComponent