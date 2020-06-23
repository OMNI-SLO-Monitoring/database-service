# cpu-utilization-observer

A Package that exports a NestJS Module, that measures the current CPU Usage and provides an endpoint under `/cpu` to query cpu usage.

## Installation

Install: `npm i git+https://github.com/ccims/cpu-utilization-observer.git`

Import it into a module like so:

    imports: [
      CpuUtilizationModule
    ],

## Usage

Make Get Request to `/cpu` to query cpu usage
