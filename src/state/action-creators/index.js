// First seperate folder is created for action creator (action creator means methods who order the reducer to make action and chang state value )
// actions are created in file index.js and here actions are deposite and withdraw

export const depositMoney = (amount) => { // deposite action
    return (dispatch) => {
        dispatch({
            type: 'deposite',
            payload: amount
        })
    }
}

export const withdrawMoney = (amount) => { // withdraw action
    return (dispatch) => {
        dispatch({
            type: 'withdraw',
            payload: amount
        })
    }
}