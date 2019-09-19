const Heroku = require('heroku-client')
// 
const main_heroku_token=process.env.main_heroku_token;
const heroku = new Heroku({ token: main_heroku_token })
var appid=process.env.main_heroku_appid;

function doMashinTapan(shutdown) {
    var quantity=0
    if(shutdown==false || !shutdown){
        quantity=1
        try {
            heroku.patch(`/apps/${appid}/formation`,{body:{updates:[{"quantity":quantity,"size":"Free","type":"worker"}]}})
            .then(data => {
                    console.log('start remote done');
            })
            .catch(error => {
                    console.log(error);
            })      
        } catch (error) {
            console.log(error);
        }
    }
    else{
        try {
            heroku.patch(`/apps/${appid}/config-vars`,{body:{'turnoff':'ok'}})
            .then(data => {
                    console.log('turnoff remote done');
            })
            .catch(error => {
                    console.log(error);
            })      
        } catch (error) {
            console.log(error);
        }
    }
}

const second_this_heroku_token=process.env.second_this_heroku_token;
function ozumuSondur() {
    const myHeroku = new Heroku({ token: second_this_heroku_token })
    try {
        myHeroku.patch('/apps/mashintap/formation',{body:{updates:[{"quantity":0,"size":"Free","type":"worker"}]}})
        .then(data => {
                console.log('ozun sondurdum done');
        })
        .catch(error => {
                console.log(error);
        })      
    } catch (error) {
        console.log(error);
    }
}

function resetConfigVars() {
    const myHeroku = new Heroku({ token: second_this_heroku_token })
    try {
        myHeroku.patch('/apps/mashintap/config-vars',{body:{'turnoff':' '}})
        .then(data => {
                console.log('resetConfigVars done');
        })
        .catch(error => {
                console.log(error);
        })      
    } catch (error) {
        console.log(error);
    }
}

const botqiymetversin=process.env.botqiymetversin
const email=process.env.email
function botCanStartAndEmailConfigVars() {
    var canBidPrices='false'
    if(String(botqiymetversin).toLowerCase()=='ok' || String(botqiymetversin).toLowerCase()=='true'){canBidPrices='true'}
    else{canBidPrices='false'}
    var receiver_email='fuad_tm@hotmail.com'
    if(String(email).toLowerCase()=='fuad_tm@hotmail.com' || String(email).trim().length==0){receiver_email='fuad_tm@hotmail.com'}
    else{receiver_email=email}
    try {
        heroku.patch(`/apps/${appid}/config-vars`,{body:{'botqiymetversin': canBidPrices,'receiver_email':receiver_email}})
        .then(data => {
                console.log('resetConfigVars done');
        })
        .catch(error => {
                console.log(error);
        })      
    } catch (error) {
        console.log(error);
    }
}

let logUrl=-1
var request = require("request");
function catchAndFixMemoryLeak(){
    if(logUrl<-1){
        logUrl+=1
        return
    }
    if(logUrl==-1){
        try {
            heroku.post(`/apps/${appid}/log-sessions`,{body:{"dyno": "worker.1","lines": 100,"source": "app","tail": false}})
            .then(data => {
                    // console.log(data);
                    logUrl=data['logplex_url']
                    // console.log('logUrl',logUrl);
            })
            .catch(error => {
                    console.log(error);
            })
        } catch (error) {
            console.log(error);
        }
    }
    else{
        request({
            uri: logUrl,
          }, function(error, response, body) {
            //   Error R14 (Memory quota exceeded)
              if(body.indexOf('Memory quota exceeded')>-1){
                try {
                    heroku.delete(`/apps/${appid}/dynos`)
                    .then(data => {
                            // console.log(data);
                            console.log('restart done');
                    })
                    .catch(error => {
                            console.log(error);
                    })
                } catch (error) {
                    console.log(error);
                }
                logUrl=-5
              }
              else{logUrl=-1}
          });
    }
}

function intervalFuksiam() {
    var minutes = 1, the_interval = minutes * 10 * 1000;
    setInterval(function() {
      if(canCallOtherFunc){
        // canCallOtherFunc=false
        schedule()
      }
      // else{
      //   setTimeoutCheck()
      // }
      // do your stuff here
    }, the_interval);    
}

function schedule() {
    var sondurumYaYox=process.env.turnoff
    sondurumYaYox=String(sondurumYaYox)
    if(sondurumYaYox && (sondurumYaYox.toLowerCase()=='ok' || sondurumYaYox.trim().length>0)){
        continueInterval=false
        doMashinTapan(true)
        resetConfigVars()
        ozumuSondur()
    }
    catchAndFixMemoryLeak()
}

var continueInterval=true
function main() {
    botCanStartAndEmailConfigVars()
    doMashinTapan(false)
    var minutes = 1, the_interval = minutes * 10 * 1000;
    setInterval(function() {
        if(continueInterval)schedule();
    }, the_interval); 
}

// process.on('SIGTERM', function () {
//     // continueInterval=false
//     // doMashinTapan(true)
//     // resetConfigVars()
//     // // ozumuSondur()
//     heroku.patch(`/apps/${appid}/formation`,{body:{updates:[{"quantity":0,"size":"Free","type":"worker"}]}})
//     .then(data => {
//             console.log('done');
//     })
//     .catch(error => {
//             console.log(error);
//     })      
//     process.exit(0);
// });
// process.on('beforeExit', function () {
//     // continueInterval=false
//     // doMashinTapan(true)
//     // resetConfigVars()
//     // // ozumuSondur()
//     heroku.patch(`/apps/${appid}/formation`,{body:{updates:[{"quantity":0,"size":"Free","type":"worker"}]}})
//     .then(data => {
//             console.log('done');
//     })
//     .catch(error => {
//             console.log(error);
//     })      
//     process.exit(0);
// });
main()
