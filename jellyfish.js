
function jellySwim(){
    let jellyfish = document.createElement('img')
    jellyfish.src = './assets/jellyfish.png'
    jellyfish.style.position = 'fixed'
    document.body.append(jellyfish)
    jellyfish.style.height=100+'px'
    x=200
    y=200

    async function right(time){
        let startSwim = setInterval(swimRight,50)     
        function swimRight(){
            if(x<700){
                x=x+20
                jellyfish.style.left = x +'px'
            }else{x===700}
        }     
        await stop(time)
        clearInterval(startSwim)
    }   
        
    async function left(time){
        let startSwim = setInterval(swimLeft,50) 
        function swimLeft(){
            if(x>0){
                x=x-20
                jellyfish.style.left = x +'px'
            }else{x===0}
        } 
        await stop(time)
        clearInterval(startSwim)
    }  
        
    async function down(time){
        let startSwim = setInterval(swimDown,50) 
        function swimDown(){
            if(y<280){
                y=y+20
                jellyfish.style.top = y +'px'
            }else{y===280}
        }     
        await stop(time)
        clearInterval(startSwim)
    }   
        
    async function up(time){
        let startSwim = setInterval(swimUp,50) 
        function swimUp(){
            if(y>0){
                y=y-20
                jellyfish.style.top = y +'px'
            }else{y===0}
        }  
        await stop(time)
        clearInterval(startSwim)
    }   
        
    function stop(time){
        return new Promise(resolve => {
            setTimeout(resolve, time)
        })  
    }
                        
    let killAudio=document.querySelector("#audioDeath")
        
    function clickKill(creature){
        function kill(){
            creature.remove()
            killAudio.play()
            scoreCount.push(300)
            score=0
            scoreCount.forEach(value =>{
                score+=value
            })
            let totalScore=score
            para.innerText=totalScore
            document.getElementById('scoreCount').appendChild(para)
        }
        creature.addEventListener('click', kill)
    }
    


    async function route2(){
    down(1000)
    left(1000)
    await right(1500)
    await up(1000)
    await down(1000)
    right(1000)
    down(1000)
    await right(500)
    await up(500)
    await left(1500)
    await down (500)
    }
      
    
    async function jellyCombo(){
        route1()
        clickKill(jellyfish)
    }

    jellyCombo()
}