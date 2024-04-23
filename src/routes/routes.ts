import { lazy } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element

interface Route {
    path: string;
    component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string
    children?: Route[]
}

export const routes: Route[] = [
    {
        path: '/lazyload',
        component: lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout')),
        name: 'LazyLoading Nested (LazyLayout Component)'
    },
    {
        path: '/no-lazy',
        component: NoLazy,
        name: 'NoLazy Loading component'
    }
]