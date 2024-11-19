<script> 
    import  Search      from  '~icons/lucide/search';
    //import  {Input}     from  '$lib/components/ui/input/index.js';
    
    let  {Srch_top, P_sbar, Right, input, Active_Itm}  =$props();

    let  {view, value, inp, Sbind}  =$state('');
    let  Srch = $state(false);

    const tap  =()=> {
                        if(view && Active_Itm==='Page Body') view=false;
                        else if(Active_Itm==='Search') {Srch=true;  inp.focus()} 
                        else if(Srch)  Srch=false;
    }


function  keyIn(e) 
{
    if((e.key==='Escape' && value==='') || (e.key==='/' && e.altKey) )
        {view =!view;   if(view){Srch=true;  inp.focus(); }  else value='';  }
    else if (e.key==='Escape') {value='';   input=''}
    else {  
        inp.focus();
        if( e.key==='Enter' || e.type==='change') 
          {input=value;  value='';   inp.blur(); Sbind.blur(); view=false; Srch=false}
    }
}
</script>

<!--svelte:options accessors / portrait:-translate-x-16 -->

<svelte:window  onpointerup={tap}  onkeyup={keyIn} />

<div    id ='Search' 
        class ="inline-grid  portrait:fixed  px-2 items-center  bg-none  portrait:opacity-80   select-none
            {!view&&Right? 'portrait:left-2' :!view? 'portrait:right-7' :''}   {Srch_top? 'portrait:top-20' :'portrait:bottom-8'} 
            {view? 'fixed h-fit portrait:left-4  portrait:-ml-10 lg:portrait:mx-0 portrait:w-[96%] rounded-r-xl landscape:-translate-x-[29svw] landscape:mt-28'  :'rounded-full  hover:scale-150  portrait:opacity-100'} 
            {P_sbar&&view&&Right? 'lg:portrait:-ml-[16%] ' :P_sbar&&view? 'lg:portrait:-ml-[4%] '  :''}
            z-50  self-center  place-items-center justify-self-start  rounded-full bg-none scale-110  transition-all duration-200 "
        style =' grid-template-columns: 90% 10%; '    
>

    <input  type  ='text'       bind:value={value}      bind:this={inp}
            style ='box-shadow:  0 0 4pt #203, 0 0 .7ch #cde, inset 0 0 9pt #bad8;  font-size: 2.6ch;   padding: .2ch 1ch; '
            class ='inline-grid  z-50  h-full  text[2.6ch]  text-center  portrait:-mr-[24%]  place-items-end transition-all duration-500
                    {view? 'visible opacity-100 landscape:w-[36ch]  portrait:w-[90%] lg:portrait:w-[80%]'  :'invisible opacity-0 landscape:w-0  portrait:w-0 lg:portrait:w-0'}
                    rounded-l-xl  placeholder-opacity-20 focus:opacity-100 dark:bg-black  outline-none border-muted '
            placeholder={Srch? 'Search...' :Active_Itm? Active_Itm :'Search...'} contenteditable
            onchange ={keyIn}
    >
    <button   id='SrBtn'  bind:this={Sbind}  onpointerup= {_=>view=!view}
              class ='size-11  z-50  {view? 'rounded-r-xl  border border-[#a9c]   ' :'rounded-full '} justify-end *:hover:text-2xl 
                      bg-muted  dark:bg-black  transition-all  duration-600 outline-none  hover:contrast-125 dark:hover:brightness-150 '
              style ='box-shadow: 0 0 4pt #203, 0 0 1.2ch #def, inset 0 0 3.6pt #cde, inset 0 0 1ch #51b; '  
    >   
        {#if view}  <span     class='text-[#96b]  text-lg transition-all duration-200 hover:text-red-700'> X </span>
        {:else}     <Search   class='text-gray-800 dark:text-gray-500 translate-x-2 text-2xl '/>
        {/if}
        <span class='sr-only'>Search</span>
    </button>

</div>

    <!--style = {glow? 'scale: 1.12;  box-shadow: 0 0 1ch #cde !important;'  :'opacity: 0;  width:1ch; border-radius: 50vmax;  border: solid 1pt #aaa'} -->
