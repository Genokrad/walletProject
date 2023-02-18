import { getAllTransactions } from 'redux/transactionsController/operations';
import { selectTransactions } from 'redux/transactionsController/selectors';
import { getCat } from 'redux/categories/categories-selectors';

import {
  Table,
  TopTable,
  TableBody,
  Data,
  Type,
  Category,
  Comment,
  Sum,
  Btn,
  Action,
  DataTd,
  TypeTd,
  CategoryTd,
  CommentTd,
  SumTd,
} from './HomeTabStyle';
import sprite from '../../iconsSprite/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const HomeTab = () => {
  const dispatch = useDispatch();
  const records = useSelector(selectTransactions);
  const getcat = useSelector(getCat);

  const name = getcat.find(record => record.id === records[0].categoryId);
  const newUser = { ...records[0], name };

  // console.log('newarray', newarray);
  // console.log('transactions', records);
  // console.log('getcat :>> ', getcat);
  // console.log('newUser :>> ', newUser);

  //  function formNewarray(data) {
  //    if (records.find(contact => contact.name === data.name)) {
  //      //  alert(`${data.name} is already in contacts!`);
  //      //  return;
  //    }
  //    //  const newUser = {
  //    //    id: nanoid(),
  //    //    ...data,
  //    //  };
  //    //  dispatch(addContact(newUser));
  //  }

  useEffect(() => {
    dispatch(getAllTransactions());
  }, [dispatch]);

  return (
    <Table>
      <thead>
        <TopTable>
          <Data>Date</Data>
          <Type>Type</Type>
          <Category>Category</Category>
          <Comment>Comment</Comment>
          <Sum>Sum</Sum>
          <th> </th>
        </TopTable>
      </thead>
      <tbody>
        {records.map(
          ({
            transactionDate,
            balanceAfter,
            type,
            categoryId,
            id,
            comment,
          }) => (
            <TableBody key={id}>
              <DataTd>{transactionDate}</DataTd>
              <TypeTd>
                {(type === 'INCOME' && '+') || (type === 'EXPENSE' && '-')}
              </TypeTd>
              <CategoryTd>{categoryId}</CategoryTd>
              <CommentTd>{comment}</CommentTd>
              <SumTd>{balanceAfter}</SumTd>
              <Action>
                <svg width="14" height="14">
                  <use
                    href={sprite + '#iconpencel'}
                    width="14"
                    height="14"
                  ></use>
                </svg>
              </Action>
              <Btn>Delete</Btn>
            </TableBody>
          )
        )}
      </tbody>
    </Table>
  );
};
export default HomeTab;

//  const verification = () => {
//    if (!filter) {
//      return contacts;
//    } else {
//      return contacts.filter(
//        user =>
//          user.name.toLowerCase().includes(filter.toLowerCase()) ??
//          user.number.includes(filter)
//      );
//    }
//  };

// {
//   /* <TableBody>
//           <DataTd>04.01.19</DataTd>
//           <TypeTd>-</TypeTd>
//           <CategoryTd>Ouher</CategoryTd>
//           <CommentTd>Gift</CommentTd>
//           <SumTd>300</SumTd>
//           <Action>
//             <svg width="14" height="14">
//               <use href={sprite + '#iconpencel'} width="14" height="14"></use>
//             </svg>
//             <Btn>Delete</Btn>
//           </Action>
//         </TableBody>
//         <TableBody>
//           <DataTd>04.01.22</DataTd>
//           <TypeTd>+</TypeTd>
//           <CategoryTd>Gars</CategoryTd>
//           <CommentTd>Fuel</CommentTd>
//           <SumTd>1000</SumTd>
//           <Action>
//             <svg width="14" height="14">
//               <use href={sprite + '#iconpencel'} width="14" height="14"></use>
//             </svg>
//             <Btn>Delete</Btn>
//           </Action>
//         </TableBody>
//         <TableBody>
//           <DataTd>04.01.19</DataTd>
//           <TypeTd>-</TypeTd>
//           <CategoryTd>Ouher</CategoryTd>
//           <CommentTd>Gift</CommentTd>
//           <SumTd>300</SumTd>
//           <Action>
//             <svg width="14" height="14">
//               <use href={sprite + '#iconpencel'} width="14" height="14"></use>
//             </svg>
//             <Btn>Delete</Btn>
//           </Action>
//         </TableBody> */
// }
