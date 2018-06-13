import React from 'react'



class Seatbox extends React.Component {

    render() {
        return (<div>
            {this.props.seat.map((item, index) => {
                return <div className='hang'>{item.map((i, indexx) => {
                    if (i == 0) {
                        return <div className='cseat' onClick={this.checkseat.bind(this, index, indexx)}>
                            <span>{index + 1}排{indexx + 1}号</span>
                        </div>
                    }
                    else {
                        return <div className='cseat cseatgreen' onClick={this.checkseat.bind(this, index, indexx)}>
                            <span>{index + 1}排{indexx + 1}号</span>
                        </div>
                    }
                })}</div>
            })}
        </div>)
    }

    checkseat(index1, index2) {
        this.props.checkBtn(index1, index2)

    }


}
export default Seatbox