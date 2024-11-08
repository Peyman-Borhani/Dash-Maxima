<script>
import  {Root, Trigger, Content}    from  '$lib/components/ui/tooltip/index.js';

let  {t, css, children} =$props()
let hov = false

</script>


<Root>
    <Trigger  asChild  let:builder >
      <span
            class  ='inline-grid   w-fit   {css} mx-auto  items-center   justify-between   
                     hover:text-foreground   rounded-md  text-black   place-content-between
                     hover:scale-150  transition-all  duration-200   dark:text-foreground '
            onpointerover   ={()=>hov=true}
            onpointerleave  ={()=>hov=false}
            use:builder.action   {...builder}
        >
            {@render children()}
            <span  class='sr-only'>{t}</span>
      </span>
    </Trigger>
    <Content >{t}</Content>
</Root>