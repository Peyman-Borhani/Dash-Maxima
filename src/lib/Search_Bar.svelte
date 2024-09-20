<script> 
//Runes
    import  Search      from  '~icons/lucide/search';
    //import  {Input}     from  '$lib/components/ui/input/index.js';
    
    let  {Active_Itm=$bindable(),  input}  =$props();
    let  {view, value}  =$state('');
    let  inp,  srch;

function  keyIn(e) 
{   
    console.log(e);
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

<div  class ='inline-grid  fixed   items-center  portrait:bottom-[3svh]  select-none bg-transparent p-2 mt-[3svh] landscape:right-[16.8svw]
              right-[12svw]  z-50  self-center  min-w-fit  max-w-full place-items-end  rounded-2xl portrait:scale-125'
      style ='grid-template-columns: 90% 10%; '
      
>

    <input  type  ='text'       bind:value={value}      bind:this={inp}
            style ='visibility:{view? 'visible' :'hidden'};  box-shadow: 0 0 1ch #31a, inset 0 0 2pt #6668; font-size: calc(1.4svmin + 1.3svw); padding: .46ch .6ch;'
            class ='inline-grid  w-fit invisible   z-50 text-center  place-items-end outline-none border-muted  transition-all duration-300  focus:h-fit
                    mr-2  sm:w-[28ch]  md:w-[36ch]  rounded-l-2xl    placeholder-opacity-20  scale-95  focus:scale-125 focus:-translate-x-6 focus:opacity-100'
            placeholder={Active_Itm} contenteditable
            onchange ={keyIn}
    >
    <button   onpointerup={()=> view=!view}  bind:this={srch}
              class ='size-7  z-50   {view? 'rounded-r-lg '  :'rounded-full  hover:scale-125'}
                      bg-background  mr-6  transition-transform  duration-300  scale-110  portrait:scale-125'
              style ='box-shadow: 0 0 1ch #138, inset 0 0 1.2ch #207; scale: 200%; '  
    >   
        {#if view}  <span   class ='text-muted-foreground  font-normal '> X </span>
        {:else}     <Search  class='text-muted-foreground  translate-x-1 ' />
        {/if}
        <span class='sr-only'> Search/close button </span>
    </button>

</div>

    <!--style = {glow? 'scale: 1.12;  box-shadow: 0 0 1ch #cde !important;'  :'opacity: 0;  width:1ch; border-radius: 50vmax;  border: solid 1pt #aaa'} -->
