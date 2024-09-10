<script>
    
  import    * as Breadcrumb     from '$lib/components/ui/breadcrumb/index.js';
  import    * as DropdownMenu   from '$lib/components/ui/dropdown-menu/index.js';
  import    Dark_Light          from '$lib/Dark_Light.svelte';
  import    {Button}            from '$lib/components/ui/button/index.js';

  
  //inline-grid  top-0  w-full  h-24  //items-center  content-center self-start  justify-center  sm:gap-4  rounded-b-md'
    let {fixed}  =$props();
</script>


<span   class =
      ' inline-grid   m-0 top-0  h-fit w-full {fixed? 'fixed ' :'absolute '}
        grid-cols-12  p-0 z-30  min-h-[8ch]  items-center place-items-center 
        grid-flow-col gap-x-4  col-span-full  place-content-evenly  border-b
        bg-stone-300/85  dark:bg-background/80  sm:border-1  border-muted '
>

<Breadcrumb.Root  class ='inline-grid  invisible   md:visible  rounded-lg  bg-muted/80 dark:bg-muted
                          col-start-2   col-end-7  px-4  py-2   contrast-200 justify-self-start '
>
  <Breadcrumb.List  class= 'text-[2ch]' >
    <Breadcrumb.Item> 
      <Breadcrumb.Link href='##'> Dashboard </Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>
      <Breadcrumb.Link  href='##'> Orders </Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>
      <Breadcrumb.Page> Recent Orders </Breadcrumb.Page>
    </Breadcrumb.Item>
  </Breadcrumb.List>
</Breadcrumb.Root>

  <span  class ='inline-grid  col-start-10 col-end-13 gap-x-0.5 justify-evenly '>

    <Dark_Light />

    <DropdownMenu.Root >
    <DropdownMenu.Trigger asChild let:builder>
        <Button
                size='icon'
                class='size-12  col-start-11 overflow-hidden rounded-full transition-all duration-300
                      hover:scale-150  border-black border-2 select-none  shadow-xl shadow-blue-800 self-center'
                builders={[builder]}
        >                   <!-- /images/placeholder-user.jpg' '~icons/lucide/users' -->
            <img    alt   ='Avatar'
                    src   ='https://avatars.githubusercontent.com/u/26680960?v=4'
                    class ='overflow-hidden self-stretch rounded-full'
            />
        </Button>
    </DropdownMenu.Trigger>

    <DropdownMenu.Content  align='end'>
        <DropdownMenu.Label> Account: </DropdownMenu.Label>  <DropdownMenu.Separator/>
        <DropdownMenu.Item>  Settings </DropdownMenu.Item>
        <DropdownMenu.Item>  Support </DropdownMenu.Item>   <DropdownMenu.Separator/>
        <DropdownMenu.Item>  Logout  </DropdownMenu.Item>
    </DropdownMenu.Content>
    </DropdownMenu.Root>
  </span>

</span>