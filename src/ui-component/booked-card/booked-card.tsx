import React from 'react'

type IProps = {
    name: string,
    status: string,
    price: string,
}
export default function BookedCard(props: IProps){
    return(
        <React.Fragment>
                <div className="card">
                    <div className="text-info">
                        <div className="title">{props.name}</div>
                        <div className="status">{props.status}</div>
                    </div>
                    <div className="price">{props.price}</div>
                </div>
        </React.Fragment>
    )
}