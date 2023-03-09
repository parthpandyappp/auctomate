import toast from "react-hot-toast";

const toastStyle = {
    backgroundColor: "white",
    border: "2px solid #3DA9FC",
    padding: "16px",
    color: "black",
};

const toastError = {
    backgroundColor: "white",
    border: "2px solid red",
    padding: "16px",
    color: "black",
};

const notifyUserLogin = (user) =>
    toast(
        (t) => (
            <span>
                <b>Welcome, {user} to Auctomate</b>
            </span>
        ),
        {
            style: toastStyle,
        }
    );

const notifyUserLoginError = () =>
    toast(
        (t) => (
            <span>
                <b>Unable to login with given credentials</b>
            </span>
        ),
        {
            style: toastError,
        }
    );

const notifyAssetReg = () =>
    toast(
        (t) => (
            <span>
                <b>Asset registered succesfully</b>
            </span>
        ),
        {
            style: toastStyle,
        }
    );

const notifyError = () =>
    toast(
        (t) => (
            <span>
                <b>Something's wrong, try again</b>
            </span>
        ),
        {
            style: toastError,
        }
    );

export { notifyUserLogin, notifyUserLoginError, notifyAssetReg, notifyError }