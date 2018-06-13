import React from 'react'
import Seatbox from './seatbox'
import Cheackedset from './checkedseat'
// import Summoney from './allmoney'


class Cineam extends React.Component {

    constructor(p) {
        super(p)
        this.state = {
            seatlist: [[0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0]],
            fare: 39
        }
    }


    render() {
        return (<div className='cineammainbox'>
            <Seatbox seat={this.state.seatlist} checkBtn={this.checkseat.bind(this)} />
            <Cheackedset seat={this.state.seatlist} clearBTn={this.clearseat.bind(this)} fare={this.state.fare} />
            <h2>共计:{this.summoney()}</h2>
        </div>)
    }


    summoney() {
        let checkedsum = 0;
        for (let item of this.state.seatlist) {
            for (let i of item) {
                if (i == 1) {
                    checkedsum++;
                }
            }
        }
        return checkedsum * this.state.fare
    }


    clearseat(index1, index2) {
        this.state.seatlist[index1][index2] = 0
        this.setState({})
    }



    checkseat(index1, index2) {
        let checkedsum = 0;
        for (let item of this.state.seatlist) {
            for (let i of item) {
                if (i == 1) {
                    checkedsum++;
                }
            }
        }
        if (checkedsum < 5) {
            if (this.state.seatlist[index1][index2] == 0) {
                this.state.seatlist[index1][index2] = 1
            }
            else {
                this.state.seatlist[index1][index2] = 0
            }
        }
        else {
            if (this.state.seatlist[index1][index2] == 1) {
                this.state.seatlist[index1][index2] = 0
            }
        }
        this.setState({})
    }

}




export default Cineam