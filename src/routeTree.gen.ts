/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LoginImport } from './routes/login'
import { Route as AuthorizeImport } from './routes/authorize'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const AuthorizeRoute = AuthorizeImport.update({
  id: '/authorize',
  path: '/authorize',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/authorize': {
      id: '/authorize'
      path: '/authorize'
      fullPath: '/authorize'
      preLoaderRoute: typeof AuthorizeImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/authorize': typeof AuthorizeRoute
  '/login': typeof LoginRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/authorize': typeof AuthorizeRoute
  '/login': typeof LoginRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/authorize': typeof AuthorizeRoute
  '/login': typeof LoginRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/authorize' | '/login'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/authorize' | '/login'
  id: '__root__' | '/' | '/authorize' | '/login'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthorizeRoute: typeof AuthorizeRoute
  LoginRoute: typeof LoginRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthorizeRoute: AuthorizeRoute,
  LoginRoute: LoginRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/authorize",
        "/login"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/authorize": {
      "filePath": "authorize.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
