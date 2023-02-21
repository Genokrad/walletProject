import styled from 'styled-components';

export const TransactionWraper = styled.div``;

export const Transactionlist = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TransactionItem = styled.li`
  width: 280px;
  height: 280px;
  background-color: var(--white-text-color);
  border-radius: 10px;
  gap: 1px;
`;

export const OneRowDiv = styled.div`
  width: 280px;
  padding: 11px 15px 8px 20px;
  display: flex;

  justify-content: space-between;
  &:not(:last-child) {
    border-bottom: 1px solid #dcdcdf;
  }
`;

export const CategoryDescription = styled.p`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  color: var(--black-text-color);
`;

export const Categorydata = styled.p`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  display: flex;
  align-items: center;
`;

export const Span = styled.span`
  padding-left: 10px;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 0.02em;
`;

export const Button = styled.button`
  width: 67px;
  height: 26px;
  padding: 4px 12px;
  background: #24cca7;
  border-radius: 18px;
  border: none;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  text-align: center;

  color: var(--white-text-color);
`;
