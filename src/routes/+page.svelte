<script>//_________________ Home Page
    import   Content        from  './Content.svelte'
    import  {getContext}    from  'svelte';

//    let  {data} =$props();
    const  cfg   =getContext('CFG');
    //const  Store =getContext('DB');

</script>

<!--h1  class='text-3xl font-medium m-16 p-[1ch] text-black shadow-inner rounded-2xl bg-[#bce] shadow-black w-fit h-fit'>Orders</h1 -->
<!-- 
{!cfg.P_sbar && !cfg.L_sbar? 'mx-[1svw] landscape:mx-[3svw]' :cfg.Right? 'portrait:left-0 landscape:-ml-[9svw] ' :' portrait:right-0 landscape:ml-[9svw] '}  
                {(!cfg.P_sbar&&!cfg.L_sbar)||cfg.No_bar? 'w-[100svw]'  :!cfg.L_sbar? 'landscape:w-[100svw] ' :(cfg.L_sbar && !cfg.P_sbar)? 'portrait:w-[100svw] landscape:w-[86svw]' :(cfg.L_sbar && cfg.P_sbar)? 'lg:w-[86svw]  landscape:w-[88svw]' :'w-[86svw]'}
                User's content or in another word, "App's main Content" is placed in main element of the base page route   -->
<main   class=" grid  grid-cols-12  m-0  z-20  h-fit  absolute  transition-all duration-200 py-[1.6ch]
                {!cfg.H_bar  || cfg.No_bar? 'row-start-0 -mt-1 pt-[2ch]' : 'row-start-2  mt-[4ch] '} 
                {!cfg.P_sbar || cfg.No_bar? 'portrait:col-start-0  portrait:col-end-13 portrait:w-svw' : cfg.Right? 'portrait:col-start-1 portrait:col-end-11 portrait:justify-self-end '  :'portrait:col-start-2  portrait:col-end-13  portrait:justify-self-end portrait:w-svw lg:portrait:w-[88svw] ' } 
                {!cfg.L_sbar || cfg.No_bar? 'landscape:col-start-0 landscape:col-end-13 landscape:w-svw' :cfg.Right? 'landscape:col-start-0  landscape:col-end-11  landscape:w-svw '  :'landscape:w-[90svw] landscape:col-start-2  landscape:col-end-13 justify-self-end '} 
                border border-black/70 dark:border-black/60 
                self-start   col-span-full  row-end-auto auto-rows-auto  rounded-lg  portrait:px-3  landscape:px-5  portrait:pb-20 bg-[#bbc8] dark:bg-gray-900/80 
                bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]  from-[#bbc] via-[#ccd] to-[#def]  dark:from-[#334] dark:via-[#445] dark:to-[#121113] 
            "
        style ='box-shadow: 2pt 6pt  1ch #223, 0 0  8ch #ccd, inset 0 0 3pt #000, inset 0 0 2ch #201830, inset 0 0 12svmax #768b;'
> 
    <Content  P=1   Title='Orders' />
</main>