/* global $, Phaser */
//Possible to not use jQuery here -- just replace $(function(){}) with document.ready or window.load

$(function(){
    const component = {
        model: {
            init() {
                component.view.init();
            }
        },
        view: {
            /* props */
            width: $(window).innerWidth() * window.devicePixelRatio,
            height: $(window).innerHeight() * window.devicePixelRatio,
            game: null,
            boot: {
                preload() {
                    
                },
                create() {
                    this.game.state.start("load");
                }
            },
            load: {
                preload() {
                
                },
                create() {
                    this.game.state.start("menu");
                }
            }, 
            menu: {
                preload() {
                    
                },
                create() {
                    
                },
                update() {
                    //this.game.state.start("play");
                },
                render() {
                    
                }
            },
            play: {
                preload() {
                    
                },
                create() {
                    
                },
                update() {
                    //this.game.state.start("menu");
                },
                render() {
                    
                }
            },
            /* funcs */
            init() {
                this.game = new Phaser.Game(this.width, this.height, Phaser.AUTO, 'game', {preload(){}, create(){}, update(){}, render(){}}, true);
                this.game.state.add("boot", this.boot);
                this.game.state.add("load", this.load);
                this.game.state.add("menu", this.menu);
                this.game.state.add("play", this.play);
                
                this.game.state.start("boot");
                
                this.listen();
            },
            listen() {
                $(window).resize(function(e){
                    this.width = $(window).innerWidth() * window.devicePixelRatio;
                    this.height = $(window).innerHeight() * window.devicePixelRatio;
                    this.game.width = this.width;
                    this.game.height = this.height;
                }.bind(this));
            },
           
        },
        init() {
            this.model.init();
        }
    }
    component.init();
});