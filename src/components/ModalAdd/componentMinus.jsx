

import { useEffect } from 'react';
import {
  DivSetting,
  Forms,
  FormsInput,
  FormsSelect,
  Option,
  ContainerOptions
} from './StyledContent';
const MinusComponent = ({change,id,cat}) => {
  
 

  
  const typeOfSelector = cat.find(
    obj => obj.id === id
  );

useEffect(()=>{})

  
 
  

  
  return (
    <>
      <DivSetting className="SetingTransaction">
        <form>
          <Forms>
            <FormsInput placeholder="Select a category"  />
            <ContainerOptions><FormsSelect  id="category" onChange={change}  value={typeOfSelector.name} name="select">

{cat.map(category => {
  return <Option key={category.id}>{category.name}</Option>;
})}
</FormsSelect></ContainerOptions>
            
          </Forms>

        </form>
      </DivSetting>
      
    </>
  );
};
export default MinusComponent;
