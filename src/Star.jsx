import React, {Component, PropTypes} from 'react'
import Util from './Util'

let starImgUrls = [
	'/img/destellos png 2.png',
	'/img/destellos png 3.png',
	'/img/destellos png 4.png'
]
class Star extends Component{
	constructor(props){
		super(props)
	}
	render(){
		let starImgUrl = starImgUrls[0]//starImgUrls[Util.getRandomInt(0, starImgUrls.length-1)]
		let {x, y, z, d} = this.props;
		let style = {
			position: 'absolute',
			width: `${d}px`,
			height: `${d}px`,
			backgroundSize: 'contain',
			backgroundImage: `url('${starImgUrl}')`,
			//backgroundColor: 'white'
			//borderRadius: '50%',
			transform: `translate3d(${x}px, ${y}px, ${z}px)`,
			//transition: 'transform 1s cubic-bezier(.12,.49,.58,1.03)'
		}
		return <div className="noselect" style={style}>
		</div>
	}
}

Star.propTypes = {
	x: PropTypes.number.isRequired,
	y: PropTypes.number.isRequired,
	z: PropTypes.number.isRequired,
	d: PropTypes.number
}

Star.defaultProps = {
	d: 10
}

export default Star