import React from 'react';
import './ClusteringVisualizer.css'
import { getKmeansClusteredPoints } from '../ClusteringAlgorithms/Kmeans';

let WINDOW_WIDTH = window.innerWidth;
let WINDOW_HEIGHT = window.innerHeight;
let NUMBER_OF_POINTS = 100;

function reportWindowSize() {
    WINDOW_WIDTH = window.innerWidth;
    WINDOW_HEIGHT = window.innerHeight;
}
window.onresize = reportWindowSize;

const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';
const ANIMATION_SPEED_MS = 10;

class ClusteringVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            points: []
        }
    }
    componentDidMount() {
        this.resetPoints();
    }
    resetPoints() {
        const points = [];
        for (let i = 0; i < NUMBER_OF_POINTS; i++) {
            points.push([
                randomIntFromInterval(0, WINDOW_WIDTH),
                randomIntFromInterval(0, WINDOW_HEIGHT)
            ])
        }
        this.setState({points: points});
    }

    KmeansClustering() {
        const [points, colors] = getKmeansClusteredPoints(this.state.points);
    }
    render() {
        const points = this.state.points;
        const TOTAL_BUTTONS = 5;
        
        return (
            <>
            <div className="points-container">
                {points.map((value, idx) => (
                    <div
                        className="a-point"
                        key={idx}
                        style={{
                            backgroundColor: PRIMARY_COLOR,
                            left: `${value[0]}px`,
                            bottom: `${value[1]}px`
                        }}
                    ></div>
                ))}
            </div>
            <div className="buttons" > 
                <button title="Generates a new random points" 
                    style={{ position: 'relative',top:`${0*(WINDOW_HEIGHT-20)/TOTAL_BUTTONS}px`}} 
                    onClick={() => this.resetPoints()}>
                    Generate New Points
                </button>
                <button title="K-means Clustering" id="KmeansBtn"
                    style={{ position: 'relative', top:`${0.5*(WINDOW_HEIGHT-20)/TOTAL_BUTTONS}px`}} 
                    onClick={() => this.KmeansClustering()}>
                    K-means Clustering
                </button>
                {/* <button title="Graph-based Clustering" id="GraphBtn"
                    style={{ position: 'relative', top:`${1.5*(WINDOW_HEIGHT-20)/TOTAL_BUTTONS}px`}} 
                    onClick={() => {}}>
                    Graph-based Clustering (Not yet)
                </button> */}
            </div>
            </>
        );
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default ClusteringVisualizer;