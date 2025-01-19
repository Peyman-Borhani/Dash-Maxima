<script>
  import    {SvelteDate as sDate}from   'svelte/reactivity';
  import    {SvelteMap as sMap}  from   'svelte/reactivity';
  import    {fade}               from   'svelte/transition';

  // App/Menu kb control props  (ui. => user input/interaction) 
  // state/visibility on/off : menu, info , view, zoom
  // L? - ui side: user on left side: (true - todos) (false - done)
  // focous: which list item user focused on
  let { Data = $bindable(new sMap()),
        ui   =$bindable({menu:false, info:false, L:true, zoom:false, view:false, focus:1})
  } = $props();

  let   k = '',     // current Keyboard key press
        prvKey,     // previous Keyboard key press 
        inp_el,
        focus = 0,
        hide  = $state(false),
        ISO   = false; // Local/ISO Time switch
    
  let     time =  $state(' ');

  const  tmSW  =()=>  time =  //time formatter - ISO/Local
                ISO ? new Date().toISOString().slice(0,19).replace('T', '  ') 
                    : new Date().toLocaleString().slice(0,22);

(function  tmRun() {setInterval(tmSW, 1000);  return ()=>clearInterval(tmSW)})();
//$: timer = (time===0) ?  true  : false;
//$: timer = ((t+1)%10 === 0) ? true  : false;
const log = (n, x=false)=>  console.log(n, x? x :{});

log('hereeeeeeee:');
for(let x of Data.entries()) log(x);
//________input handler (event/KeyBoard)_________
function  kb_Control(evk) {
  //return if user is focused on typing todo or list name.
  if(evk.target.id==='Typin' || evk.target.id==='task-name')  return; 
  let   c   = 0,  //check if all list items counted
        k   = evk.key, // key name
        D_size= Data.size,
        ctrl= (evk.ctrlKey || evk.metaKey) ? true  :false;
  //log(k);
  
  switch(k) { 
    
    case 'i':
        if(ui.info && !ui.menu)  ui.info=false; //info off
        else if(!ui.info && ui.menu) {ui.menu=false;   ui.info=true} //menu off - info on
        else ui.menu = true; 
        break;

    case 'ArrowLeft':  
    case 'ArrowRight':  //Left / Right keys pressed
        focus = 0; 
        ui.L = (k==='ArrowLeft') ?  true   : false;
        //reaching the first todo(L) or done(R)
        //for(let d of Data.keys()) {if(!Data.get(d).done) focus++; else return}
        // if is right side (count indexes until reach 1st done)
        if(!ui.L) while(focus<D_size && !Data.next().get('done')) focus++;
        break;

    case 'ArrowUp':
        //while( focus>0  && (ui.L?  Data[focus-1].done  :!Data[focus-1].done)) {focus--;  c++} //todo or done
        focus  = focus>0?  focus-1  :D_size;
        //if(c===D_size) break; //if all is from opposite site
        //if(focus>0)  focus--; //go up -1
        //else focus = D_size;
        break;

    case 'ArrowDown':  //down
        focus = (focus<D_size)? focus++  : 1
        //if(focus+1===Data.size) focus = -1;
        //if(ui.L) while(Data[focus+1].done)  {focus++; c++; log(focus,c)} //todo
        //else  while(!Data[focus+1].done) {focus++; c++} //done
        //if(c!==Data.size) focus++; //if all is not from opposite side
        break;                                // go down +1
    
    case 'Delete':
        remove(Data[focus]);
        if (focus===0) {}
        else if (focus > 0) focus--;
        else if(focus+1 <= Data.size) focus++;
        updateID(); focus = 0;
        break;
        
    case '+':   
        ui.zoom = !ui.zoom;  
        document.documentElement.style.setProperty('--size', 'calc((4vh + 4vw)/2)'); 
        save();  load();  
        break; // pressed +
        
    case 'v':   ui.view=!ui.view;	 break;  //view button

    case 'Enter':	 //if enter key pressed and keyboard focused	
            if(focus>=0) Data[focus].done = 
                (Data[focus].done) ?  false  : true;
            break;
    
    case 'F5':          //to save data press F5
                if(prvKey==='F5') save();   break;  
    
    case 'F9':          //to load data press F9
                if(prvKey==='F9') load();   break;  
                
    default:  
            focus=-1;   inp_el.focus();
            break;      // focus on text input section
  }
  prvKey = k; //saves key, to remember as last key pressed.
  log('Key Pressed: ', k);
  ui.focus  = focus;
}


const  add_Item= ev=>  { 
                        let t =  ev.target;
                        if(ev.key)  k=ev.key;   else return;
                        hide =false;
                        k==='Enter' ?  insert(t.value)//insert(t.value) 
                      : t==='button'?  insert(inp_el.value)  :{};
}
const insert = ins=> log('insert:', ins)
</script>

<!-- onmouseover|once = {()=> document.documentElement.requestFullscreen()} -->
<svelte:window	onkeydown ={kb_Control} />

<section    onpointerenter={_=> hide=false}
            class:hide
        >
        <input  id ='Typin'         bind:this ={inp_el}  
                maxlength   = 38    autocomplete ='off'  
                placeholder = {'❯❯  Enter a new item... '}
                onfocus     = {e=> e.target.setAttribute('placeholder', '') }
                onblur      = {e=> e.target.setAttribute('placeholder', '❯❯  Enter a new item... ') }
                onkeydown   = {add_Item}
              >

        <button   onpointerdown={add_Item}>   ↩
        </button>
        
        <time   class:timer ={true}    transition:fade
                onclick     ={()=> ISO=!ISO}>   {time}
        </time>
</section>


<style>

section  {     /* Section Scope Start */
                                    display      : grid;
            bottom  : -2pt;         position     : absolute;          
            left    : 0;            align-self   : end;
            border  : solid 3pt;    border-radius: 0 2.4vmin 0 1pt;   
            width   : 98dvi;        grid-template: auto / 70% 24% 18%;
            height  : auto;         box-shadow   : inset 0 0 1ch #000;       
            opacity : 1;            background-color: #dec;
            z-index : 4;            font-family:  'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            

  button  {                         line-height : 0;
            font-size: 6ch;         font-weight : 1000;
            height   : 100%;        text-shadow : 0 0 3pt #fff;
            rotate   : -90deg;      box-shadow  : 0 0 6pt #a8c;
            color    : #ace;      border      : solid 1pt #000;
            position : absolute;    align-self  : center;
            justify-self: end;      border-radius: 0 0 2.4vmin 2.4vmin;
            aspect-ratio: 1.1/1;    margin-right: -4pt;
                                    background-color: #003;
                                                                   
}

  input[id = "Typin"]   {           
                                    text-align      : left;
            width   : 100%;         font-weight     : 500;
            height  : auto;         font-size       : 2.8vw;
            outline : none;	        text-indent     : 1ch;
            border  : none;         grid-column     : 1;  
            padding : 0;            background-color: transparent;
            z-index : 5;            text-shadow: 0 0 1pt  #000;
                                    visibility: hidden;
}

  time {                          
            font-size: 2.8ch;       font-weight     : 600;
            width   : 100%;         text-align      : start;
            height  : auto;         padding-left    : 1ch;
            outline : none;         letter-spacing  : 3pt ; 
            border  : none;         text-shadow: 0 0 1pt #000;
            color   : #123;       background-color: #0008;
}
.timer {color:#000}
} /* Section Scope End  */
.hide {opacity: .1}

@media  screen and (orientation: portrait)
{   /* Section (portrait) Scope Start */
  section {     
            height: 8dvh;   position: fixed;
            width : 96dvw;  font-size: var(--size);    
            bottom: 0;      grid-template: auto / 60% 24% 11%;
            
    
    input[id="Typin"]   {grid-column: 1;  text-overflow: ellipsis; align-self: center;}
    button{height: 94%}
    
    time  { 
            position    : relative;
            font-size   : 1.5ch !important; 
            line-height : 3.6ch;
            place-self  : center;
            height      : 100%;
            letter-spacing: .5pt;
    }
  } /* Section (portrait) Scope End */
}

</style>