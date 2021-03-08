export const HSL = {
  rotation(H, S, L, count) {
    const increment = (1 / count) * 360;
    const colors = [];

    for (let i = 0; i < count; i++) {
      const colorH = Math.floor(H + i * increment) % 360;
      colors.push(`hsl(${colorH}deg, ${S}%, ${L}%)`);
    }

    return colors;
  },
};
