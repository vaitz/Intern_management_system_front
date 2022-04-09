import {SERVER_ADDRESS} from '../../../config'

export const changePassRequest = async (setLoading, setError, username, oldPassword, newPassword) => {
    const data = {
        username: username.value,
        oldPassword: oldPassword.value,
        newPassword: newPassword.value
    }
    const res = await fetch(SERVER_ADDRESS+'/users/changePsw',
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            mode: "cors",
            body: JSON.stringify(data)
        });
    console.log("post",res);
    setLoading(false);
    if(res.status === 200) {
        return true;
    }
    return false;
}