# Operating Systems

<details>
<summary>
...
</summary>

## Complexity limits what we can build, but can be mitigated with modularity and abstraction. Operating systems enforce modularity on a single machine ([MIT 6.033, Spring 2018](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-033-computer-system-engineering-spring-2018/index.htm))

In order to enforce modularity and build an effective OS:
1. Programs shouldn't be able to refer to (or corrupt) each others' memory
   * To enforce this, we virtualize memory
   * The Memory Management Unit (MMU) translates virtual addresses to physical addresses using *page tables*.
2. Programs should be able to communicate
   * To enforce this, we virtualize communication links
   * *Bounded buffers* allow programs to communicate, and are tricky to implement due to *concurrency* (time multiplexed processes). *Locks* allow us to implement *atomic actions*, but this is also tricky to do right thanks to *race conditions*, *deadlock*, and *performance issues*.
3. Programs should be able to share a CPU (without one program halting the progress of others)
   * To enforce this, we virtualize processors
   * *Threads* virtualize a processor to share it among programs. The kernel can suspend the current thread and resume another using *yield*. *Condition variables* provide a more efficient API for threads, where they *wait* for an event and are *notified* when it occurs. *Preemption* forces a thread to be interrupted so we don't have to rely on people correctly using yield, but it requries a special *interrupt* and hardware support to disable other interrupts.

The OS enforces modularity on a single machine via virtualization and abstraction.

The kernel manages page faults and other interrupts.

## Processes

### Semaphores

### Mutexes

## Resource Allocation

## Context Switching

## Scheduling

</details>
