<script  lang='ts'>
    import { activeElement } from "runed";
   
    let inp_Elm = $state<HTMLInputElement | undefined>();
    
    $effect(()=> console.log("Active element is: ", activeElement.current));

  </script>
   
  <input bind:this={inp_Elm} />
   <textarea> ddl </textarea>

  {#if activeElement.current}
    The {activeElement.current} element is active!
  {:else}  not active ...
  {/if}