# Operating Systems

## Complexity limits what we can build, but can be limited with modularity and abstraction. Operating systems enforce modularity on a single machine ([MIT 6.033, Spring 2018](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-033-computer-system-engineering-spring-2018/week-1/MIT6_033S18lec1.pdf))

In order to enforce modularity and build an effective OS:
1. Programs shouldn't be able to refer to (or corrupt) each others' memory
   * To enforce this, we virtualize memory
   * The Memory Management Unit (MMU) translates virtual addresses to physical addresses using *page tables*.
2. Programs should be able to communicate
   * To enforce this, we virtualize communication links
3. Programs should be able to share a CPU (without one program halting the progress of others)
   * To enforce this, we virtualize processors

The OS enforces modularity on a single machine via virtualization and abstraction.

The kernel manages page faults and other interrupts.

## Processes

## Threads

## Concurrency

### Semaphores

### Mutexes

### Locks

## Resource Allocation

## Context Switching

## Scheduling
