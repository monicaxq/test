import React from 'react'



class Cheackedset extends React.Component {

    render() {
        return (<div className='showcheckedbox'>{
            this.props.seat.map((item, index) => {
                return item.map((i, indexx) => {
                    if (i == 1) {
                        return <div className='showchecked' onClick={this.clear.bind(this, index, indexx)}>
                            <div>{index + 1}排{indexx + 1}号</div>
                            <div>${this.props.fare}</div>
                        </div>
                    }
                })
            })}</div>)
    }


    clear(i, k) {
        this.props.clearBTn(i, k)
    }


}

export default Cheackedset