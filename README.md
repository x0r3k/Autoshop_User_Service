# Autoshop Project
Autoshop project is built using Service-Oriented architecture (SOA). It has been divided at multiple independent services. 

There are following services:
- User service
- Order service
- Product service

To facilitate work and developement of all services one central database (DB) was used instead of multiple instances. But this single DB not physically but logically splits tables among services. 

This Documentation describes both common and service-specific approaches, architecture solutions.

This repository contain code and documentation for User service.
## User service
User service is needed to give ability:
- register in service as a customer
- authorize in system with different roles
- work with role and permission dictionaries as administrator
- generate JWT tokens and work with them
- etc

### Project folder arcitecture:
- "dist" - contains built project code after typescript compilation
- "node_modules" - contains all locally installed npm modules
- "src" - main folder that contains all source code that compiles to the "dist" dir
- "src/api" - contains code that implements endpoints and APIs
- "src/assets" - static assets that can be used by client side
- "src/common" - ???
- "src/config" - contains main configuration files that used in all project
- "src/sequelize" - contains all data and code that relates to DB and ORM
- "src/services" - big block of codes that are used in project
- "src/types" - holds .d.ts files required to augmentate existing npm-module types. Also it holds common custom types, interfaces, classes, etc. 
- "src/utils" - small block of codes or just helper functions that used in project

### TypeScript interfaces
General typescript interfaces are stored in "src/types/common" folder. If interface is relates to some part of project it stores closer to their reference in types.ts file

### Developement notes
Watch DEV_NOTES.txt. Later will be moved to readme