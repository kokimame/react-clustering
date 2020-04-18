const COLOR_PALLATE = ['lightgreen', 'pink', 'orange'];

function get2dCentroid(cluster) {
    var xSum = 0, ySum = 0;
    cluster.forEach(point => {
        xSum += point[0];
        ySum += point[1];
    })
    return [xSum / cluster.length, ySum / cluster.length];
}

function get2dEuclidDistance(p1, p2) {
    var xd = p2[0] - p1[0];
    var yd = p2[1] - p1[1];
    xd *= xd;
    yd *= yd;
    return Math.sqrt(xd + yd);
}

export function getKmeansClusteredPoints(points) {
    const K = 2;
    const colors = [];
    const auxillaryPoints = points.slice();
    KmeansClustering(K, auxillaryPoints, colors);
    points = auxillaryPoints

    return [points, colors];
}

function KmeansClustering(K, points, colors) {
    const N = points.length;
    const centroids = Array.from({length: K}, v => 0);
    const clusteredPoints = Array.from({length: K}, v => []);
    for (let k = 0; k < K; k++) {
        for (let i = 0; i < N; i++) {
            if (i % K === k) {
                clusteredPoints[k].push(points[i]);
            }
        }
        centroids[k] = get2dCentroid(clusteredPoints[k]);
    }
    console.log(centroids);

    for (let epoch = 0; epoch < 50; epoch++) {
        const clusteredPoints = Array.from({length: K}, v => []);
        for (let i = 0; i < N; i++) {
            const distanceArray = Array.from(
                {length: K}, (v, j) => get2dEuclidDistance(points[i], centroids[j])
            )
            const nearest = distanceArray.indexOf(Math.min(...distanceArray));
            console.log(distanceArray, nearest)
            clusteredPoints[nearest].push(points[i]);
        }
        const newCentroids = Array.from({length: K}, v => 0);
        for (let k = 0; k < K; k++) {
            newCentroids[k] = get2dCentroid(clusteredPoints[k]);
        }
        // if (centroids == newCentroids)
    }

    const flatClustedPoints = [];
    clusteredPoints.forEach((cluster, index) => {
        cluster.forEach(point => {
            flatClustedPoints.push(point);
            colors.push(COLOR_PALLATE[index]);
        })
    })
    points = flatClustedPoints;
}