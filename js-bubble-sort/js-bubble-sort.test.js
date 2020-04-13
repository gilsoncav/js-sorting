import bubbleSort from './js-bubble-sort';

test('order an empty array', () => {
   const emptyArray = [];

   expect(bubbleSort(emptyArray)).toEqual([]);
});

test('order an 2 items array [34,2]', () => {
    const array = [34, 2];

    expect(bubbleSort(array)).toEqual([2,34]);
});

test('order an array with no reps [4,8,5,1,2,7,3]', () => {
    const array = [4,8,5,1,2,7,3];

    expect(bubbleSort(array)).toEqual([1,2,3,4,5,7,8]);
});

test('order an array with reps [4,8,5,1,5 2,8,7,3]', () => {
    const array = [4,8,5,1,5,2,8,7,3];

    expect(bubbleSort(array)).toEqual([1,2,3,4,5,5,7,8,8]);
});

test('order a 100 numbers array', () => {
    const array = [2964, -2317, -3551, 1237, -3127, -3505, 3810, -4685, 3902, 21, 4320, 4624, 3076, 934, -880, -1115, -4317, -1067, -4994, -3419, -2288, 322, 3254, 1912, -1415, -1340, -4609, -1492, -4989, 1118, 3922, 1977, -79, 86, -1145, 339, -4809, 507, -1611, -4072, 1940, 1634, -3709, -367, 2897, -557, -157, 1639, 3833, 2042, 2862, -352, 2064, -3262, 730, 2415, 1891, 1643, -4397, -270, -4505, 3238, -503, 290, -4675, -2728, 2495, 4223, -3412, 3150, 4672, 1978, -1352, -4714, -1875, -1746, -1383, -5, 1762, 3067, 2723, -3190, 4356, 1617, 30, -3749, 3621, 2705, 4881, -4766, -3914, -3386, 3771, -2802, -4811, -4968, 2266, 314, 3002, -1194];

    expect(bubbleSort(array)).toEqual([-4994, -4989, -4968, -4811, -4809, -4766, -4714, -4685, -4675, -4609, -4505, -4397, -4317, -4072, -3914, -3749, -3709, -3551, -3505, -3419, -3412, -3386, -3262, -3190, -3127, -2802, -2728, -2317, -2288, -1875, -1746, -1611, -1492, -1415, -1383, -1352, -1340, -1194, -1145, -1115, -1067, -880, -557, -503, -367, -352, -270, -157, -79, -5, 21, 30, 86, 290, 314, 322, 339, 507, 730, 934, 1118, 1237, 1617, 1634, 1639, 1643, 1762, 1891, 1912, 1940, 1977, 1978, 2042, 2064, 2266, 2415, 2495, 2705, 2723, 2862, 2897, 2964, 3002, 3067, 3076, 3150, 3238, 3254, 3621, 3771, 3810, 3833, 3902, 3922, 4223, 4320, 4356, 4624, 4672, 4881]);
});

test('order a 10000 numbers random array', () => {
    const randomArray = new Array(10000).map(() => Math.floor( Math.random() * 10001 - 5000));
    const copiedArrayToSort = [...randomArray].sort((a,b) => a - b);

    expect(bubbleSort(randomArray)).toEqual(copiedArrayToSort);
});

test('order a 100.000 numbers random array', () => {
    const randomArray = [];

    for (let i = 0; i < 100000; i++) {
        randomArray[i] = Math.floor( Math.random() * 10001 - 5000 );
    }

    const copiedArrayToSort = [...randomArray].sort((a,b) => a - b);

    console.dir(randomArray);
    console.dir(copiedArrayToSort);
    expect(bubbleSort(randomArray)).toEqual(copiedArrayToSort);
});