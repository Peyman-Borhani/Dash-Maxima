<script>//_________________ Home Page

    import   Content       from  '$lib/Content.svelte'

    let {data}  = $props();
    let {S_bar, P_sbar, Right} = data.cfg;

</script>

<!-- User's content or in another word, "App's main Content" is placed in main element of the base page route  -->
<main   class=" grid  grid-cols-12  z-10  h-fit {!P_sbar && !S_bar? 'w-[90svw]' :'w-[84svw]'}  p-1 landscape:px-5  portrait:py-6
                landscape:w-[84svw] self-start place-self-center  col-span-full row-start-3  row-end-auto auto-rows-auto bg-black/25 
                {!P_sbar && !S_bar? 'mx-[4svw]' :Right? 'landscape:-ml-[7svw] ' :'landscape:ml-[8svw]'}  rounded-lg "
        style ='box-shadow: 0 0 1ch #000;'
>       
    <Content  Tdata={data.table} /> 
</main>