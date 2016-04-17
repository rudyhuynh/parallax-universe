import React from 'react'
import ReactDOM from 'react-dom'
import Star from './Star'
import Util from './Util'

const SPEED_REDUCE = 0.01;//(0, 1]
const FURTHEST_DISTANCE = 1000;

export default class Plane extends React.Component {
  constructor(props){
    super(props)
    this.pointerData = {x: 0, y: 0, x0: 0, y0: 0}; 
    this.initStars();
  }
  initStars(){
    let stars = [];

    for (let x=0; x <= 1000; x+=100){
      for (let y=0; y <= 1000; y+=100){
        for (let z=0; z <= 200; z+=100){
          stars.push({x, y, z, d: Util.getRandomInt(1, 10)})
        }
      }
    }

    this.state = {stars: stars}
  }
  componentDidMount(){
    window.addEventListener('mouseup', (e) => this.onMouseUp(e))
    window.addEventListener('mousemove', (e) => this.onMouseMove(e))
  }
  componentWillUnmount(){
    window.removeEventListener('mouseup')
    window.addEventListener('mousemove');
  }
  onMouseDown(e){
    this.pointerData.isDraging = true;
    this.pointerData.x0 = e.clientX;
    this.pointerData.y0 = e.clientY;
    this.pointerData.x = 0;
    this.pointerData.y = 0;  
  }
  onMouseMove(e){
    if (this.pointerData.isDraging){
      this.pointerData.dx = e.clientX - this.pointerData.x0;
      this.pointerData.dy = e.clientY - this.pointerData.y0;
      this.moveStars()
      //TODO
      //let edge = this.nearTheEdge()
      //if (edge){
      //  this.generateEdgeStars(edge)
      //}
    }
  }
  onMouseUp(e){
    this.pointerData.isDraging = false;
    this.pointerData.x = 0;
    this.pointerData.y = 0;
    this.pointerData.x0 = 0;
    this.pointerData.y0 = 0;
  }
  moveStars(){
    let stars = this.state.stars
    let pointerData = this.pointerData
    let {dx, dy} = pointerData

    let newStars = []
    for (let star of stars){
      let {x, y, z, d} = star
      let newPos = {}
      let alpha = SPEED_REDUCE*(1-z/FURTHEST_DISTANCE)
      newPos.x = x - dx*alpha
      newPos.y = y - dy*alpha
      newPos.z = z
      newPos.d = d
      newStars.push(newPos)
    }
    this.setState({stars: newStars})
  }
  //TODO
  nearTheEdge(){
    let planeDOMNode = ReactDOM.findDOMNode(this)
    let planeWidth = planeDOMNode.offsetWidth
    let planeHeight = planeDOMNode.offsetHeight
    let {dx, dy} = this.pointerData
    //if (dx > 0 & dx > )
  }
  //TODO
  generateEdgeStars(edge){

  }
  render() {
    let style = {
      backgroundColor: 'black',
      position: 'fixed',
      width: '100%',
      height: '100%',
      scroll: 'hidden'
    }
    let stars = this.state.stars.map((star, i) => {
      return <Star key={i} {...star} />
    })

    return <div style={style} 
      className="noselect"
      onMouseDown={(e) => this.onMouseDown(e)}>
      {stars}
    </div>;
  }
}
