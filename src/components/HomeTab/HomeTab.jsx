import { getAllTransactions } from 'redux/transactionsController/operations';
import { selectTransactions } from 'redux/transactionsController/selectors';

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

  console.log('transactions', records);

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

      {records.map(
        ({ transactionDate, balanceAfter, type, categoryId, id, comment }) => (
          <>
            <tbody>
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
            </tbody>
          </>
        )
      )}
    </Table>
  );
};
export default HomeTab;

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
