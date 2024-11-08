<script>
import  {Root, Trigger, Content}    from  '$lib/components/ui/tooltip/index.js';

let  {t, css, children} =$props()
let hov = false

</script>


<Root>
    <Trigger  asChild  let:builder >
      <span
            class  ='inline-grid  items-center  justify-center   place-content-center 
                     text-foreground/60  hover:text-foreground   rounded-md  text-black
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