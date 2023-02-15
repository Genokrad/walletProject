import { useDispatch } from "react-redux";

import { openModalAddTransaction, closeModalAddTransaction } from "redux/transactionsController/slice";

export const useOpenModalAddTransaction = () => {
    const dispatch = useDispatch();
    return () => dispatch(openModalAddTransaction());
}

export const useCloseModalAddTransaction = () => {
    const dispatch = useDispatch();
    return () => dispatch(closeModalAddTransaction())
}

// и СЮДА ТАК же закинуть с modalLogout close and open