// CLOSING THE TRIAL CALLOUT DIV
function cancelTrialCallout() {
    var trialCallout = document.querySelector('.trialCallout');
    trialCallout.style.display = 'none';
}





// 
// const checkbox = document.querySelector('#mycheckbox'),
// Productbox = document.querySelector('#myProductcheckbox'),
// Domainbox = document.querySelector('#myDomaincheckbox'),
// StoreNamebox = document.querySelector('#myStoreNamecheckbox'),
// Paymentbox = document.querySelector('#myPaymentcheckbox');
// const label = document.querySelector('label');

// checkbox.addEventListener('change', function() {
//     const svg1 = label.querySelector('svg:first-child');
//     const svg2 = label.querySelector('svg:nth-child(2)');

//     if (checkbox.checked) {
//     svg1.style.display = 'none';
//     svg2.style.display = 'inline-flex';
//     setTimeout(() => {
//         svg2.style.display = 'none';
//         svg1.style.display = 'none';
//     }, 3);
//     } else {
//     svg2.style.display = 'none';
//     svg1.style.display = 'inline-flex';
//     }
// });






// CHECKING AND UNCHECKING THE CHECKBOXES
const checkboxes = document.querySelectorAll('.accordion input[type="checkbox"]');
const label = document.querySelector('label');

// Function to handle checkbox change
function handleCheckboxChange(checkbox) {
    const svg1 = checkbox.nextElementSibling.querySelector('svg:first-child');
    const svg2 = checkbox.nextElementSibling.querySelector('svg:nth-child(2)');
    const svg3 = checkbox.nextElementSibling.querySelector('svg:last-child');
    if (checkbox.checked) {
        svg1.style.display = 'none';
        // svg2.style.display = 'inline-flex';
        svg2.style.opacity = '1';
        setTimeout(() => {
            // svg3.style.display = 'none'
            svg1.style.display = 'none';
            svg2.style.opacity = '0';
        }, 2000);
    } else {
        svg2.style.display = 'none';
        svg1.style.display = 'inline-flex';
        
    }
}

// Attach the event listener to each checkbox
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function () {
        handleCheckboxChange(checkbox);
    });
});

















// Productbox.addEventListener('change', function() {
//     const svg1 = label.querySelector('svg:first-child');
//     const svg2 = label.querySelector('svg:nth-child(2)');

//     if (Productbox.checked) {
//     svg1.style.display = 'none';
//     svg2.style.display = 'inline-flex';
//     setTimeout(() => {
//         svg2.style.display = 'none';
//         svg1.style.display = 'none';
//     }, 3);
//     } else {
//     svg2.style.display = 'none';
//     svg1.style.display = 'inline-flex';
//     }
// });

// Domainbox.addEventListener('change', function() {
//     const svg1 = label.querySelector('svg:first-child');
//     const svg2 = label.querySelector('svg:nth-child(2)');

//     if (Domainbox.checked) {
//     svg1.style.display = 'none';
//     svg2.style.display = 'inline-flex';
//     setTimeout(() => {
//         svg2.style.display = 'none';
//         svg1.style.display = 'none';
//     }, 3);
//     } else {
//     svg2.style.display = 'none';
//     svg1.style.display = 'inline-flex';
//     }
// });

// StoreNamebox.addEventListener('change', function() {
//     const svg1 = label.querySelector('svg:first-child');
//     const svg2 = label.querySelector('svg:nth-child(2)');

//     if (StoreNamebox.checked) {
//     svg1.style.display = 'none';
//     svg2.style.display = 'inline-flex';
//     setTimeout(() => {
//         svg2.style.display = 'none';
//         svg1.style.display = 'none';
//     }, 3);
//     } else {
//     svg2.style.display = 'none';
//     svg1.style.display = 'inline-flex';
//     }
// });

// Paymentbox.addEventListener('change', function() {
//     const svg1 = label.querySelector('svg:first-child');
//     const svg2 = label.querySelector('svg:nth-child(2)');

//     if (Paymentbox.checked) {
//     svg1.style.display = 'none';
//     svg2.style.display = 'inline-flex';
//     setTimeout(() => {
//         svg2.style.display = 'none';
//         svg1.style.display = 'none';
//     }, 3);
//     } else {
//     svg2.style.display = 'none';
//     svg1.style.display = 'inline-flex';
//     }
// });








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
        contentBody.style.height = '180px';
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
            contentBody.style.height = '180px';
            // console.log(currentAccordion);
            // accordionContent.style.backgroundColor = '#F7F7F7'

            currentOpenIndex = index;
        }
        else {
            item.classList.toggle('open');
            contentBody.style.header = item.classList.contains('open') ? '180px' : '0px';
            // console.log(currentAccordion);
            // accordionContent.style.backgroundColor = item.classList.contains('open') ? '#F7F7F7' : 'transparent';
        }
    })
})














document.addEventListener('DOMContentLoaded', function () {
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      let progress = 0;

      function updateProgress() {
        const progressDisplay = document.querySelector('.details span');
        const progressBar = document.querySelector('.progress-bar');
        progressDisplay.textContent = `${progress} / ${checkboxes.length}`;

        const percentage = (progress / checkboxes.length) * 100;
        progressBar.style.width = `${percentage}%`;
      }

      checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
          if (this.checked) {
            progress++;
          } else {
            progress--;
          }

          progress = Math.max(0, Math.min(progress, checkboxes.length));
          updateProgress();
        });
      });

      updateProgress();
    });