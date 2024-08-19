<script>
  import  {setMode, mode, systemPrefersMode}  from  'mode-watcher';

  setMode( $systemPrefersMode!=='light'? 'dark'  :'light' );
  let Thm_Hov = false;
</script>

<button  class='flex rounded-full bg-transparent text-2xl select-none z-2 size-12 transition-all duration-800 hover:scale-150'

        onclick={()=> setMode($mode==='light'? 'dark' :'light')}
        onpointerenter ={_=> Thm_Hov= true} 
        onpointerleave ={_=> Thm_Hov= false}
>   
  
        <span   class ='absolute  place-self-center font-semibold font-serif' style='line-height: 14pt;  letter-spacing: -6pt;'
              >   
            {#if Thm_Hov}  <span > 🌜✨ <br>🌞 </span> 
                            <!--(  self-end -rotate-90 🙂✨🔆🌙 -->
            {:else if  $mode==='light'}  🌞
            {:else                    }  🌜✨     
            {/if}
        </span>
     
     <!-- <Moon  class ='text-purple-200 h-7 w-7'/> -->

  <span  hidden> Theme "Dark/Light"  </span>
</button>
