import { useDispatch } from "react-redux";

import { openModalAddTransaction, closeModalAddTransaction } from "redux/transactionsController/slice";
import { openModalLogout, closeModalLogout } from "redux/auth/auth-slice";
export const useOpenModalAddTransaction = () => {
    const dispatch = useDispatch();
    return () => dispatch(openModalAddTransaction());
}

export const useCloseModalAddTransaction = () => {
    const dispatch = useDispatch();
    return () => dispatch(closeModalAddTransaction())
}

export const useOpenModalLogout = () => {
    const dispatch = useDispatch();
    return () => dispatch(openModalLogout())
}
export const useCloseModalLogout = () => {
    const dispatch = useDispatch();
    return () => dispatch(closeModalLogout())
}
