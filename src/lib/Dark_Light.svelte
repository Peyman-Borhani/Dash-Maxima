<script>
  import  {setMode, mode, systemPrefersMode}  from  'mode-watcher';

  setMode( $systemPrefersMode!=='light'? 'dark'  :'light' );
  let Thm_Hov = false;
</script>

<button  class='flex rounded-full bg-transparent text-2xl select-none z-2 h-10 w-10 transition-all duration-1000'

        onclick={()=> setMode($mode==='light'? 'dark' :'light')}
        onpointerenter ={_=> Thm_Hov= true} 
        onpointerleave ={_=> Thm_Hov= false}
>   
  
        <span   class ='absolute  place-self-center font-semibold font-serif transition-all duration-700 -translate-x-4' style='line-height: 1.6ch; letter-spacing: -6pt;'
              >   
            {#if Thm_Hov} 🌜✨<br>🌞     
                            <!--(  self-end -rotate-90 🙂✨🔆🌙 -->
            {:else if  $mode==='light'}  🌞
            {:else                    }  🌜✨     
            {/if}
        </span>
     
     <!-- <Moon  class ='text-purple-200 h-7 w-7'/> -->

  <span  hidden> Theme "Dark/Light"  </span>
</button>
