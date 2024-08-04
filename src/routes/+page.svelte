<script>

//import { activeElement } from "runed";
import  {Accordion}     from  'bits-ui';
import  Dash            from  '$lib/Dash.svelte';
import  {Button}        from   '$lib/components/ui/button';
//import  '$lib/comp.svelte.js'
////$effect(()=> console.log("Active element is: ", activeElement.current));
</script>

<Dash />

<Button> Hello </Button>
 
<Accordion.Root>
    <Accordion.Item value="first">
      <Accordion.Header>
        <Accordion.Trigger>First</Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content>First accordion content</Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="second">
      <Accordion.Header>
        <Accordion.Trigger>Second</Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content>Second accordion content</Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="third">
      <Accordion.Header>
        <Accordion.Trigger>Third</Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content>Third accordion content</Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
  
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
