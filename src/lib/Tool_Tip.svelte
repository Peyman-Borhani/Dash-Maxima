<script>
import  {Root, Trigger, Content}    from  '$lib/components/ui/tooltip/index.js';

let  {t, css, children} =$props()

</script>


<Root>
    <Trigger  asChild  let:builder >
      <span
            class  ='inline-grid   w-fit   {css}   items-center   justify-between  cursor-pointer
                     text-muted-foreground  hover:scale-125   rounded-md    place-content-between
                     hover:text-foreground  active:scale-150  duration-200  transition-all  '
            use:builder.action   {...builder}
        >
            {@render children()}
            <span  class='sr-only'>{t}</span>
      </span>
    </Trigger>
    <Content class='text-md lg:text-xl xl:text-2xl'>{t}</Content>
</Root>