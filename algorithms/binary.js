const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

const binarySearch = (arr, num, left, right) => {
    let middle = Math.floor((left + right) / 2);

    // range overlapped, so never found number
    if (left > right) {
        return -1;
    }
    else if (num === arr[middle]) {
        return middle;
    }
    else if (num < arr[middle]) {
        // call again w/ a new right value
        return binarySearch(arr, num, left, middle - 1);
    }
    else {
        // call again with a new left value
        return binarySearch(arr, num, middle + 1, right);
    }
};

// set initial left and right values on first call
console.log(binarySearch(data, 12, 0, data.length - 1));

// left & right are parameters of binarySearch(), & start at index of 0 and data.length -1
// RECURSION: called binarySearch() internally & pass in new value for L or new value for R

// logarithm- complexity is O(log n)