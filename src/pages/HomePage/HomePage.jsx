import HomeTab from 'components/HomeTab/HomeTab';
import { Btn } from './HomeButtonStyled';
import sprite from '../../iconsSprite/icons.svg';
import { useState } from "react";
import ModalAdd from 'components/ModalAdd/ModalAdd';

export const HomePage = () => {
  const [modalAddActive, getModalAdd]= useState(false)
  return (
    <>
      <p>Home Page</p>
      <HomeTab />
      <ModalAdd active={modalAddActive} setActive={getModalAdd}/>
      <Btn onClick={()=>getModalAdd(true)} type='button'>
        <svg width="20" height="20">
          <use href={sprite + '#iconplus'} width="20" height="20"></use>
        </svg>
      </Btn>{' '}
    </>
  );
};
