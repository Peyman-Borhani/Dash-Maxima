<script>//_________________ Home Page

    import   Content       from  '$lib/Content.svelte'

    let {data}  = $props();
    const {S_bar, P_sbar, Right} = data.cfg;
 
</script>

<!-- User's content or in another word, "App's main Content" is placed in main element of the base page route  -->
<main   class=" grid  grid-cols-12  z-10  h-fit {!P_sbar?'w-[99svw]' :!S_bar?'w-[94svw]' :P_sbar?'w-[96svw] lg:w-[85svw]' :'w-[86svw]'} landscape:w-[86svw] border border-black/70 dark:border-black/60
                self-start place-self-center  col-span-full row-start-3  row-end-auto auto-rows-auto  bg-[#ccd8] dark:bg-background/80  rounded-lg  px-3 landscape:px-5  portrait:py-6 
                {!P_sbar && !S_bar? 'mx-[4svw]' :Right? 'portrait:absolute portrait:lg:left-1.5 landscape:-ml-[8.6svw] ' :'portrait:absolute portrait:lg:right-1.5 landscape:ml-[9.2svw] '}"
        style ='box-shadow: 0 0 6ch #112a, inset 0 0 1ch #102, inset 0 0 16ch #879a;'
>       
    <Content  Tdata={data.table} /> 
</main>