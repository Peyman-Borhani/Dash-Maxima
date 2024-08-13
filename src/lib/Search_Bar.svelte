<script> 
//Runes
        import  Search        from  '~icons/lucide/search';
        import  {Input}       from  '$lib/components/ui/input/index.js';

        let  {inp_Elm,  activeElm}    = $props();
        let  glow  = $derived(activeElm==='BODY'? ''  :'shadow-cyan-200');
</script>


<Search on class='flex  h-9 w-9 mr-5  p-1  text-muted-foreground'  />

<div  class='fixed flex  md:grow-0  bg-red-500  h-15 w-full min-w-fit select-none'
>
    <Input  type  = 'search'
            style = {glow? 'scale: 1.12;  box-shadow: 0 0 1ch #cde !important;'  :'opacity: 0;  width:1ch; border-radius: 50vmax;  border: solid 1pt #aaa'}
            class = 'fixed placeholder-opacity-100 w-auto rounded-full bg-background pl-3 pr-2  md:w-[20ch] lg:w-[40ch]  text-md  scroll-m-10 opacity-60  transition-all duration-300'
            placeholder={inp_Elm}
    />
  </div>
