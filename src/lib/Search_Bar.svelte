<script> 
    import  Search      from  '~icons/lucide/search';
    //import  {Input}     from  '$lib/components/ui/input/index.js';
    
    let  {On_Page,  input,  Active_Itm}  =$props();
    let  {view, value, inp}  =$state('');
    let  srch;

function  keyIn(e) 
{//console.log(e);
    if( (e.key==='Escape' && value==='') || (e.key==='/' && e.altKey) )
        {view =!view;   value=''}
    else if (e.key==='Escape') {value='';   input=''}
    else {  
        inp.focus();
        if( e.key==='Enter' || e.type==='change') 
          {input=value;  value='';   inp.blur(); srch.blur(); view=false}
    }
}
</script>

<!--svelte:options accessors / -->

<svelte:window   onkeyup ={keyIn} />

<div  class ="inline-grid  absolute  items-center   portrait:fixed    portrait:bottom-8  select-none bg-none  row-start-1  col-start-1 opacity-100
            {view? 'fixed  rounded-r-xl  scale-150  landscape:-translate-x-52 portrait:-translate-x-16 mt-28'  :'rounded-full  hover:scale-150 portrait:opacity-80'}
            portrait:right-4  z-50  self-center  place-items-center justify-self-start  rounded-full bg-none scale-110  transition-all duration-200 "
        style ='grid-template-columns: 90% 10%; '
        
>
{#if view}
    <input  type  ='text'       bind:value={value}      bind:this={inp}
            style ='box-shadow:  0 0 4pt #203, 0 0 .7ch #cde, inset 0 0 9pt #bad8;  padding: 0.4ch .6ch;'
            class ='inline-grid  w-full h-full z-50  text-center  place-items-end  outline-none border-muted  transition-all duration-200   
                    py-4  landscape:w-[36ch]  rounded-l-xl  placeholder-opacity-20 focus:opacity-100 dark:bg-black '
            placeholder={On_Page?  On_Page  :Active_Itm? Active_Itm  :'Search...'} contenteditable
            onchange ={keyIn}
    >
{/if}
    <button   onpointerup={()=> view=!view}  bind:this={srch}
              class ='size-10  z-50  {view? 'size-9 rounded-r-xl scale-100 border border-[#a9c]' :'rounded-full portrait:scale-125 '} justify-end  *:hover:text-2xl
                      bg-muted  dark:bg-black   transition-all  duration-200 outline-none  hover:contrast-125 dark:hover:brightness-150  *:transition-all '
              style ='box-shadow: 0 0 4pt #203, 0 0 1.2ch #def, inset 0 0 3.6pt #cde, inset 0 0 1ch #51b; '  
    >   
        {#if view}  <span   class ='text-muted-foreground  font-light  text-lg'> X </span>
        {:else}     <Search  class='text-gray-800 dark:text-gray-500 translate-x-1.5 text-xl' />
        {/if}
        <span class='sr-only'> Search/close button </span>
    </button>

</div>

    <!--style = {glow? 'scale: 1.12;  box-shadow: 0 0 1ch #cde !important;'  :'opacity: 0;  width:1ch; border-radius: 50vmax;  border: solid 1pt #aaa'} -->
