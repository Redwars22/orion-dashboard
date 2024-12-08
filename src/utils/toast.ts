import {toast } from 'react-toastify';

export const triggerToast = (text: string) => {
    toast.error(text, {
        position: "top-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        })
}