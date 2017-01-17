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
            width: $(window).innerWidth(),
            height: $(window).innerHeight(),
            game: null,
            boot: {
                preload() {
                    
                },
                create() {
                    this.game.state.start("play");
                }
            },
            load: {
                preload() {
                    
                },
                create() {
                    
                }
            }, 
            menu: {
                preload() {
                    
                },
                create() {
                    
                },
                update() {
                    
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
                    this.width = $(window).innerWidth();
                    this.height = $(window).innerHeight();
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