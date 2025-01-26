<script>  
//  Dash-Maxima:   by Peyman Borhani (Systemic Labs)
//  If useful, please do Support, credit/knowledgement, contribute, or at least
//  follow/engage on X or Linkedin incentive for further open source development.

import   '../app.css';
import  {ModeWatcher}   from  'mode-watcher'
import  {activeElement} from  'runed';
import  {setContext}    from  'svelte'
import  {getContext}    from  'svelte'
import  {SvelteMap}     from  'svelte/reactivity';
import   FS_Out         from  '~icons/radix-icons/exit-full-screen'
import   Cross          from  '~icons/radix-icons/cross2';

import   Header         from  '$lib/Header.svelte'
import   Side_Bar       from  '$lib/Side_Bar.svelte';
import  {makeDB}        from  '$lib/DB.server.svelte.js'

import  {To, From}      from  '$lib/animate.js'
import  {flip}          from  'svelte/animate'

//import  {error} from '@sveltejs/kit'; //if(error) console.log('Error:  something is not right...');    
  let {data, children} = $props();
    
  const  DB  = makeDB(data.DB);

  //Store.logData();
  //Store.logUsers();

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

//DB.logUsers();
//DB.logData();

let Scrl=$state(0),     Mobile =(navigator.maxTouchPoints && navigator.maxTouchPoints>0)? true  :false;

</script>


<ModeWatcher  />
    
    
<span   class ='grid  fixed   w-svw  h-svh  p-0 m-0   place-self-stretch  place-content-evenly    
                    grid-rows-12  grid-cols-12  bg-stone-50  dark:bg-stone-600 overflow-x-hidden '
>
{#if Hide}  <span   class='fixed  right-1 top-1 text-2xl'
                    onpointerup ={Hide=!Hide}
            > [-] 
            </span>
{:else}
    <!--    _________________ Header contains _________________
                Sheet (panel menu)  -   Breadcrumbs
                Dark_Light (theme)  -   Avatar (user/login..)
                Search_Bar (input, inline infopop, search data page/defined)
    -->
            <Header  {cfg}  {On_Page} {Active_Itm} />
            <!--PROPS:      fixed        (stays, no shift/scroll)   {Active_Itm} {Right} {None}
                    vars:   {Active_Itm} {Right} {None}  (...sidebar status...)
    
        ________________Side_Bar contains_______________
            Sidebar and/or Button (triggers menu panel) 
            Exit (same as tapping none sidebar screen)
            menu Items   +   Settings (at the end)
        -->
            <Side_Bar {Active_Itm} {cfg} bind:On_Page={On_Page} />
            <!--------------------- PROPS ----------------------
                        {Right}  {P_sbar}  {H_Sbar}
                        {On_Page}  {Active_Itm}   
                    x      means true for each prop  
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

</span>
