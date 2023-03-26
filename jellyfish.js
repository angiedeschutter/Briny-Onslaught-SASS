
function jellySwim(){
    
    let jellyfish = document.createElement('img')
    jellyfish.src = './assets/jellyfish.png'
    jellyfish.style.position = 'absolute'
    document.body.append(jellyfish)
    x=0
    y=0

    async function right(time){
        let stopSwim = setInterval(swimRight,100) 
        
        function swimRight(){
            x=10+x
            jellyfish.style.left = x +'px'
        }  
        await stop(time)
        clearInterval(stopSwim)
        }   
        
        async function left(time){
        let stopSwim = setInterval(swimLeft,100) 
        function swimLeft(){
            x=x-10
            jellyfish.style.left = x +'px'
        }  
        await stop(time)
        clearInterval(stopSwim)
        }  
        
        async function down(time){
        let stopSwim = setInterval(swimDown,200) 
        function swimDown(){
            y=y+20
            jellyfish.style.top = y +'px'
        }  
        await stop(time)
        clearInterval(stopSwim)
        }   
        
        async function up(time){
        let stopSwim = setInterval(swimUp,200) 
        function swimUp(){
            y=y-20
            jellyfish.style.top = y +'px'
        }  
        await stop(time)
        clearInterval(stopSwim)
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
                scoreCount.push(200)
                score=0
                scoreCount.forEach(value =>{
                    score+=value
                })
                let totalScore=score
                para.innerText=totalScore
                document.getElementById('scoreCount').appendChild(para)
                console.log(score)
            }
            
            creature.addEventListener('click', kill)
        }
        
            async function routeJ(){
                down(5000)
                await up(1200)
                await left(300)
                await up(100)
                down(100)
                await down(6000)
                await right(400)
                await up(500)
                left(900)
                }       
    
             routeJ()
             clickKill(jellyfish)
    
    
            }