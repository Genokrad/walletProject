
import {useSelector } from 'react-redux';

import { getCat } from 'redux/categories/categories-selectors';


import {
  DivSetting,
  Forms,
  FormsInput,
  FormsSelect,
  Option,

} from './StyledContent';
const MinusComponent = ({change,id}) => {
  const getCategory = useSelector(getCat);
  const typeOfSelector = getCategory.find(
    obj => obj.id === id
  );
  console.log(typeOfSelector)
  
  
 
  

  
  return (
    <>
      <DivSetting className="SetingTransaction">
        <form>
          <Forms>
            <FormsInput placeholder="Select a category" value={typeOfSelector.name} />
            <FormsSelect id="category" onChange={change} name="select">
              {getCategory.map(category => {
                return <Option key={category.id}>{category.name}</Option>;
              })}
            </FormsSelect>
          </Forms>

        </form>
      </DivSetting>
      
    </>
  );
};
export default MinusComponent;
