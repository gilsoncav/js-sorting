
export default function bubbleSort(iterable) {
    // Make sure the array is "arrayfied"
    // let's say that "N" is the length of the array
    const array = Array.from(iterable);

    // 1. make N - 1 rounds to identify and push the greater item to the right edge of the array
    for (let rightWall = array.length - 1; rightWall >= 1; rightWall--) {
        let swapped = false;

        // check each consecutive pair (A,B) and swap if A > B
        // (pushing, "bubbling" or "sinking" the greater to the right)
        for (let iA = 0; iA < rightWall; iA++) {
            const iB = iA + 1;

            if (array[iA] > array[iB]) {
                // swap using array destructuring...
                [array[iA], array[iB]] = [array[iB], array[iA]];
                swapped = true;
            }
        }

        // If no-one was swapped, the array is already sorted. Rush to return it!
        if (!swapped) break;
    }

    return array;
}