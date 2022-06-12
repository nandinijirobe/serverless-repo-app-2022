// start coding your function here!
function find_max(arr) {
    max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// numbers = [1,2,3,4,5,7,6];
// console.log(find_max(numbers));
exports.find_max = find_max;
