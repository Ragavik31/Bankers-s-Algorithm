# Bankers-s-Algorithm
Process Scheduling
Banker's Algorithm for Process Scheduling
Overview
This repository contains an implementation of the Banker's Algorithm, a resource allocation and deadlock avoidance algorithm used in operating systems for process scheduling. The algorithm ensures that a system remains in a safe state by checking whether granting a resource request will lead to a deadlock.
The implementation is written in javascript and includes example inputs to demonstrate how the algorithm works.
Features

Simulates resource allocation for multiple processes.
Determines whether the system is in a safe state.
Prevents deadlock by denying unsafe resource requests.
Includes example test cases for easy understanding.

Installation

Clone the repository:
git clone https://github.com/Ragavik31/Bankers-s-Algorithm.git
cd bankers-algorithm


Compile the code:
gcc bankers.c -o bankers


Run the executable:
./bankers



Usage

Input Format:

The program prompts for the number of processes and resources.
Provide the Allocation Matrix (resources currently allocated to each process).
Provide the Maximum Matrix (maximum resources each process may need).
Provide the Available Resources (resources currently free).


Example Input:
Enter number of processes: 5
Enter number of resources: 3
Enter Allocation Matrix:
0 1 0
2 0 0
3 0 2
2 1 1
0 0 2
Enter Maximum Matrix:
7 5 3
3 2 2
9 0 2
2 2 2
4 3 3
Enter Available Resources:
3 3 2


Output:

The program will output whether the system is in a safe state and, if so, the safe sequence of processes.
Example:The system is in a safe state.
Safe Sequence: P1 -> P3 -> P4 -> P0 -> P2




