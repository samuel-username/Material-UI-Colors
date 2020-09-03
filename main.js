const colors =  {
  red: {
    main: '#f44336',
    variants: {
      a: ['#ffebee', '#ffcdd2', '#ef9a9a', '#e57373', '#ef5350', '#f44336', '#e53935', '#d32f2f', '#c62828', '#b71c1c'],
      b: ['#ff8a80', '#ff5252', '#ff1744', '#d50000']
    }
  },
  pink: {
    main: '#e91e63',
    variants: {
      a: ['#fce4ec', '#f8bbd0', '#f48fb1', '#f06292', '#ec4079', '#e91e63', '#d81b60', '#c2185b', '#ad1457', '#880e4f'],
      b: ['#ff80ab', '#ff4081', '#f50057', '#c51162']
    }
  },
  purple: {
    main: '#9c27b0',
    variants: {
      a: ['#f3e5f5', '#e1bee7', '#ce93d8', '#ba68c8', '#ab47bc', '#9c27b0', '#8e24aa', '#7b1fa2', '#6a1b9a', '#4a148c'],
      b: ['#ea80fb', '#e040fb', '#d500f9', '#aa00ff']
    }
  },
  deepPurple: {
    main: '#673ab7',
    variants: {
      a: ['#ede7f6', '#d1c4e9', '#b39ddb', '#9575cd', '#7e57c2', '#673ab7', '#5e35b1', '#512dab', '#4527a0', '#311b92'],
      b: ['#b388ff', '#7c4dff', '#651fff', '#6200ea']
    }
  },
  indigo: {
    main: '#3f51b5',
    variants: {
      a: ['#e8eaf6', '#c5cae9', '#9fa8da', '#7986cb', '#5c6bc0', '#3f51b5', '#3949ab', '#303f9f', '#283593', '#1a237e'],
      b: ['#8c9eff', '#536dfe', '#3d5afe', '#304ffe']
    }
  },
  blue: {
    main: '#2196f3',
    variants: {
      a: ['#e3f2fd', '#bbdefb', '#90caf9', '#64b5f6', '#42a5f5', '#2196f3', '#1e88e5', '#1976d2', '#1565c0', '#0d47a1'],
      b: ['#82b1ff', '#448aff', '#2979ff', '#2962ff']
    }
  },
  lightBlue: {
    main: '#03a9f4',
    variants: {
      a: ['#e1f5fe', '#b3e5fc', '#81d4fa', '#4fc3f7', '#29b6f6', '#03a9f4', '#039be5', '#0288d1', '#0277bd', '#0157ab'],
      b: ['#80d8ff', '#40c4ff', '#00b0ff', '#0091ea']
    }
  },
  cyan: {
    main: '#00bcd4',
    variants: {
      a: ['#e0f7fa', '#b2ebf2', '#80deea', '#4dd0e1', '#26c6da', '#00bcd4', '#00acc1', '#0097a7', '#00838f', '#006064'],
      b: ['#84ffff', '#18ffff', '#00e5ff', '#00b8d4']
    }
  },
  teal: {
    main: '#009688',
    variants: {
      a: ['#e0f2f1', '#b2dfdb', '#80cbc4', '#4db6ac', '#26a69a', '#009688', '#00897b', '#00796b', '#00695c', '#004d40'],
      b: ['#a7ffeb', '#64ffda', '#1de9b6', '#00bfa5']
    }
  },
  green: {
    main: '#4caf50',
    variants: {
      a: ['#e8f5e9', '#c8e6c9', '#a5d6a7', '#81c784', '#66bb6a', '#4caf50', '#43a047', '#388e3c', '#2e7d32', '#1b5e20'],
      b: ['#b9f6ca', '#69f0ae', '#00e676', '#00c853']
    }
  },
  lightGreen: {
    main: '#8bc34a',
    variants: {
      a: ['#f1f8e9', '#dcedc8', '#c5e1a5', '#aed581', '#9ccc65', '#8bc34a', '#7cb342', '#689f38', '#558b2f', '#33691e'],
      b: ['#ccff90', '#b2ff59', '#76ff03', '#64dd17']
    }
  },
  lime: {
    main: '#cddc39',
    variants: {
      a: ['#f9fbe7', '#f0f4c3', '#e6ee96', '#dce775', '#d4e157', '#cddc39', '#c0ca33', '#afb42b', '#9e9d24', '#827717'],
      b: ['#f4ff81', '#eeff41', '#c6ff00', '#aeea00']
    }
  },
  yellow: {
    main: '#ffeb3b',
    variants: {
      a: ['#fffdef', '#fff9c4', '#fff59d', '#fff176', '#ffee58', '#ffeb3b', '#fdd835', '#fbc02d', '#f9a825', '#f57f17'],
      b: ['#ffff8d', '#ffff00', '#ffea00', '#ffd600']
    }
  },
  amber: {
    main: '#ffc107',
    variants: {
      a: ['#fff8e1', '#ffecb3', '#ffe082', '#ffd54f', '#ffca2f', '#ffc107', '#ffb300', '#ffa000', '#ff8f00', '#ff6f00'],
      b: ['#ffe57f', '#ffd740', '#ffc400', '#ffab00']
    }
  },
  orange: {
    main: '#ff9800',
    variants: {
      a: ['#fff3e0', '#ffe0b2', '#ffcc80', '#ffb74d', '#ffa726', '#ff9800', '#fb8c00', '#f57c00', '#ef6c00', '#e65100'],
      b: ['#ffd180', '#ffab40', '#ff9100', '#ff6d00']
    }
  },
  deepOrange: {
    main: '#ff5722',
    variants: {
      a: ['#fbe9e7', '#ffccbc', '#ffab91', '#ff8a65', '#ff7043', '#ff5722', '#f4511e', '#e64a19', '#d84315', '#bf360c'],
      b: ['#ff9e80', '#ff6e40', '#ff3d00', '#dd2c00']
    }
  },
  brown: {
    main: '#795548',
    variants: {
      a: ['#efebe9', '#d7ccc8', '#bcaaa4', '#a1887f', '#8d6e63', '#795548', '#6d4c41', '#5d4031', '#4e342e', '#3e2723'],
      b: []
    }
  },
  grey: {
    main: '#9e9e9e',
    variants: {
      a: ['#fafafa', '#f5f5f5', '#eeeeee', '#e0e0e0', '#bdbdbd', '#9e9e9e', '#757575', '#616161', '#424242', '#212121'],
      b: []
    }
  },
  blueGrey: {
    main: '#607d8b',
    variants: {
      a: ['#eceff1', '#cfd8dc', '#b0bec5', '#90a4ae', '#78909c', '#607d8b', '#546e7a', '#455a64', '#37474f', '#263238'],
      b: []
    }
  },
  blackWhite: {
    main: '#000000',
    variants: { 
      a: ['#ffffff', '#000000'], 
      b: []
    }
  }
}

const colorArray = Object.keys(colors)
let buttonArray = [],
    subButtonArray = [], 
    closed = true,
    mainColor, radius;

const init = () => {
  const sidebarButton = document.querySelector('#sidebar-button'),
        sidebar = document.querySelector('#sidebar'),
        progressBars = document.querySelectorAll('#progress-bars-container progress'),
        current = document.querySelector('#current-theme-color'),
        variantAContainer = document.querySelector('#variant-a'),
        variantBContainer = document.querySelector('#variant-b')

  sidebarButton.addEventListener('click', controlSidebar);
  
  // Create theme buttons
  for (let color of colorArray) {
    if (color === 'blackWhite') break
    let button = document.createElement('div');
    button.classList.add('theme-buttons');
    button.style.backgroundColor = colors[color].main;
    button.dataset.colorCode = colors[color].main
    button.dataset.theme = color;
    button.addEventListener('click', changeTheme);
    sidebar.append(button);
    buttonArray.push(button);
  }
  
  for (let progressBar of progressBars) {
    progressBar.value = Math.floor(Math.random() * (parseInt(progressBar.max))) + 10;
  }
  
  function changeTheme() {
    changeCSSVar('value-color', this.dataset.colorCode);
    current.innerText = this.dataset.colorCode;
    determineActiveTheme(buttonArray)
    
    if (subButtonArray[0]) {
      // Reset subButtons
      for (let i = 0; i < subButtonArray.length; i++) {
        let subButton = subButtonArray[i];
        let variant = colors[this.dataset.theme].variants[subButton.dataset.type][i % 10]
        subButton.style.backgroundColor = variant || '#fff';
        subButton.dataset.colorCode = variant || '#fff';
      }
      determineActiveTheme(subButtonArray)
    } else {
      createSubButtons(variantAContainer, this);
      createSubButtons(variantBContainer, this, 'b');
    }
    
  }
  
  function createSubButtons(container, mainButton, variantType = 'a') {
    let colorArray2 = colors[mainButton.dataset.theme].variants[variantType];
    for (let variant of colorArray2) {
      let subButton = document.createElement('div');
      subButton.classList.add('theme-buttons');
      subButton.style.backgroundColor = variant;
      subButton.dataset.colorCode = variant;
      subButton.dataset.type = variantType;
      subButton.addEventListener('click', changeSubTheme)
      container.append(subButton);
      subButtonArray.push(subButton);
    }
  }
  
  function changeSubTheme() {
    changeCSSVar('value-color', this.dataset.colorCode || '#fff');
    current.innerText = this.dataset.colorCode || '';
    determineActiveTheme(subButtonArray)
  }
  
}

document.addEventListener('DOMContentLoaded', init);

function changeCSSVar(prop, value) {
  document.documentElement.style.setProperty(`--${prop}`, value);
}
  
function getCSSVar(prop) {
  return document.documentElement.style.getPropertyValue(`--${prop}`)
}

function determineActiveTheme(array) {
  for (let button of array) {
    let bool = getCSSVar('value-color') === button.dataset.colorCode;
    bool ? button.classList.add('active') : button.classList.remove('active');
  }
}

function controlSidebar() {
  const sidebar = document.querySelector('#sidebar');
  if (closed) {
    changeCSSVar('sidebar-width', '60px');
    changeCSSVar('gap', '1em');
    changeCSSVar('clipPath', `inset(0 0 0 100% round var(--border-radius)`);
    changeCSSVar('alpha', 0)
    sidebar.style.transition = 'var(--dur)';
    sidebar.style.transform = 'none';
    sidebar.style.width = '60px';
    closed = false;
  } else {
    changeCSSVar('sidebar-width', '0');
    changeCSSVar('gap', '0');
    changeCSSVar('clipPath', `inset(0 0 0 0 round var(--border-radius)`);
    changeCSSVar('alpha', 1)
    sidebar.style.transition = 'none';
    sidebar.style.width = '0';
    closed = true;
  }
  this.classList.toggle('bars')
}


