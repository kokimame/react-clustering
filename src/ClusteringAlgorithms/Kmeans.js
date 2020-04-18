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
    const auxillaryPoints = points.slice();
    const colors = KmeansClustering(K, auxillaryPoints);

    return colors;
}

function KmeansClustering(K, points) {
    const N = points.length;
    var centroids = Array.from({length: K}, v => 0);
    var clusteredPoints = Array.from({length: K}, v => []);
    var clusteredIndex = Array.from({length: K}, v => []);
    // Initialize clusters
    for (let k = 0; k < K; k++) {
        for (let i = 0; i < N; i++) {
            if (i % K === k) {
                clusteredPoints[k].push(points[i]);
            }
        }
        centroids[k] = get2dCentroid(clusteredPoints[k]);
    }

    for (let epoch = 0; epoch < 3; epoch++) {
        clusteredPoints = Array.from({length: K}, v => []);
        clusteredIndex = Array.from({length: K}, v => []);

        for (let i = 0; i < N; i++) {
            const distanceArray = Array.from(
                {length: K}, (v, j) => get2dEuclidDistance(points[i], centroids[j])
            )
            const nearest = distanceArray.indexOf(Math.min(...distanceArray));
            clusteredPoints[nearest].push(points[i]);
            clusteredIndex[nearest].push(i)
        }
        const newCentroids = Array.from(
            {length: K}, (v, k) => get2dCentroid(clusteredPoints[k])
        );
        centroids = newCentroids;
    }

    const colors = Array.from({length : points.length})
    for (let k = 0; k < clusteredIndex.length; k++) {
        for (let i = 0; i < clusteredIndex[k].length; i++) {
            colors[clusteredIndex[k][i]] = COLOR_PALLATE[k];
        }
    }
    return colors;
}