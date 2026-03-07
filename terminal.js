class Terminal {

constructor(){

this.terminal = document.getElementById("terminal")
this.input = document.getElementById("commandInput")

this.firewall = 100
this.satellite = false

this.boot()

this.input.addEventListener("keydown",(e)=>{

if(e.key==="Enter"){

this.run(this.input.value)
this.input.value=""

}

})

}

boot(){

this.print("Initializing Orbital Cyber Command...")
this.print("Loading modules...")
this.print("Firewall Status: ACTIVE")
this.print("Type 'help' to view commands")
this.print("")

}

print(text){

const line=document.createElement("div")
line.className="terminal-line"
line.textContent=text

this.terminal.appendChild(line)

this.terminal.scrollTop=this.terminal.scrollHeight

}

run(cmd){

const command=cmd.trim().toLowerCase()

this.print("> "+command)

switch(command){

case "help":
this.help()
break

case "scan":
this.scan()
break

case "decrypt":
this.decrypt()
break

case "satellite":
this.connectSatellite()
break

case "breach":
this.breach()
break

case "firewall":
this.firewallStatus()
break

case "status":
this.status()
break

case "clear":
this.clear()
break

default:
this.print("Unknown command")

}

}

help(){

this.print("COMMAND LIST")
this.print("help")
this.print("scan")
this.print("decrypt")
this.print("satellite")
this.print("breach")
this.print("firewall")
this.print("status")
this.print("clear")

}

scan(){

this.print("Scanning network...")

setTimeout(()=>{

this.print("192.168.1.1 ACTIVE")

},800)

setTimeout(()=>{

this.print("10.0.0.2 FIREWALLED")

},1500)

setTimeout(()=>{

this.print("172.16.0.5 ACTIVE")

},2200)

}

decrypt(){

this.print("Decrypting packet...")

setTimeout(()=>{

this.print("Bypassing encryption")

},1200)

setTimeout(()=>{

this.print("ACCESS GRANTED")

},2500)

}

connectSatellite(){

if(this.satellite){

this.print("Satellite already connected")
return

}

this.print("Connecting to orbital satellite...")

setTimeout(()=>{

this.print("Satellite LINK ESTABLISHED")

this.satellite=true

},2000)

}

breach(){

this.print("Launching intrusion...")

setTimeout(()=>{

let dmg=Math.floor(Math.random()*20)+10

this.firewall-=dmg

if(this.firewall<0) this.firewall=0

this.print("Firewall damage "+dmg+"%")

},1500)

}

firewallStatus(){

this.print("Firewall level "+this.firewall+"%")

}

status(){

this.print("SYSTEM STATUS")

this.print("Satellite: "+(this.satellite?"ONLINE":"OFFLINE"))

this.print("Firewall: "+this.firewall+"%")

}

clear(){

this.terminal.innerHTML=""

}

}

window.onload=()=>{

new Terminal()

}