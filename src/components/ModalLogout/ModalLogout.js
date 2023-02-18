import { useCloseModalLogout } from "components/modalHooks/hooks"
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { logout } from "redux/auth/auth-operations";
import { getIsError } from "redux/auth/auth-selectors";
import { Content, Modal } from "./ModalLogout.styled";
const body = window.document.body;


export const ModalLogout = () => {
    const closeModal = useCloseModalLogout();
    const dispatch = useDispatch();
    const error = useSelector(getIsError);

    const handleLogout = () => {
        dispatch(logout())
    }
    if (error) {
        toast.error('Sorry,something went wrong,try again')
    }


    useEffect(() => {
        disableBodyScroll(body);
        const escapeModal = event => {
            if (event.code === 'ESCAPE') {
                event.preventDefault();
            }

        };
        window.addEventListener('keydown', escapeModal);

        return () => {
            window.removeEventListener('keydown', escapeModal);
            enableBodyScroll(body);
            clearAllBodyScrollLocks(body);
        };
    });


    return (

        <Modal>
            <Content >
                <button onClick={handleLogout}>Ok</button>
                <button onClick={closeModal}>Cancel</button>
            </Content>

        </Modal>


    )
}