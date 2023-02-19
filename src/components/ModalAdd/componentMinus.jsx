
import {useSelector } from 'react-redux';

import { getCat } from 'redux/categories/categories-selectors';


import {
  DivSetting,
  Forms,
  FormsInput,
  FormsSelect,
  Option,

} from './StyledContent';
const MinusComponent = ({change}) => {
  const getCategory = useSelector(getCat);

  
  
  

  

  
  return (
    <>
      <DivSetting className="SetingTransaction">
        <form>
          <Forms>
            <FormsInput placeholder="Select a category" />
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
