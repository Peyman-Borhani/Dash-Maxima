<script> 
//Runes
        import  Search      from  '~icons/lucide/search';
        import  {Input}     from  '$lib/components/ui/input/index.js';

        let  {inp_Elm}  = $props();
        let  view  = $state(false);
</script>

<button  onclick ={()=> view=true}>
  <Search  class='flex  h-9 w-9 mr-10  p-1  text-muted-foreground'
  />
  <span class=sr-only>Search...</span>
</button>

<div  class ='fixed  inline-grid  right-[14vw]  md:grow-0  h-15  min-w-fit 
              select-none  drop-shadow-lg  shadow-cyan-700'
>
  <Input  type  ='search'
          style ={view? 'display: inline-grid; box-shadow: 0 0 1.7ch #306'  : 'display:none;'}
          class ='placeholder-opacity-100 w-auto rounded-full  px-2  bg-background
                  md:w-[20ch] lg:w-[40ch]  text-xl  scroll-m-90  transition-all duration-400'
          placeholder={inp_Elm}
  />
      
  {#if view}
    <button   onpointerdown={()=> view=false}
              class='absolute px-2 py-1 scale-x-125 text-2xl font-normal text-[#61c]
                     justify-self-end self-center rounded-l-3xl rounded-r-full  shadow-inner  shadow-violet-900  bg-background'
            > X
    </button>
  {/if}
</div>

    <!--style = {glow? 'scale: 1.12;  box-shadow: 0 0 1ch #cde !important;'  :'opacity: 0;  width:1ch; border-radius: 50vmax;  border: solid 1pt #aaa'} -->
