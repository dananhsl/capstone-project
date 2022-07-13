import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notifyAdd = () => {
	toast.success('Added successfully', {
		position: 'top-center',
		autoClose: 2000,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: true,
		progress: undefined,
	});
};
export const notifyEdit = () => {
	toast.success('Edited successfully', {
		position: 'top-center',
		autoClose: 2000,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: true,
		progress: undefined,
	});
};
export const notifyDelete = () => {
	toast.success('Deleted successfully', {
		position: 'top-center',
		autoClose: 2000,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: true,
		progress: undefined,
	});
};
