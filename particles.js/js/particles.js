var  pJS = function(tag_id, params){
    
    var canvas_el = document.querySelector('#'+tag_id+' > .partcles-js-canvas-el');

    this.pJS = { 
        canvas: {
            el: canvas_el,
            w: canvas_el.offsetWidth,
            h: canvas_el.offsetWidth
        },
        particles: {
         number: {
          value: 400,
           density:{
             enable: true,
             value_area:800
           }
        },
        color: {
            value: '#fff'
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#ff000000'
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: '',
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 1,
            random: false,
            anim: {
             enable: false,
             speed: 2,
             opacity_min: 0,
             sync: false
           }
        },
        size: {
            value: 20,
            random: false,
            anim: {
                
            }
        }
        }
    }
}