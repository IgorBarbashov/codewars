function crossProduct (vector1, vector2) {
    if (!Array.isArray(vector1) || !Array.isArray(vector2) || vector1.length !== 3 || vector2.length !== 3) throw ('Arguments are not 3D vectors!');
    return [vector1[1]*vector2[2]-vector1[2]*vector2[1], vector1[2]*vector2[0]-vector1[0]*vector2[2], vector1[0]*vector2[1]-vector1[1]*vector2[0]];
}
