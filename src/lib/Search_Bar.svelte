<script> 
//Runes
        import  Search      from  '~icons/lucide/search';
        import  {Input}     from  '$lib/components/ui/input/index.js';

        let  {inp_Elm}  = $props();
        let  view  = $state(false);
</script>

<div  class ='fixed  inline-grid  right-[14vw]  md:grow-0  h-15  min-w-fit 
              select-none  drop-shadow-lg  shadow-cyan-700  overflow-hidden'
>
  <Input  type  ='search'
          style ={view? 'display: inline-grid;'  : 'display:none;'}
          class ='placeholder-opacity-100 w-auto rounded-full  pl-3  pr-2  bg-background
                  md:w-[20ch] lg:w-[40ch]  text-md  scroll-m-90  transition-all duration-300'
          placeholder={inp_Elm}
  />
      
  {#if view}
    <button   onpointerdown={_=> view=false}
              class='absolute px-2 py-1  scale-x-125 scale-y-105 text-2xl font-thin bg-violet-900  text-white mr-1 justify-self-end self-center rounded-l-md rounded-r-full   '
            > X
    </button>
  {/if}
</div>

<button >
  <Search  onpointerdown={()=> view=true} 
            class='flex  h-9 w-9 mr-10  p-1  text-muted-foreground'
  />
  <span class=sr-only>Search...</span>
</button>
    <!--style = {glow? 'scale: 1.12;  box-shadow: 0 0 1ch #cde !important;'  :'opacity: 0;  width:1ch; border-radius: 50vmax;  border: solid 1pt #aaa'} -->
