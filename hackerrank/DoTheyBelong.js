/*
 * Complete the 'pointsBelong' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER y1
 *  3. INTEGER x2
 *  4. INTEGER y2
 *  5. INTEGER x3
 *  6. INTEGER y3
 *  7. INTEGER xp
 *  8. INTEGER yp
 *  9. INTEGER xq
 *  10. INTEGER yq
 */

const isValidTriangle = (a, b, c) => {
  const ab = Math.sqrt(
      Math.pow(a[0] - b[0], 2) + Math.pow(b[1] - a[1], 2)
  );
  const ac = Math.sqrt(
      Math.pow(a[0] - c[0], 2) + Math.pow(c[1] - a[1], 2)
  );
  const bc = Math.sqrt(
      Math.pow(b[0] - c[0], 2) + Math.pow(c[1] - b[1], 2)
  );

  return ((ab + bc) > ac) &&
      ((bc + ac) > ab) &&
      ((ab + ac) > bc);
}

const sign = (a, b, c) => {
  return (a[0] - c[0]) * (b[1] - c[1]) - (b[0] - c[0]) * (a[1] - c[1]);
}

const pointInTriangle = (p, a, b, c) => {
  const d1 = sign(p, a, b);
  const d2 = sign(p, b, c);
  const d3 = sign(p, c, a);

  const has_neg = (d1 < 0) || (d2 < 0) || (d3 < 0);
  const has_pos = (d1 > 0) || (d2 > 0) || (d3 > 0);

  return !(has_neg && has_pos);
}

export function pointsBelong(x1, y1, x2, y2, x3, y3, xp, yp, xq, yq) {
  // Write your code here
  if (!isValidTriangle([x1, y1], [x2, y2], [x3, y3])) return 0;
  const pBelong = pointInTriangle([xp, yp], [x1, y1], [x2, y2], [x3, y3]);
  const qBelong = pointInTriangle([xq, yq], [x1, y1], [x2, y2], [x3, y3]);

  if (pBelong && !qBelong) return 1;
  if (!pBelong && qBelong) return 2;
  if (pBelong && qBelong) return 3;
  if (!pBelong && !qBelong) return 4;
}