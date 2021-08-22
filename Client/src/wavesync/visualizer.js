import Sync from "./sync";
import Sketch from "./sketch";

export default class Visualizer{
    constructor({volumeSmoothing=100,hidpi=true},fixed=false){
        this.sync = new Sync({volumeSmoothing},fixed)

        this.sketch = new Sketch({
            main: this.paint.bind(this),
            hidpi
        })

        this.watch()
        this.hooks()
    }

    watch(){
        this.sync.watch('active',val=>{
            if(val ===true){
                this.sketch.start()
            }else{
                this.sketch.stop()
            }
        })
    }

    hooks(){

    }

    paint(){
        
    }
}