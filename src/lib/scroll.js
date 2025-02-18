// scroll.js => efficiently monitor's user scroll behavior and intent
// returns  => status/scroll/intent info: result, Y, path sequences, path intent summary, at page section

// Written by Peyman Borhani  -  Systemic Labs
//
// To use it for free please do mention/support author by
// placing this comment block or at least this single line:  
// "scroll.js Written by Peyman Borhani - Systemic Labs"
// in your readme + a comment line above scroll.js file import
// thanks - enjoy coding.
export {init, Scan, Log}
//export const data={result, at, action, path:P, sum, done }

let                     // P-> path -> (up, down, hold)
        P       = [],   // each scroll event path:  p[0]->path p[1],p[2]->continued
        start   =0,     // scroll top position
        end     =0,     // scroll bottom position
        prv     =[],    // previous scroll
        result  ='hold',// up, down, hold->(undetermined)
        at      ='page',// scroll place (page start end)
        action  =false, // pre-defined scroll action achieved
        sum     =0,     // sum (intent) of user scroll direction
        done    =true,  // scroll function process completion
        iH      =0,     // inner height size
        cycle   =false, // cycle page when reach end points
        dur     =0,     // delay duration between scroll scan execution
        delay   =false, // delay state: waiting for process timeout to be true
        state   ='inactive', // user scroll status: scrolling/stopped/inactive
        inactive=0;     // time passed where user was inactive

function  Log ()
{
    console.table( {'prv':prv, 'path':P} );
    console.table( {
                    'start' :start,
                    'end'   :end,
                    'result':result,
                    'at'    :at,
                    'sum'   :sum,
                    'done'  :done,
                    'delay' :delay,
                    'dur'   :dur,
                    'state' :state,
                    'inactive':inactive
    });
}
// Runs a function on timed intervals until condition met to stop
async function intervalRun(x, dly=1000)
{
  let    i =0;
  const DL =Array(x).fill(false);

  return new Promise((res)=>{   //let iv =setInterval(_=>{DL[i]=true; i++; console.log(DL); if(i===x) {done=true; return clearInterval(iv)} }, 1500);
    const tFunc =()=> {
        console.log(DL);
        if(i===x) {done=true;  res('done');  return} //condition met
        DL[i++]=true;
        let iv = setTimeout(()=> {tFunc(); return clearTimeout(iv)}, dly);
    }
    tFunc()
  })
}//await intervalRun(4).then(r=>console.log('res: ',r) );

//const //compare = a=> (a[0]<a[1]) && (a[1]<a[2]) && (a[2]<a[3])
    

function  init (h, c=false, d=false) {iH=h;  cycle=c;  dur=d}


function  Scan(e)
{   //only process if previous run is done
    if(delay && dur)  return false;
    console.log(delay, dur, done);
    delay=false;
    const t =setTimeout(_=>{delay=true;  return clearTimeout(t)}, dur);

    prv.push(start);
    start   =Math.round(e.target.scrollTop+iH+3);
    end     =e.target.scrollHeight;
    if(start===prv[prv.length-1])  prv.pop();

    let pID =prv.length-1;
    let Y   =start - prv[pID];  
    if(pID>3 || prv.includes(0)) {prv=[]; pID=0; sum=0}
    
    for(let i=0;  i<pID;  i++)  //old: replaced by better for loop:   if(pID===2) {P1=compare(prv[1],prv[2])...P2, P3 //sum =(prv[2]-prv[3]) + (prv[1]-prv[2]) + (prv[0]-prv[1]);
    {   
        let  a=prv[i],  b=prv[i+1]; //0,1 -  1,2  -  2,3
        P[i] =a<b? 'down' :b<a? 'up' :'hold';
        sum+= b-a;
    }

    if(pID===3)     //if P's Array filled full, then do proceed
    { 
      sum = (prv[1]-prv[0]) + (prv[2]-prv[1]) + (prv[3]-prv[2]); //let sum = (prv[2]-prv[3]) + (prv[1]-prv[2]) + (prv[0]-prv[1]);
      //P3 = compare(prv[2],prv[3]) //(sum>9 && compare(prv[3],prv[4]))? 'down'  :(sum< -12 && compareB(prv.toReversed()))?'up' :'hold';
      if(P.every(n=> n===P[0])) result = sum>9? 'down' :sum< -12? 'up': 'hold';//if(P1===P2 && P2===P3)
      else result = 'hold';
      action = result==='up'; //apply hiding as action
      const iv =setinterval(_=>{inactive+=dur;  return clearInterval(t)}, dur);
 //console.log ('result: ', sum, P1, P2, result, start, end, iH, action);
    }
    //Log()

    //Start/End detection (Page landmarks) 
    if(start-5<iH){     start  =cycle? end-start :0;  
                        e.target.scrollTop  =start;   
                        at     ='start';
                        action =true
    }
    else if(start+1>end){ 
                        start =cycle? 3: end;
                        e.target.scrollTop =start;
                        at    ='end';
                        action=false;
    } 
    else at ='page';
    //done=true;

    return {Y, at, path:P, result, action};
}
                    //Y:        Y axis scroll amount (num)
                    //at:       page placement
                    //path:     each event scroll paths (up to 3)
                    //result:   user scroll result (verdict)
                    //action:   user trigger defined action
