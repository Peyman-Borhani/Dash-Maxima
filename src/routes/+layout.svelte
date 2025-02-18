<script>  
//  Dash-Maxima:   by Peyman Borhani (Systemic Labs)
//  If useful, please do Support, credit/knowledgement, contribute, or at least
//  follow/engage on X or Linkedin, as incentive for more open source development +code sharing.

import   '../app.css';
import  {ModeWatcher}   from  'mode-watcher'
import  {activeElement} from  'runed';
import  {SvelteMap}     from  'svelte/reactivity'
import  {setContext, getContext}  from  'svelte';

import   FS_Out         from  '~icons/radix-icons/exit-full-screen'
import   Cross          from  '~icons/radix-icons/cross2';

import   Header         from  '$lib/Header.svelte'
import   Side_Bar       from  '$lib/Side_Bar.svelte';
import  {makeDB}        from  '$lib/DB.server.svelte.js'
import  * as scroll     from  '$lib/scroll.js'
import  {To, From}      from  '$lib/animate.js';

import  {flip}          from  'svelte/animate'
import  {MediaQuery}    from  'svelte/reactivity';
import  {innerHeight, scrollY, online}  from  'svelte/reactivity/window';
//import  {error} from '@sveltejs/kit'; //if(error) console.log('Error:  something is not right...');    

  let {data, children} = $props();

  const  DB  = makeDB(data.DB);
  //DB.logData(); //DB.logUsers();

  const  CONFIG =$state(data.CONFIG);
  const  NAV_ITEMS  =$state(data.NAV_ITEMS);

  setContext('CFG',  CONFIG);
  setContext('NAV',  NAV_ITEMS);
  setContext('DB',   DB );

  let cfg   =getContext('CFG');
//let nav =getContext('NAV');

  let  Active_Itm =()=> 
        activeElement.current?.nodeName==='Search'? 'Search' 
        : activeElement.current?.id==='Page_Body'? 'Page_Body'  //: activeElement.current?.nodeName==='BODY'?  "Page Body"
        : activeElement.current?.nodeName==='A'? '#'+activeElement.current?.textContent 
        : activeElement.current?.id?  activeElement.current?.id 
        : '';

const Portrait  = new MediaQuery('orientation: portrait');
let   iH  =$derived(innerHeight.current);

let   Scrl ={},
      Mobile    =(navigator.maxTouchPoints && navigator.maxTouchPoints>0)? true  :false;

   

scroll.init(iH, false, 30);  //inner Height,  cycle,  scan delay ms

const aspRatio = ()=> cfg.Portrait =Portrait.current;
aspRatio();

</script>


<svelte:head>  <title>Dash Maxima</title> </svelte:head>
<ModeWatcher  />

<svelte:window  bind:scrollY={Scrl}
                onclick={_=> window.scroll(0,0)}
/>


<span   id    ='Page_Body'    
        class ='grid  fixed   w-svw  h-svh  p-0 m-0   place-self-stretch  place-content-evenly   select-none
                grid-rows-12  grid-cols-12  bg-stone-50  dark:bg-stone-600 overflow-x-hidden overflow-y-scroll '
>
{#if cfg.No_bar}  
    <Cross  class='fixed flex  size-9 right-[.1ch] top-[.1ch] hover:size-10 hover:right-[.6ch] hover:top-[.6ch] 
                    rounded-lg items-center justify-center cursor-pointer
                    z-50  text-[#eef] hover:text-red-700  bg-black/80  hover:scale-150 transition-all  opacity-60 hover:opacity-100'  
            onpointerdown={_=> cfg.No_bar=!cfg.No_bar}
    />
{:else}
    <!--    _________________ Header contains _________________
            Sheet (panel menu)  -   Breadcrumbs
            Dark_Light (theme)  -   Avatar (user/login..)
            Search_Bar (input, inline infopop, search data page/defined)
    -->
    <Header  {Active_Itm} {Scrl}/>
    <!--PROPS:  fixed        (stays, no shift/scroll)   {Active_Itm} {Right} {None}
                vars:   {Active_Itm} {Right} {None}  (...sidebar status...)
    -->
    
    <!-- ____ Side_Bar ________________________ -->  
        
    {#if ( (!Mobile && cfg.S_bar)||(Mobile && cfg.P_sbar) )}
        <!-- Side_Bar contains:______________
            Sidebar and/or menu Button (triggers menu panel) 
            Menu Panel & Exit (tap none sidebar screen is also exit)
            menu Items   +  extra items + Settings (at the end)
        -->
            <Side_Bar {Active_Itm}  />
    {/if}
            <!--------------------- PROPS ----------------------
                        {Right}  {P_sbar}  {H_Sbar}
                        {On_Page}  {Active_Itm}   
                 x      using prop name alone means true   
                {x}     shorthand, variable value passed as prop
                        fixed   [stays, no shift/scroll]
                var     P_sbar  [force side bar visible on both (portrait too)]
                var     S_bar   [force side bar hidden on both (landscape too)]
                var     Right   [side]   -   Active_Itm  [focused element]
                        menu    [force menu panel on both(landscape too)]
                        no_menu [force no menu on both (portrait too)]
        -->
{/if}
    {@render  children()}
    <!--span  class= 'fixed top-[4ch] left-[8ch] text-3xl z-50'> {Scrl} </span -->
</span>
