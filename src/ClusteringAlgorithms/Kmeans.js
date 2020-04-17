export function getKmeansClusteredPoints(points) {
    let colors = []
    let auxillaryPoints = points.slice();
    KmeansClustering(auxillaryPoints, colors);
    points = auxillaryPoints;
    return [points, colors];
}

function KmeansClustering(auxillaryPoints) {

}