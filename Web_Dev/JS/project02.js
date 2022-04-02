const imgbox = document.querySelector('.imgbox');
const blackboxes = document.getElementsByClassName('blackbox');

imgbox.addEventListener('dragstart', (e) => {
    console.log("drag-start has been triggered");
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className += ' hide'; //to hide it only when everything is over
    }, 0);
});

imgbox.addEventListener('dragend', (e) => {
    console.log("drag-end has been triggered");
    e.target.className = 'imgbox';
});

for (blackbox of blackboxes) {
    blackbox.addEventListener('dragover', (e) => {
        e.preventDefault(); //we bydefault cant drop while doing dragover...
    })
    blackbox.addEventListener('dragenter', (e) => {
        e.target.className += ' dashed';
    })
    blackbox.addEventListener('dragleave', (e) => {
        e.target.className = 'blackbox';
    })
    blackbox.addEventListener('drop', (e) => {
        e.target.append(imgbox); //to append the imgbox when dropped...
    })
}