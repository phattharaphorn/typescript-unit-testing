export function merge(
    collection_1: number[],
    collection_2: number[]
  ): number[] {
    let resultArray: number[] = [],
      c1_index = 0,
      c2_index = 0;
  
    while (c1_index < collection_1.length && c2_index < collection_2.length) {
      if (collection_1[c1_index] < collection_2[c2_index]) {
        resultArray.push(collection_1[c1_index]);
        c1_index++;
      } else if (collection_1[c1_index] > collection_2[c2_index]) {
        resultArray.push(collection_2[c2_index]);
        c2_index++;
      } else {
        resultArray.push(collection_1[c1_index]);
        resultArray.push(collection_2[c2_index]);
        c1_index++;
        c2_index++;
      }
    }
    while (c1_index < collection_1.length) {
      resultArray.push(collection_1[c1_index]);
      c1_index++;
    }
    while (c2_index < collection_2.length) {
      resultArray.push(collection_2[c2_index]);
      c2_index++;
    }
    return resultArray;
  }