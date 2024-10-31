<script>
  import  {setMode, mode, systemPrefersMode}  from  'mode-watcher';
  //import    Sun     from  '~icons/system-uicons/moon';
  import    Sun     from  '~icons/f7/sun-max-fill';
  import    Moon    from  '~icons/radix-icons/moon';

  setMode( $systemPrefersMode==='dark'?  'dark'  :'light' );
  let Thm_Hov = $state(false);
 // let  {onpointerenter, onpointerleave, onpointerup} = $props();{onpointerup} {onpointerenter} {onpointerleave}
</script>

<button   
        class ='inline-grid  z-30  size-9  text-3xl  self-center  place-items-center select-none rounded-full col-start-9
                shadow-inner shadow-violet-700  transition-all duration-300 dark:text-violet-300/80'
        style = {Thm_Hov? 'scale: 1.4; box-shadow: 0 0 .3ch #62c, 0 0 1.2ch #84e, inset 0 0 1.4ch #409' : ''}
        onpointerup     ={()=> {setMode($mode==='light'? 'dark' :'light'); Thm_Hov=false} }
        onpointerenter  ={_=> Thm_Hov= true} 
        onpointerleave  ={_=> Thm_Hov= false}
>   
                      <!--in case of emoji mix:🙂🌙🔆🌜✨🌞 -rotate-90 -->
            {#if  $mode==='light'}  <Sun  class='bg-yellow-100  rounded-full shadow-lg shadow-yellow-300' />
            {:else}                 <Moon class= 'p-0.5 hover:border border-violet-600 rounded-full shadow-inner shadow-violet-600 ' />
            {/if}

     
     <!-- <Moon  class ='text-purple-200 h-7 w-7'/> -->

  <span  hidden> Theme "Dark/Light"  </span>
</button>
