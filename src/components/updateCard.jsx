import React from 'react';

const UpdateCard = (props) => {



    function updateClick() {
      console.log("updated")
    }


    return (
        <div className="note">
             <div className="top">
                <h2 className="name">{props.expense}</h2>
                
            </div>
            <div className="bottom">
                <p className="info">{props.expenseDate}</p>
                <p className="info">💵{props.expenseCost}</p>

            </div>
            <div className="bottom">
                <p className="info">{props.expenseSummary}</p>
 
            </div>
            <button onClick={updateClick} className='btnLeft'>Update</button>
        </div>
    )
}

export default UpdateCard;