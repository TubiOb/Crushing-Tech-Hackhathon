// CLOSING THE TRIAL CALLOUT DIV
function cancelTrialCallout() {
    var trialCallout = document.querySelector('.trialCallout');
    trialCallout.style.display = 'none';
}





// 
// document.addEventListener('DOMContentLoaded', function () {
//   // Select all elements with the class "segment-head"
//   const segmentHeads = document.querySelectorAll('.segment-head svg');

//   // Define the SVGs
//   const initialSVG = `
//     <circle cx="16" cy="16" r="12" stroke="#616161" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 6" />
//   `;

//   const intermediateSVG = `
//     <path
//       d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 
//       11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 
//       11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2"
//       stroke="#000"
//       stroke-width="2.5"
//       stroke-linecap="round"
//       stroke-linejoin="round"
//     />
//   `;

//   const checkedSVG = `
//     <circle cx="12" cy="12" r="12" fill="#000"></circle>
//     <path
//       d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 
//       13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 
//       8.13577 16.8833 8.13577 17.2738 8.52629Z"
//       fill="#fff"
//     ></path>
//   `;

//   // Helper function to handle hover animation
//   function handleHoverAnimation(svgElement) {
//     svgElement.innerHTML = intermediateSVG;
//     void svgElement.offsetWidth;
//     svgElement.style.transition = 'transform 0.2s ease-in-out';
//     svgElement.style.transform = 'rotate(360deg)';
//   }

//   // Helper function to reset hover animation
//   function resetHoverAnimation(svgElement) {
//     svgElement.style.transition = '';
//     svgElement.style.transform = '';
//   }

// //   // Helper function to handle click event
// //   function handleClickAnimation(svgElement) {
// //     // svgElement.innerHTML = checkedSVG;
// //     const isIntermediate = svgElement.innerHTML === intermediateSVG;
// //     svgElement.innerHTML = isIntermediate ? initialSVG : intermediateSVG;
// //   }

//     // Helper function to handle click event
//     // let isOn = false;
//     function handleClickAnimation(svgElement) {
//         // isOn = !isOn;

//       const isInitial = svgElement.innerHTML === initialSVG;
//     svgElement.innerHTML = isInitial ? checkedSVG : initialSVG;
//     }


//   // Iterate over each segment head
//   segmentHeads.forEach((svgElement) => {
//     svgElement.addEventListener('mouseenter', function () {
//     //   const svgElement = segmentHead.querySelector('svg');
//       handleHoverAnimation(svgElement);
//     });

//     svgElement.addEventListener('mouseleave', function () {
//     //   const svgElement = segmentHead.querySelector('svg');
//       resetHoverAnimation(svgElement);
//     });

    
//     svgElement.addEventListener('click', function () {
//     //   const svgElement = segmentHead.querySelector('svg');
//       handleClickAnimation(svgElement);
//     });
//   });
// });



const checkbox = document.querySelector('#mycheckbox');
    const label = document.querySelector('label');

    checkbox.addEventListener('change', function() {
      const svg1 = label.querySelector('svg:first-child');
      const svg2 = label.querySelector('svg:nth-child(2)');

      if (checkbox.checked) {
        svg1.style.display = 'none';
        svg2.style.display = 'inline-block';
        setTimeout(() => {
          svg2.style.display = 'block';
          svg1.style.display = 'none';
          svg2.style.display = 'none';
        }, 3);
      } else {
        svg2.style.display = 'none';
        svg1.style.display = 'inline-block';
      }
    });





//  TOGGLING THE ACCORDION
document.addEventListener('DOMContentLoaded', function () {
    const controlButton = document.querySelector('.control');
    const accordion = document.querySelector('.accordion');

    controlButton.addEventListener('click', function() {
        accordion.classList.toggle('open');

        const svgElement = controlButton.querySelector('svg');

        if (accordion.classList.contains('open')) {
            svgElement.innerHTML = `<path fill-rule="evenodd" clip-rule="evenodd" d="M15.0303 12.2803C14.7374 12.5732 14.2626 12.5732 
            13.9697 12.2803L10.5 8.81066L7.03033 12.2803C6.73744 12.5732 6.26256 12.5732 5.96967 12.2803C5.67678 11.9874 5.67678 11.5126 
            5.96967 11.2197L9.96967 7.21967C10.2626 6.92678 10.7374 6.92678 11.0303 7.21967L15.0303 11.2197C15.3232 11.5126 15.3232 11.9874 
            15.0303 12.2803Z" fill="#000"/>`;
        }
        else {
            svgElement.innerHTML = `<path fill-rule="evenodd" clip-rule="evenodd" d="M6.21967 8.46967C6.51256 8.17678 6.98744 
                  8.17678 7.28033 8.46967L10.75 11.9393L14.2197 8.46967C14.5126 8.17678 14.9874 8.17678 
                  15.2803 8.46967C15.5732 8.76256 15.5732 9.23744 15.2803 9.53033L11.2803 13.5303C10.9874 
                  13.8232 10.5126 13.8232 10.2197 13.5303L6.21967 9.53033C5.92678 9.23744 5.92678 8.76256 
                  6.21967 8.46967Z" fill="#000"/>`
        }

        void svgElement.offsetWidth;

        svgElement.style.transition = 'fill 6s linear ease-in-out';
    });
});





// ACCORDION
const accordionContent = document.querySelectorAll('.accordion-content');
let currentOpenIndex = 0;

accordionContent.forEach((item, index) => {
    let header = item.querySelector('.segment-head');
    let contentBody = item.querySelector('.segment-body');

    if (index === currentOpenIndex) {
        item.classList.add('open');
        contentBody.style.height = '150px';
        // accordionContent.style.backgroundColor = '#F7F7F7'
    }
    else {
        contentBody.style.height = '0px'
    }

    header.addEventListener('click', () => {
        if (index !== currentOpenIndex) {
            let currentAccordion = accordionContent[currentOpenIndex];
            currentAccordion.classList.remove('open');
            currentAccordion.querySelector('.segment-body').style.height = '0px'

            item.classList.add('open');
            contentBody.style.height = '150px';
            // console.log(currentAccordion);
            // accordionContent.style.backgroundColor = '#F7F7F7'

            currentOpenIndex = index;
        }
        else {
            item.classList.toggle('open');
            contentBody.style.header = item.classList.contains('open') ? '150px' : '0px';
            // console.log(currentAccordion);
            // accordionContent.style.backgroundColor = item.classList.contains('open') ? '#F7F7F7' : 'transparent';
        }
    })
})