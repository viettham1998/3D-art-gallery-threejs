export const paintingData = [
  // Front Wall
  ...Array.from({ length: 8 }, (_, i) => ({
    // Array.from creates an array from an array-like object. The first parameter is the array-like object. The second parameter is a map function that is called for each element in the array-like object. The map function takes two parameters: the element and the index. The map function returns the value that will be added to the new array. In this case, we are returning an object with the painting data. `_` is a placeholder for the element. We don't need it because we are not using the element. `i` is the index. We use it to set the painting number.
    imgSrc: `Images/ICAMM24_${i + 1}.jpg`, // `i + 1` is the painting number. We add 1 to the index because the index starts at 0 but we want the painting numbers to start at 1.
    width: 4, // width of the painting
    height: 6, // height of the painting
    position: { x: -17.5 + 5 * i, y: 2, z: -19.5 }, // position of the painting
    rotationY: 0, // rotation of the painting
    info: {
      // info about the painting
      title: `Van Gogh ${i + 1}`,
      artist: 'Vincent van Gogh',
      description: `This is one of the masterpieces by Vincent van Gogh, showcasing his unique style and emotional honesty. Artwork ${
        i + 1
      } perfectly encapsulates his love for the beauty of everyday life.`,
      year: `Year ${i + 1}`,
      link: 'https://hnkh.hcmus.edu.vn/',
    },
  })),
  // Back Wall
  ...Array.from({ length: 8 }, (_, i) => ({
    imgSrc: `Images/ICAMM24_${i + 9}.jpg`,
    width: 4,
    height: 6,
    position: { x: -17.5 + 5 * i, y: 2, z: 19.5 },
    rotationY: Math.PI,
    info: {
      title: `Van Gogh ${i + 5}`,
      artist: 'Vincent van Gogh',
      description: `Artwork ${
        i + 5
      } by Vincent van Gogh is an exceptional piece showcasing his remarkable ability to capture emotion and atmosphere.`,
      year: `Year ${i + 5}`,
      link: 'https://hnkh.hcmus.edu.vn/',
    },
  })),
  // Left Wall
  ...Array.from({ length: 9 }, (_, i) => ({
    imgSrc: `Images/ICAMM24_${i + 17}.jpg`,
    width: 4,
    height: 6,
    position: { x: -19.5, y: 2, z: -17.2 + 4.3 * i },
    rotationY: Math.PI / 2,
    info: {
      title: `Van Gogh ${i + 9}`,
      artist: 'Vincent van Gogh',
      description: `With its striking use of color and brushwork, Artwork ${
        i + 9
      } is a testament to Van Gogh's artistic genius.`,
      year: `Year ${i + 9}`,
      link: 'https://hnkh.hcmus.edu.vn/',
    },
  })),
  // Right Wall
  ...Array.from({ length: 9 }, (_, i) => ({
    imgSrc: `Images/ICAMM24_${i + 26}.jpg`,
    width: 4,
    height: 6,
    position: { x: 19.5, y: 2, z: -17 + 4.3 * i },
    rotationY: -Math.PI / 2,
    info: {
      title: `Van Gogh ${i + 13}`,
      artist: 'Vincent van Gogh',
      description: `Artwork ${
        i + 13
      } is a captivating piece by Vincent van Gogh, reflecting his distinctive style and deep passion for art.`,
      year: `Year ${i + 13}`,
      link: 'https://hnkh.hcmus.edu.vn/',
    },
  })),
];
