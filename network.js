const canvas=document.getElementById("network")
const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let nodes=[]

for(let i=0;i<40;i++){

nodes.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
vx:(Math.random()-0.5)*1,
vy:(Math.random()-0.5)*1

})

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height)

nodes.forEach(n=>{

n.x+=n.vx
n.y+=n.vy

if(n.x<0||n.x>canvas.width)n.vx*=-1
if(n.y<0||n.y>canvas.height)n.vy*=-1

ctx.fillStyle="#00ff9c"
ctx.fillRect(n.x,n.y,2,2)

})

for(let i=0;i<nodes.length;i++){

for(let j=i+1;j<nodes.length;j++){

let dx=nodes[i].x-nodes[j].x
let dy=nodes[i].y-nodes[j].y
let dist=Math.sqrt(dx*dx+dy*dy)

if(dist<120){

ctx.strokeStyle="rgba(0,255,156,0.1)"
ctx.beginPath()
ctx.moveTo(nodes[i].x,nodes[i].y)
ctx.lineTo(nodes[j].x,nodes[j].y)
ctx.stroke()

}

}

}

requestAnimationFrame(animate)

}

animate()