const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349064721790";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_43_05_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMSxcbiAgICAgICAgODYsXG4gICAgICAgIDkxLFxuICAgICAgICA0NixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDgxLFxuICAgICAgICA0MyxcbiAgICAgICAgMixcbiAgICAgICAgMjAzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDcsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDM0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI2LFxuICAgICAgICA0LFxuICAgICAgICA2MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExNCxcbiAgICAgICAgODEsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1LFxuICAgICAgICA1NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODMsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDk4LFxuICAgICAgICAzOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1LFxuICAgICAgICAzMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjA4LFxuICAgICAgICA5MixcbiAgICAgICAgNDQsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODUsXG4gICAgICAgIDk0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTIxLFxuICAgICAgICAzOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDksXG4gICAgICAgIDYwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjAxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODgsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDg1LFxuICAgICAgICAxODAsXG4gICAgICAgIDUzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTYwLFxuICAgICAgICA3NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDY3LFxuICAgICAgICAyNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjksXG4gICAgICAgIDk5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDg0LFxuICAgICAgICA5OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTcyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkx4ZEJrVjNIcWxIS2g1dmttc1NRaGdlcDRxUGVxVlhlMUQwcFBQNWhkOUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImNGbjd0MXVJVFplNWpDMzctem9DcndcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWUyNWYzNzQtZmRkOS00ZDBlLTk3ZTgtOWZhY2Q0MjU1MTgwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY3LFxuICAgICAgMTIwLFxuICAgICAgMTk5LFxuICAgICAgMjQ5LFxuICAgICAgMTQ3LFxuICAgICAgMTk1LFxuICAgICAgODYsXG4gICAgICAxODQsXG4gICAgICAyMzYsXG4gICAgICAyOCxcbiAgICAgIDEzNyxcbiAgICAgIDIwMCxcbiAgICAgIDc3LFxuICAgICAgNjMsXG4gICAgICA2MixcbiAgICAgIDE4MCxcbiAgICAgIDUsXG4gICAgICAxNTcsXG4gICAgICAyMjksXG4gICAgICA0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzYsXG4gICAgICAyMCxcbiAgICAgIDc3LFxuICAgICAgMTM0LFxuICAgICAgMTAxLFxuICAgICAgMTE2LFxuICAgICAgMjMxLFxuICAgICAgMTcwLFxuICAgICAgMjEwLFxuICAgICAgMjAxLFxuICAgICAgNDAsXG4gICAgICAxNDUsXG4gICAgICAxNzYsXG4gICAgICAyNSxcbiAgICAgIDExNyxcbiAgICAgIDI2LFxuICAgICAgMjA5LFxuICAgICAgMTE4LFxuICAgICAgNjQsXG4gICAgICAxNDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRDJCN0ozNzdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNjQ3MjE3OTA6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJTb2RpcWNvbmNlcHRcIixcbiAgICBcImxpZFwiOiBcIjExMDM1OTU1MzgzMDk2MToxMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPREFoSm9DRUk3NDZNQUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkpwT1BFMDNDTjZydVMxQXlJQXh6R21FZE0wSFp5ZDFXeVhYcmdVY2tKblE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieUw0Qzl0WEFwbjBnTCtJNU5SL3VmL1RBcHFZd3JtVGFOd0lFS3VhTjh1S3lINGtWVENSUWladkdNSUtWL2lETW8vVGZ5TDNKTU5NTmhWWExCQ1psRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiT2JKVXNXd2JXSXY1anlyanVnNmxDTjZxS0diSlhveWpHNWNoRlBrRExkc2VxZ2IyTXkrYm40M3FiQ3M4VC9GaVRUUWJYc0Q2aFFuZ1AzQ21ScDlYQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA2NDcyMTc5MDoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NjU0OTc3OFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
