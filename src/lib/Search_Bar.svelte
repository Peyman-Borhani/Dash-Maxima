<script> 
//Runes
    import  Search      from  '~icons/lucide/search';
    //import  {Input}     from  '$lib/components/ui/input/index.js';
    
    let  {Active_Itm=$bindable(),  input}  =$props();
    let  {view, value}  =$state('');
    let  inp;

function  keyIn(e) 
{       console.log(e)
    if(e.key==='Escape') {  
        view =view? false  :true;  //e.target.blur()
        view? e.target.children[0].blur()  :e.target.children[0].focus();//inp.focus();
    }
    else if(e.key==='Enter' || e.type==='change') {input=e.value;  inp.blur();  view=false}
    //else inp.focus();

}
</script>

<!--svelte:options accessors / -->

<svelte:window   onkeyup ={keyIn} />

<div  class ='inline-grid   fixed  z-40   mt-6 portrait:bottom-8   portrait:scale-150 
              right-[17svw]  self-center  min-w-fit  place-items-center  place-self-end  select-none '
      style ='grid-template-columns: 90% 10%; '
      bind:this={inp}
>

    <input  type  ='text'       bind:value={value}
            style ='visibility:{view? 'visible' :'hidden'};  box-shadow: 0 0 1.7ch #306; font-size: calc(2svmin + 1svw); padding: .46ch .6ch;'
            class ='inline-grid  w-fit  invisible  z-50  text-center  place-items-end  justify-self-center  
                    mr-4  md:w-[20ch]  lg:w-[38ch]  rounded-l-2xl    placeholder-opacity-10   bg-background '
            placeholder={Active_Itm} contenteditable
            onchange ={keyIn}
    >
    <button   onpointerup={()=> view=!view}
              class ='size-7  z-40   {view? 'rounded-r-2xl ' :'rounded-full '} -ml-2  mr-6
                      bg-background  transition-transform  duration-500  border border-muted-foreground/30'
              style ='box-shadow: 0 0 2ch #24b, inset 0 0 1.6ch #208; scale:180%; '  
    >   
        {#if view}  <span   class ='text-[#700]  font-normal hover:font-semibold'> X  </span>
        {:else}     <Search  class='text-foreground'   style='translate: 2pt 0;'/>
        {/if}
        <span class='sr-only'> Search/close button </span>
    </button>

</div>

    <!--style = {glow? 'scale: 1.12;  box-shadow: 0 0 1ch #cde !important;'  :'opacity: 0;  width:1ch; border-radius: 50vmax;  border: solid 1pt #aaa'} -->
