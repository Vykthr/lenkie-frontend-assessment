String.prototype.capitalize = function(string = '') {
    const str = string.toLowerCase();
    const arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2 = arr.join(" ");
    return str2
}

export const sliderResponsiveProp = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
};

export const defaultPicture = `${process.env.PUBLIC_URL}/assets/img/default-image.jpg`;

export const capitalize = (string = "") => {
    return String().capitalize(string);
} 

export const formatNumber = (num, precision = 0) => {
    const map = [
      { suffix: 'T', threshold: 1e12 },
      { suffix: 'B', threshold: 1e9 },
      { suffix: 'M', threshold: 1e6 },
      { suffix: 'K', threshold: 1e3 },
      { suffix: '', threshold: 1 },
    ];
  
    const found = map.find((x) => Math.abs(num) >= x.threshold);
    if (found) {
      const formatted = (num / found.threshold).toFixed(precision) + found.suffix;
      return formatted;
    }
  
    return num;
}

export const formatTime = (num) => {
    const minutes = Math.floor(num / 60);

    const seconds = num - (minutes * 60);
  
    return `${minutes}:${String(seconds).padStart(2, '0')}`;
}