
let used = false;

setInterval(() => {
    let styleElement = document.createElement('style');
    styleElement.innerText = `
        * {
            width: 70%
        }`
        if(Math.random() > .5 && !used) {
            used = true;
            document.body.append(styleElement);
        }
}, 60000);