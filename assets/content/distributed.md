# Distributed Systems

<details>
<summary>
...
</summary>

## [Check out MIT 6.033](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-033-computer-system-engineering-spring-2018/index.htm) for all this content and more!

Systems have faults. We have to take this into account and build reliable, *fault-tolerant systems*. 

We design fault-tolerant systems by:
1. Identifying all possible faults
2. Detecting and containing the faults
3. Handling the faults

On reliability:
* Reliability always comes at a cost (dollars, time, simplicity)
   * We can quantify reliability with many metrics, one of which is Mean Time Between Failures (MTBF)
* Our main tool for improving reliability is *redundancy*
   * One form of redundancy is *replication*
      * *Redundant Array of Inexpensive Disks (RAID)* replicates data across disks in a smart way
      * There are multiple RAID system to deal with disk failures
         * RAID 1 (mirroring) can recover from a single disk failure but requires 2N disks
         * RAID 4 (dedicated parity disk) can recover from a single disk failure, only requires N+1 disks, but all writes hit the parity disk
         * RAID 5 (spread out the parity) can recover from a single disk failure, only requires N+1 disks, and the writes are spread across multiple disks

We need to be able to build reliable systems from unreliable components.
* This is difficult because reasoning about failures is difficult
* Abstractions can help us reason about failures. These include:
   * *Atomicity:* an action is atomic if it happens completely or not at all
      * It is tricky to design actions to be atomic, but if we can, it will substantially simplify reasoning about faults
      * Even though they perform poorly, we can move towards atomicity with *shadow copies*
      * (Write-ahead) logs provide atomicity with better performance than shadow copies
         * *Cell storage* is used with the log for better read-performance, while *caches* and *truncation* can be used to improve write-performance and recovery-performance
   * *Isolation:* if we guarantee isolation, then two actions will appear to run serially even if they were executed concurrently
      * It is a bad idea to actually run processes serially using a global lock
         * We can't just put *locks* around everything - using them is critical but must be applied systematically
      * There are many ways in which multiple transactions can appear to have run in sequence. These are called different notions of *serializability*
         * *Conflicts* arise if two operations operate on the same object and at least one of them is a write
         * A schedule is *conflict serializable* if the order of all its conflicts is the same as the order of the conflicts in some sequential schedule
            * We can use this to construct a conflict graph, noting that a schedule is conflict serializable if and only if it has an acyclic conflict graph
            * We don't want to generate all possible schedules and check their conflict graphs. This is too hard. Instead we can just use:
               * *Two-phase Locking (2PL)*
                  1. Each shared variable has a lock
                  2. Before any operation on a variable, the transaction must acquire the corresponding lock
                  3. After the transaction releases a lock, it may not acquire any other locks
               * The course notes prove that 2PL produces a conflict-serializable schedule, but notes that it can result in deadlock, which can be resolved by taking advantage of atomicity
   * *Transactions:* provide atomicity and isolation
      * *Two-phase commits* allow us to achieve multi-site (a.k.a. distributed) atomicity.
         * Failures in a two-phase commit are either aborted or recover into the prepared state, depending on where the failure occurs. Both are safe
         * Our remaining issues deal with availability and replication: we will replicate data across sites to improve availability but must deal with keeping multiple copies of data *consistent*
            * *Replicated State Machines (RSMs)* provide *single-copy consistency* (i.e. operations complete as if there is a single copy of the data, though internally there are replicas)
               * RSMs use a *primary-backup* mechanism for replication. The *view server* ensures that only one replica acts as the primary. It can also recruit new backups after servers fail
                  * To handle view-server failures, we need a mechanism to provide *distributed consensus*

</details>
