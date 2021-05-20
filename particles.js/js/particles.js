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
                enable: false,
                speed: 20,
                size_min: 0,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 100,
            color: '#fff',
            opacity: 1,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direciton: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX:3000,
                rotateY:3000
            }
          },
          array:[]
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclik: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
              grab:{
                    distance: 100,
                    line_linked: {
                        opacity:1
                    }
                },
                bubble:{
                    distance: 200,
                    size: 80,
                    duration: 0.4
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push:{
                    particles_nb: 4
                },
                remove:{
                    particles_nb: 2
                }
            },
            mouse:{
          },
          retina_detect: false,
          fn: {
              interact:{},
              mods: {},
              vendors:{}
          },
          tmp: {}
        };

        var pJS = this.pJS;


        if(params){
            Object.deepExtend(pJS, params);
        }

        pJS.tmp.obj = {
            size_value: pJS.particles.size.value,
            size_anim_speed: pJS.particles.size.anim.speed,
            move_speed: pJS.particles.move.speed,
            line_linked_distance: pJS.particles.line_linked.distance,
            line_linked_width: pJS.particles.line_linked.width,
            mode_grab_distance: pJS.interactivity.modes.grab.distance,
            mode_bubble_distance: pJS.interactivity.modes.bubble.distance,
            mode_bubble_size: pJS.interactivity.modes.bubble.size,
            mode_repulse_distance: pJS.interactivity.modes.repulse.distance
          };
                
    
        pJS.fn.canvasInit = function(){
            pJS.canvas.ctx = pJS.canvas.el.getContext('2d');

        };

        pJS.fn.canvasSize = function(){

            pJS.canvas.el.width = pJS.canvas.w;
            pJS.canvas.el.height = pJS.canvas.h;

            if(pJS && pJS.interactivity.events.resize){

                window.addEventListener('resize', function() {

                    pJS.canvas.w = pJS.canvas.el.offsetWidth;
                    pJS.canvas.w = pJS.canvas.el.offsetWidth;

                    if(pJS.tmp.retina){
                        pJS.canvas.w *= pJS.canvas.pxratio;
                        pJS.canvas.h *= pJS.canvas.pxratio;
                    }

                    pJS.canvas.el.width = pJS.canvas.w;
                    pJS.canvas.el.height = pJS.canvas.h;

                    if(!pJS.particles.move.enable){
                        pJS.fn.particlesEmpty();
                        pJS.fn.particlesCreate();
                        pJS.fn.particlesDraw();
                        pJS
                    }
                }
            }
        }