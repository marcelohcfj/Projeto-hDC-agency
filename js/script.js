$(document).ready(function() {

// Progress bar
    let containerA = document.getElementById("circleA");

    let circleA = new Progressbar.Circle(containerA, {

        color: '#64DAF9',
        strokeWidth: 8,
        duration: 10800,
        from: { color: '#AAA' },
        to: { color:'#65DAF9'},
    
        step: function(state, circle) {
            
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 60);


    
        }
    });

    circleA.animate(1.0);

});