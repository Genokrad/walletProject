import { Table, TopTable,TableBody,Data,
    Type,
    Category,
    Comment,
    Sum,Btn,Action} from './HomeTabStyle';
const HomeTab = () => {
  return (
    <div>
      <Table>
        <thead>
          <TopTable>
            <Data>Date</Data>
            <Type>Type</Type>
            <Category>Category</Category>
            <Comment>Comment</Comment>
            <Sum>Sum</Sum>
            <th>  </th>
          </TopTable>
        </thead>
        <tbody>
          <TableBody>
            <Data>04.01.19</Data>
            <Type>-</Type>
            <Category>Ouher</Category>
            <Comment>Gift</Comment>
            <Sum>300</Sum>
            <Action>
              <Btn>Delete</Btn>
            </Action>
          </TableBody>
          <TableBody>
            <Data>04.01.19</Data>
            <Type>-</Type>
            <Category>Ouher</Category>
            <Comment>Gift</Comment>
            <Sum>300</Sum>
            <Action>
              <Btn>Delete</Btn>
            </Action>
          </TableBody>
          <TableBody>
            <Data>04.01.22</Data>
            <Type>+</Type>
            <Category>Gars</Category>
            <Comment>Fuel</Comment>
            <Sum>1000</Sum>
            <Action>
              <Btn>Delete</Btn>
            </Action>
          </TableBody>
          <TableBody>
            <Data>04.01.19</Data>
            <Type>-</Type>
            <Category>Ouher</Category>
            <Comment>Gift</Comment>
            <Sum>300</Sum>
            <Action>
              <Btn>Delete</Btn>
            </Action>
          </TableBody>
        </tbody>
      </Table>
    </div>
  );
};
export default HomeTab;