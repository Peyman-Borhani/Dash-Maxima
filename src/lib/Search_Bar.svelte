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
    if (e.key==='Escape') {value='';  input=''}
    else if( (e.key==='/'  ||  e.key==='s')  &&  e.altKey)
      { view =!view;   view? inp.blur() :{}  } //srch.focus();
    else {  
        inp.focus();
        if (e.key==='Enter' || e.type==='change') {input=e.value; value=''; inp.blur(); srch.blur(); view=false}
    }

    // else inp.focus();

}
</script>

<!--svelte:options accessors / -->

<svelte:window   onkeyup ={keyIn} />

<div  class ='inline-grid  fixed   items-center  portrait:bottom-8  select-none bg-transparent p-2 mt-1
              right-[18svw]  z-50  self-center  min-w-fit  place-items-end  rounded-2xl '
      style ='grid-template-columns: 90% 10%; '
      
>

    <input  type  ='text'       bind:value={value}      bind:this={inp}
            style ='visibility:{view? 'visible' :'hidden'};  box-shadow: 0 0 1ch #308, inset 0 0 2pt #6668; font-size: calc(1.4svmin + 1.2svw); padding: .46ch .6ch;'
            class ='inline-grid  w-fit h-fit invisible  z-50  text-center  place-items-end  outline-none border-muted
                    mr-2  sm:w-[28ch]  md:w-[36ch]  rounded-l-2xl    placeholder-opacity-20   '
            placeholder={Active_Itm} contenteditable
            onchange ={keyIn}
    >
    <button   onpointerup={()=> view=!view}  bind:this={srch}
              class ='size-7  z-50   {view? 'rounded-r-lg '  :'rounded-full  hover:scale-125'}
                      bg-background  mr-6  transition-transform  duration-300  portrait:scale-125'
              style ='box-shadow: 0 0 1ch #138, inset 0 0 1.2ch #207; scale: 180%; '  
    >   
        {#if view}  <span   class ='text-muted-foreground  font-normal '> X </span>
        {:else}     <Search  class='text-muted-foreground  translate-x-1 ' />
        {/if}
        <span class='sr-only'> Search/close button </span>
    </button>

</div>

    <!--style = {glow? 'scale: 1.12;  box-shadow: 0 0 1ch #cde !important;'  :'opacity: 0;  width:1ch; border-radius: 50vmax;  border: solid 1pt #aaa'} -->
