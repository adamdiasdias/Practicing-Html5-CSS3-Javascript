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

        pJS.fn.retinaInit = function(){

            if(pJS.retina_detect && window.devicePixelRatio > 1){
              pJS.canvas.pxratio = window.devicePixelRatio; 
              pJS.tmp.retina = true;
            } 
            else{
              pJS.canvas.pxratio = 1;
              pJS.tmp.retina = false;
            }
        
            pJS.canvas.w = pJS.canvas.el.offsetWidth * pJS.canvas.pxratio;
            pJS.canvas.h = pJS.canvas.el.offsetHeight * pJS.canvas.pxratio;
        
            pJS.particles.size.value = pJS.tmp.obj.size_value * pJS.canvas.pxratio;
            pJS.particles.size.anim.speed = pJS.tmp.obj.size_anim_speed * pJS.canvas.pxratio;
            pJS.particles.move.speed = pJS.tmp.obj.move_speed * pJS.canvas.pxratio;
            pJS.particles.line_linked.distance = pJS.tmp.obj.line_linked_distance * pJS.canvas.pxratio;
            pJS.interactivity.modes.grab.distance = pJS.tmp.obj.mode_grab_distance * pJS.canvas.pxratio;
            pJS.interactivity.modes.bubble.distance = pJS.tmp.obj.mode_bubble_distance * pJS.canvas.pxratio;
            pJS.particles.line_linked.width = pJS.tmp.obj.line_linked_width * pJS.canvas.pxratio;
            pJS.interactivity.modes.bubble.size = pJS.tmp.obj.mode_bubble_size * pJS.canvas.pxratio;
            pJS.interactivity.modes.repulse.distance = pJS.tmp.obj.mode_repulse_distance * pJS.canvas.pxratio;
        
          };
        
        
        
             
          pJS.fn.canvasInit = function(){
            pJS.canvas.ctx = pJS.canvas.el.getContext('2d');
          };
        
          pJS.fn.canvasSize = function(){
        
            pJS.canvas.el.width = pJS.canvas.w;
            pJS.canvas.el.height = pJS.canvas.h;
        
            if(pJS && pJS.interactivity.events.resize){
        
              window.addEventListener('resize', function(){
        
                  pJS.canvas.w = pJS.canvas.el.offsetWidth;
                  pJS.canvas.h = pJS.canvas.el.offsetHeight;
        
                  if(pJS.tmp.retina){
                    pJS.canvas.w *=pJS.canvas.pxratio;
                    pJS.canvas.h *=pJS.canvas.pxratio;
                  }


                  pJS.canvas.el.width = pJS.canvas.w;
                  pJS.canvas.el.height = pJS.canvas.h;

                  if(!pJS.particles.move.enable){
                      pJS.fn.particlesEmpty();
                      pJS.fn.particlesCreate();
                      pJS.fn.particlesDraw();
                      pJS.fn.vendors.densityAutoParticles();
                }

                pJS.fn.vendors.densityAutoParticles();

                 });
                 
                 }

            };

            pJS.fn.particles = function(){
                pJS.canvas.ctx.fillRect(0,0, pJS.canvas.w, pJS.canvas.h);
            };

            pJS.fn.canvasClear = function (){
                pJS.canvas.ctx.clearRect(0,0,) 
            }

            }
    
                 