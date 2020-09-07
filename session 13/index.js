var cloudElement = document.getElementById("cloud-div")

var animatedElem = cloudElement.animate(
    [{ transform: 'translate(-100px,0)' }, { transform: 'translate(100px,0)' }], 
    {
    duration: 3000,
    iterations: Infinity,
    // playbackRate: -4,
}
);

var planeElement = document.getElementById('plane-div')

var planeInAnimation = planeElement.animate(
    [
        { transform: 'translate(0,-400px)' }, 
        { transform: 'translate(600px,-200px)' },
        { transform: 'translate(800px,0px)' },
        { transform: 'translate(1000px,200px)' },
        { transform: 'translate(1200px,400px)' },
        { transform: 'translate(100%,400px)' }
    ],
    {
        duration: 10000,
    }
);