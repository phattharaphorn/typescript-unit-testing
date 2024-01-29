import { merge } from "../src/merge";
describe("merge", () => {
  // test case 1 : รวมตัวเลขที่เป็นบวก,ไม่ซ้ำกัน,ขนาดเท่ากัน
  test("test merge with positive, unique, equal size", () => {
    const collection1 = [3, 5, 6, 7, 9];
    const collection2 = [1, 2, 4, 8, 10];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const result = merge(collection1, collection2);

    expect(result).toEqual(expected);
  });

  // test case 2 : รวมตัวเลขที่เป็นบวก,ไม่ซ้ำกัน,ขนาดไม่เท่ากัน
  test("test merge with positive, unique, unequal size", () => {
    const collection1 = [5, 6, 8, 9, 10];
    const collection2 = [2, 3, 4];
    const expected = [2, 3, 4, 5, 6, 8, 9, 10];

    const result = merge(collection1, collection2);

    expect(result).toEqual(expected);
  });

  // test case 3 : รวมตัวเลขที่เป็นบวก,ซ้ำกัน,ขนาดเท่ากัน
  test("test merge with positive, duplicate, equal size", () => {
    const collection1 = [2, 4, 5, 6, 8];
    const collection2 = [4, 5, 6, 7, 8];
    const expected = [2, 4, 4, 5, 5, 6, 6, 7, 8, 8];

    const result = merge(collection1, collection2);

    expect(result).toEqual(expected);
  });

  // test case 4 : รวมตัวเลขที่เป็นบวก,ซ้ำกัน,ขนาดไม่เท่ากัน
  test("test merge with positive duplicate, unequal size", () => {
    const collection1 = [1, 3, 7];
    const collection2 = [3, 5, 7, 7, 8];
    const expected = [1, 3, 3, 5, 7, 7, 7, 8];

    const result = merge(collection1, collection2);

    expect(result).toEqual(expected);
  });

  // test case 5 : รวมตัวเลขที่เป็นลบ,ไม่ซ้ำกัน,ขนาดเท่ากัน
  test("test merge with negative, unique, equal size", () => {
    const collection1 = [-6, -4, -3, -2, -1];
    const collection2 = [-10, -9, -8, -7, -5];
    const expected = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1];

    const result = merge(collection1, collection2);

    expect(result).toEqual(expected);
  });

  // test case 6 : รวมตัวเลขที่เป็นลบ,ไม่ซ้ำกัน,ขนาดไม่เท่ากัน
  test("test merge with negative, unique, unequal size", () => {
    const collection1 = [-9, -7, -5, -4, -2];
    const collection2 = [-6, -3, -1];
    const expected = [-9, -7, -6, -5, -4, -3, -2, -1];

    const result = merge(collection1, collection2);

    expect(result).toEqual(expected);
  });

  // test case 7 : รวมตัวเลขที่เป็นลบ,ซ้ำกัน,ขนาดเท่ากัน
  test("test merge with negative, duplicate, equal size", () => {
    const collection1 = [-8, -7, -5, -3, -2];
    const collection2 = [-10, -8, -8, -7, -2];
    const expected = [-10, -8, -8, -8, -7, -7, -5, -3, -2, -2];

    const result = merge(collection1, collection2);

    expect(result).toEqual(expected);
  });

  // test case 8 : รวมตัวเลขที่เป็นลบ,ซ้ำกัน,ขนาดไม่เท่ากัน
  test("test merge with negative, duplicate, unequal size", () => {
    const collection1 = [-6, -5, -4];
    const collection2 = [-7, -6, -5, -3, -1];
    const expected = [-7, -6, -6, -5, -5, -4, -3, -1];

    const result = merge(collection1, collection2);

    expect(result).toEqual(expected);
  });

  // test case 9 : รวมตัวเลขที่มีชุดของเลขที่ว่าง
  test("test merge with empty collection", () => {
    const collection1 = [];
    const collection2 = [2, 4, 7, 7, 8];
    const expected = [2, 4, 7, 7, 8];

    const result = merge(collection1, collection2);

    expect(result).toEqual(expected);
  });

  // test case 10 : รวมตัวเลขที่มีชุดของเลขที่ว่าง(ทั้ง 2 ชุด)
  test("test merge with empty collection (both sets)", () => {
    const collection1 = [];
    const collection2 = [];
    const expected = [];

    const result = merge(collection1, collection2);

    expect(result).toEqual(expected);
  });

  // test case 11 : รวมตัวเลขที่เป็นบวกและลบ(ทั้ง 2 ชุด),ไม่ซ้ำกัน,ขนาดเท่ากัน
  test("test merge with positive and negative (both sets), unique, equal size", () => {
    const collection1 = [-3, -1, 1, 3, 7];
    const collection2 = [-6, -4, -2, 8, 9];
    const expected = [-6, -4, -3, -2, -1, 1, 3, 7, 8, 9];

    const result = merge(collection1, collection2);

    expect(result).toEqual(expected);
  });

  // test case 12 : รวมตัวเลขที่เป็นบวกและลบ(ทั้ง 2 ชุด),ไม่ซ้ำกัน,ขนาดไม่เท่ากัน
  test("test merge with positive and negative (both sets), unique, unequal size", () => {
    const collection1 = [-8, -5, 2, 3];
    const collection2 = [-6, -4, 4, 7, 9];
    const expected = [-8, -6, -5, -4, 2, 3, 4, 7, 9];

    const result = merge(collection1, collection2);

    expect(result).toEqual(expected);
  });

  // test case 13 : รวมตัวเลขที่เป็นบวกและลบ(ทั้ง 2 ชุด),ซ้ำกัน,ขนาดเท่ากัน
  test("test merge with positive and negative (both sets), duplicate, equal sizes", () => {
    const collection1 = [-3, -1, 1, 3, 7];
    const collection2 = [-3, -2, -1, 7, 9];
    const expected = [-3, -3, -2, -1, -1, 1, 3, 7, 7, 9];

    const result = merge(collection1, collection2);

    expect(result).toEqual(expected);
  });

  // test case 14 : รวมตัวเลขที่เป็นบวกและลบ(ทั้ง 2 ชุด),ซ้ำกัน,ขนาดไม่เท่ากัน
  test("test merge with positive and negative (both sets), duplicate, unequal size", () => {
    const collection1 = [-8, -5, 7];
    const collection2 = [-5, -2, 6, 7];
    const expected = [-8, -5, -5, -2, 6, 7, 7];

    const result = merge(collection1, collection2);

    expect(result).toEqual(expected);
  });

  // test case 15 : รวมตัวเลขที่มีเลขศูนย์(ทั้ง 2 ชุด),และมีเลขอื่นไม่ซ้ำกัน,ขนาดเท่ากัน
  test("test merge with zero (both sets), and other numbers are unique, equal size", () => {
    const collection1 = [0, 0, 3, 4, 8];
    const collection2 = [0, 2, 6, 7, 9];
    const expected = [0, 0, 0, 2, 3, 4, 6, 7, 8, 9];

    const result = merge(collection1, collection2);

    expect(result).toEqual(expected);
  });

  // test case 16 : รวมตัวเลขที่มีเลขศูนย์(ทั้ง 2 ชุด),และมีเลขอื่นไม่ซ้ำกัน,ขนาดไม่เท่ากัน
  test("test merge with zero (both sets), and other numbers are unique, unequal size", () => {
    const collection1 = [0, 2, 6];
    const collection2 = [0, 4, 7, 8, 9];
    const expected = [0, 0, 2, 4, 6, 7, 8, 9];

    const result = merge(collection1, collection2);

    expect(result).toEqual(expected);
  });

  // test case 17 : รวมตัวเลขที่มีเลขศูนย์(ทั้ง 2 ชุด),และมีเลขอื่นซ้ำกัน,ขนาดเท่ากัน
  test("test merge with zero (both sets), and other numbers are duplicate, equal size", () => {
    const collection1 = [0, 0, 1, 4, 9];
    const collection2 = [0, 1, 6, 7, 9];
    const expected = [0, 0, 0, 1, 1, 4, 6, 7, 9, 9];

    const result = merge(collection1, collection2);

    expect(result).toEqual(expected);
  });

  // test case 18 : รวมตัวเลขที่มีเลขศูนย์(ทั้ง 2 ชุด),และมีเลขอื่นซ้ำกัน,ขนาดไม่เท่ากัน
  test("test merge with zero (both sets), and other numbers are duplicate, unequal size", () => {
    const collection1 = [0, 0, 4, 4, 7];
    const collection2 = [0, 6, 7];
    const expected = [0, 0, 0, 4, 4, 6, 7, 7];

    const result = merge(collection1, collection2);

    expect(result).toEqual(expected);
  });

  // test case 19 : รวมตัวเลขที่มีเลขศูนย์ เลขบวก เลขลบ(ทั้ง 2 ชุด),ซ้ำกัน,ขนาดเท่ากัน
  test("test merge with zero, positive, negative (both sets), duplicate, equal size", () => {
    const collection1 = [-2, -1, 0, 1, 3];
    const collection2 = [-2, 0, 1, 6, 7];
    const expected = [-2, -2, -1, 0, 0, 1, 1, 3, 6, 7];

    const result = merge(collection1, collection2);

    expect(result).toEqual(expected);
  });

  // test case 20 : รวมตัวเลขที่มีเลขศูนย์ เลขบวก เลขลบ(ทั้ง 2 ชุด),ซ้ำกัน,ขนาดไม่เท่ากัน
  test("test merge with zero, positive, negative (both sets), duplicate, unequal size", () => {
    const collection1 = [-4, 0, 3, 8, 9];
    const collection2 = [-4, 0, 8];
    const expected = [-4, -4, 0, 0, 3, 8, 8, 9];

    const result = merge(collection1, collection2);

    expect(result).toEqual(expected);
  });

  // test case 21 : รวมตัวเลขที่เป็นเลขศูนย์(ทั้ง 2 ชุด)
  test("test merge with zero", () => {
    const collection1 = [0, 0, 0, 0, 0];
    const collection2 = [0, 0, 0, 0, 0];
    const expected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    const result = merge(collection1, collection2);

    expect(result).toEqual(expected);
  });
});