<script>
    import  ChevronLeft   from  '~icons/lucide/chevron-left'
    import  ChevronRight  from  '~icons/lucide/chevron-right'
    import  Copy          from  '~icons/lucide/copy'
    import  CreditCard    from  '~icons/lucide/credit-card'
    import  File          from  '~icons/lucide/file'
    import  ListFilter    from  '~icons/lucide/list-filter'
  
    import  Truck              from  '~icons/lucide/truck'
    import  EllipsisVertical   from  '~icons/lucide/ellipsis-vertical';
    
    import  * as DropdownMenu  from '$lib/components/ui/dropdown-menu/index.js'
    import  * as Card          from '$lib/components/ui/card/index.js'
    import  * as Pagination    from '$lib/components/ui/pagination/index.js'
    import  {Badge}       from  '$lib/components/ui/badge/index.js'
    import  {Button}      from  '$lib/components/ui/button/index.js'
    import  {Progress}    from  '$lib/components/ui/progress/index.js'
    import  {Separator}   from  '$lib/components/ui/separator/index.js'
    import  * as Table    from  '$lib/components/ui/table/index.js'
    import  * as Tabs     from  '$lib/components/ui/tabs/index.js';
  
  
    let  {Tdata } =$props();
  
  </script>
  
  
  <h1   class='text-3xl  mb-8 '>Orders </h1>
  
  <article  class='grid grid-cols-6   items-start   justify-between  min-h-full 
                   auto-rows-max  col-span-full  *:gap-x-[2svw]  *:gap-y-[4svh] '
  >
  
    <div  class='grid grid-cols-subgrid gap-4 row-start-1  col-span-full md:col-span-3 landscape:col-span-4 '>
      
      <Card.Root class='col-span-full  landscape:col-span-4 '>
          <Card.Header class='pb-4'>
              <Card.Title>Your Orders</Card.Title>
              <Card.Description class='max-w-lg text-balance leading-relaxed'>
                  Dynamic Orders Dashboard for seamless management and insightful analysis.
              </Card.Description>
          </Card.Header>
          <Card.Footer>
              <Button>Create New Order</Button>
          </Card.Footer>
      </Card.Root>
  
      <Card.Root  class='col-span-1 row-span-1 row-start-2 '>
          <Card.Header class='pb-2'>
              <Card.Description>This Week</Card.Description>
              <Card.Title class='text-4xl'>$1329</Card.Title>
          </Card.Header>
          <Card.Content>
              <div class='text-xs text-muted-foreground'>+25% from last week</div>
          </Card.Content>
          <Card.Footer>
              <Progress value={25} aria-label='25% increase' />
          </Card.Footer>
      </Card.Root>
          
      <Card.Root  class='row-start-2 row-span-1'>
          <Card.Header class='pb-2'>
              <Card.Description>This Month</Card.Description>
              <Card.Title class='text-3xl'>$5,329</Card.Title>
          </Card.Header>
          <Card.Content>
              <div class='text-xs text-muted-foreground'>+10% from last month</div>
          </Card.Content>
          <Card.Footer>
              <Progress value={12} aria-label='12% increase' />
          </Card.Footer>
      </Card.Root>
    </div>
    
    <!------------------------ Last orders -------------------------->
    <div class = 'col-span-full  col-start-1 row-start-3  landscape:col-start-5  landscape:row-start-1  ' >
      <Card.Root class='overflow-hidden'>
      <Card.Header class='flex flex-row items-start bg-muted/50'>
          <div class='grid gap-1'>
          <Card.Title   class='group flex items-center gap-2 text-lg'
                        onclick = {e=> navigator.clipboard.writeText(e.currentTarget.childNodes[1].textContent)}
          > Order Oe31b70H
              <Button
                  size    ='icon'
                  variant ='outline'
                  class   ='h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100'
              >
              <Copy class='size-5 scale-y-125' />
              <span class='sr-only'>Copy Order ID</span>
              </Button>
          </Card.Title>
          <Card.Description>Date: November 23, 2024</Card.Description>
          </div>
          <div class='ml-auto flex items-center gap-1'>
          <Button size='sm' variant='outline' class='h-8 gap-1'>
              <Truck class='h-3.5 w-3.5' />
              <span class='lg:sr-only xl:not-sr-only xl:whitespace-nowrap'>
              Track Order
              </span>
          </Button>
          <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild let:builder>
              <Button
                  builders={[builder]}
                  size='icon'
                  variant='outline'
                  class='h-8 w-8'
              >
                  <EllipsisVertical class='h-3.5 w-3.5' />
                  <span class='sr-only'>More</span>
              </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content align='end'>
              <DropdownMenu.Item>Edit</DropdownMenu.Item>
              <DropdownMenu.Item>Export</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item>Trash</DropdownMenu.Item>
              </DropdownMenu.Content>
          </DropdownMenu.Root>
          </div>
      </Card.Header>
      <Card.Content class='p-6 text-sm'>
          <div class='grid gap-3'>
          <div class='font-semibold'>Order Details</div>
          <ul class='grid gap-3'>
              <li class='flex items-center justify-between'>
              <span class='text-muted-foreground'>
                  Glimmer Lamps x <span>2</span>
              </span>
              <span>$250.00</span>
              </li>
              <li class='flex items-center justify-between'>
              <span class='text-muted-foreground'>
                  Aqua Filters x <span>1</span>
              </span>
              <span>$49.00</span>
              </li>
          </ul>
          <Separator class='my-2' />
          <ul class='grid gap-3'>
              <li class='flex items-center justify-between'>
              <span class='text-muted-foreground'>Subtotal</span>
              <span>$299.00</span>
              </li>
              <li class='flex items-center justify-between'>
              <span class='text-muted-foreground'>Shipping</span>
              <span>$5.00</span>
              </li>
              <li class='flex items-center justify-between'>
              <span class='text-muted-foreground'>Tax</span>
              <span>$25.00</span>
              </li>
              <li class='flex items-center justify-between font-semibold'>
              <span class='text-muted-foreground'>Total</span>
              <span>$329.00</span>
              </li>
          </ul>
          </div>
          <Separator class='my-4' />
          <div class='grid w-full grid-cols-2 justify-between'>
          <div class='grid justify-between'>
              <div class='font-semibold'>Shipping Information</div>
              <address class='grid gap-0.5 not-italic text-muted-foreground'>
              <span>{Tdata[0][0]}</span>
              <span>{Tdata[0][7]}</span>
              </address>
          </div>
          <div class='grid auto-rows-max gap-3'>
              <div class='font-semibold'>Billing Information</div>
              <div class='text-muted-foreground'>Same as shipping address</div>
          </div>
          </div>
          <Separator class='my-4' />
          <div class='grid gap-3'>
          <div class='font-semibold'>Customer Information</div>
          <dl class='grid gap-3'>
              <div class='flex items-center justify-between'>
              <dt class='text-muted-foreground'>Customer</dt>
              <dd>{Tdata[0][0]}</dd>
              </div>
              <div class='flex items-center justify-between'>
              <dt class='text-muted-foreground'>Email</dt>
              <dd>
                  <a href='mailto:'>{Tdata[0][1]}</a>
              </dd>
              </div>
              <div class='flex items-center justify-between'>
              <dt class='text-muted-foreground'>Phone</dt>
              <dd>
                  <a href='tel:'>{Tdata[0][6]}</a>
              </dd>
              </div>
          </dl>
          </div>
          <Separator class='my-4' />
          <div class='grid gap-3'>
          <div class='font-semibold'>Payment Information</div>
          <dl class='grid gap-3'>
              <div class='flex items-center justify-between'>
              <dt class='flex items-center gap-1 text-muted-foreground'>
                  <CreditCard class='h-4 w-4' />
                  Visa
              </dt>
              <dd>**** **** **** 4532</dd>
              </div>
          </dl>
          </div>
      </Card.Content>
      <Card.Footer class='flex flex-row items-center justify-between border-t bg-muted/50 px-6 py-3'>
          <div class='text-md text-muted-foreground'>
          Updated on <time dateTime='2024-11-23'> 23-11-2024 </time>
          </div>
          <Pagination.Root count={10} class='ml-auto mr-1 w-max'>
          <Pagination.Content>
              <Pagination.Item>
              <Button size='icon' variant='outline' class='size-7'>
                  <ChevronLeft class='size-6' />
                  <span class='sr-only'>Previous Order</span>
              </Button>
              </Pagination.Item>
              <Pagination.Item>
              <Button size='icon' variant='outline' class='size-7'>
                  <ChevronRight class='size-6' />
                  <span class='sr-only'>Next Order</span>
              </Button>
              </Pagination.Item>
          </Pagination.Content>
          </Pagination.Root>
      </Card.Footer>
      </Card.Root>
    </div>
  
   <main class = 'grid col-span-full w-full '>
      <Card.Root>
          <section class='inline-grid  portrait:grid-rows-2 w-full  justify-between gap-x-4 items-start pb-6 grid-flow-col '>
  
              <Card.Header>
                  <Card.Title class='font-light -mt-4 pb-4 tracking-wider text-2xl' >Orders Table</Card.Title>
                  <Card.Description >Recent orders from store:</Card.Description>
              </Card.Header>
          <span class= 'inline-grid grid-flow-col items-end gap-3 '> 
          <Tabs.Root  value='week'  > 
              <Tabs.Content value='week'>
              <Tabs.List class='dark:bg-[#333a] hover:shadow-md  gap-1 '>
                  <Tabs.Trigger value='week'>Week</Tabs.Trigger>
                  <Tabs.Trigger value='month'>Month</Tabs.Trigger>
                  <Tabs.Trigger value='year'>Year</Tabs.Trigger>
              </Tabs.List>
              </Tabs.Content>
          </Tabs.Root>
  
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild let:builder>
                  <Button     size='sm'   variant='outline'   
                              builders={[builder]} >
                      <ListFilter />
                      <span class='sr-only sm:not-sr-only'>Filter</span>
                  </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content align='end'>
                  <DropdownMenu.Label>Filter by</DropdownMenu.Label>
                  <DropdownMenu.Separator />
                  <DropdownMenu.CheckboxItem checked>Fulfilled</DropdownMenu.CheckboxItem>
                  <DropdownMenu.CheckboxItem>Declined</DropdownMenu.CheckboxItem>
                  <DropdownMenu.CheckboxItem>Refunded</DropdownMenu.CheckboxItem>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
  
            <Button   size='sm' variant='outline' class='gap-1'>
                      <File class='h-3.5 w-3.5' />
                      <span class='sr-only sm:not-sr-only'>Export</span>
            </Button></span>
  
          </section>
          <hr>
              <Card.Content class='flex items-center' >
                  <Table.Root class='border-dotted' >
  
                  <Table.Header>
                      <Table.Row class='table-row  text-lg bg-black *:h-8 *:bg-muted/80 border-collapse border-muted-foreground'>
                      <Table.Head class=' table-cell'>Customer</Table.Head>
                      <Table.Head class=' sm:table-cell'>Type</Table.Head>
                      <Table.Head class=' sm:table-cell'>Status</Table.Head>
                      <Table.Head class=' sm:table-cell'>Date</Table.Head>
                      <Table.Head class='sm:table-cell text-right'>Amount</Table.Head>
                      </Table.Row>
                  </Table.Header>
  
                  <Table.Body class='table-row-group'>
                      {#each Tdata  as  tr}
                        <Table.Row>
                          <Table.Cell>
                          <div  class='font-medium'>{tr[0]}</div>
                          <div  class='hidden text-sm text-muted-foreground md:inline'>{tr[1]}</div>
                          </Table.Cell>
                          <Table.Cell class='hidden sm:table-cell'>{tr[2]}</Table.Cell>
                          <Table.Cell class='hidden sm:table-cell'>
                              <Badge class='text-xs' variant='secondary'>
                                {tr[3]==='J'? '✔' :tr[3]==='X'? '❌' : '🏁'}
                              </Badge>
                          </Table.Cell>
                          <Table.Cell class='hidden md:table-cell'>{tr[4]}</Table.Cell>
                          <Table.Cell class='text-right'>${tr[5]}</Table.Cell>
                        </Table.Row>
                      {/each}
                  </Table.Body>
                </Table.Root>
              </Card.Content>
   </Card.Root>
  </main>

</article>