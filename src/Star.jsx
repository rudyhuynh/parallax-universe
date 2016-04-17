import React, {Component, PropTypes} from 'react'

class Star extends Component{
	constructor(props){
		super(props)
	}
	render(){
		let {x, y, z, d} = this.props;
		let style = {
			position: 'absolute',
			width: `${d}px`,
			height: `${d}px`,
			backgroundColor: 'white',
			borderRadius: '50%',
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