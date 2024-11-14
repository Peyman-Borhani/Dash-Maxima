<script>//_________________ Home Page

    import   Content       from  '$lib/Content.svelte'

    let {data}  = $props();
    const {S_bar, P_sbar, Right} = data.cfg;
 
</script>

<!-- User's content or in another word, "App's main Content" is placed in main element of the base page route   -->
<main   class=" grid  grid-cols-12  z-10  h-fit {!P_sbar?'w-[100svw]' :!S_bar?'w-[94svw]' :P_sbar?'w-[100svw] lg:w-[88svw]' :'w-[86svw]'} landscape:w-[86svw] border border-black/70 dark:border-black/60
                self-start place-self-center  col-span-full row-start-3  row-end-auto auto-rows-auto  rounded-lg  p-2 portrait:p-3  landscape:px-5  portrait:pb-20 bg-[#bbc8] dark:bg-gray-900/80 
                {!P_sbar && !S_bar? 'mx-[1svw] landscape:mx-[3svw]' :Right? 'portrait:absolute portrait:left-0 landscape:-ml-[9svw] ' :'portrait:absolute portrait:right-0 landscape:ml-[9svw] '}
                mt-[1ch] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]  from-[#bbc] via-[#ccd] to-[#def]  dark:from-[#334] dark:via-[#445] dark:to-[#121113] 

            "
        style ='box-shadow: 2pt 6pt  2ch #223, 0 0  3ch #aab, inset 0 0 3pt #000, inset 0 0 2ch #201830, inset 0 0 12svmax #768b;'
>       
    <Content  Tdata={data.table} />
</main>